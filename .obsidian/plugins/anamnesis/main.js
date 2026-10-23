"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => AnamnesisPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian7 = require("obsidian");

// src/actions.ts
var import_obsidian = require("obsidian");

// src/dates.ts
var DAY_MS = 864e5;
var ISO_RE = /^(\d{4})-(\d{2})-(\d{2})/;
function isoDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function todayIso() {
  return isoDate(/* @__PURE__ */ new Date());
}
function normalizeIso(value) {
  if (typeof value !== "string") return null;
  const m = ISO_RE.exec(value.trim());
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}
function epochDay(iso) {
  const m = ISO_RE.exec(iso);
  if (!m) throw new Error(`Not an ISO date: ${iso}`);
  return Date.UTC(+m[1], +m[2] - 1, +m[3]) / DAY_MS;
}
function addDays(iso, n) {
  const d = new Date((epochDay(iso) + n) * DAY_MS);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function daysBetween(from, to) {
  return Math.round(epochDay(to) - epochDay(from));
}

// src/queue.ts
var SNOOZES_KEY = "snoozes";
var SNOOZED_UNTIL_KEY = "snoozed_until";
function norm(s) {
  return s.trim().replace(/^#/, "").toLowerCase();
}
function typeOf(rec, cfg) {
  const v = rec.frontmatter?.[cfg.typeKey];
  return typeof v === "string" ? norm(v) : null;
}
function hasType(rec, cfg) {
  return typeOf(rec, cfg) === norm(cfg.typeValue);
}
function isExcluded(rec, cfg) {
  const excluded = cfg.excludeTags.map(norm).filter(Boolean);
  return rec.tags.map(norm).some((t) => excluded.some((x) => t === x || t.startsWith(x + "/")));
}
function isQueued(rec, cfg) {
  return hasType(rec, cfg) && !isExcluded(rec, cfg);
}
function classify(rec, today, cfg) {
  const fm = rec.frontmatter ?? {};
  const snoozes = Math.max(0, Math.floor(Number(fm[SNOOZES_KEY]) || 0));
  const snoozedUntil = normalizeIso(fm[SNOOZED_UNTIL_KEY]);
  const resting = snoozedUntil !== null && snoozedUntil > today;
  return {
    path: rec.path,
    basename: rec.basename,
    ctime: rec.ctime,
    ageDays: Math.max(0, daysBetween(isoDate(new Date(rec.ctime)), today)),
    snoozes,
    snoozedUntil,
    state: resting ? "resting" : "due",
    returnsIn: resting ? daysBetween(today, snoozedUntil) : 0,
    exhausted: snoozes >= cfg.ladder.length,
    tags: rec.tags.map(norm).filter((t) => t !== norm(cfg.typeValue))
  };
}
function buildQueue(records, today, cfg) {
  const items = records.filter((r) => isQueued(r, cfg)).map((r) => classify(r, today, cfg));
  return {
    due: items.filter((i) => i.state === "due").sort((a, b) => a.ctime - b.ctime),
    resting: items.filter((i) => i.state === "resting").sort((a, b) => a.returnsIn - b.returnsIn || a.ctime - b.ctime)
  };
}
function nextSnooze(snoozes, ladder, today) {
  if (snoozes >= ladder.length) return null;
  return { snoozes: snoozes + 1, until: addDays(today, ladder[snoozes]) };
}
function isExpired(item, today) {
  return item.exhausted && item.snoozedUntil !== null && item.snoozedUntil <= today;
}
function drawWeight(item) {
  return 1 + item.ageDays / 7 + item.snoozes;
}
function weightedDraw(items, rng = Math.random) {
  if (items.length === 0) return null;
  const weights = items.map(drawWeight);
  const total = weights.reduce((a, b) => a + b, 0);
  let r = rng() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r < 0) return items[i];
  }
  return items[items.length - 1];
}
var UNTAGGED = "\u2205 untagged";
function tagCounts(items) {
  const counts = /* @__PURE__ */ new Map();
  for (const item of items) {
    const tags = item.tags.length ? new Set(item.tags) : [UNTAGGED];
    for (const t of tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts].sort(
    (a, b) => +(a[0] === UNTAGGED) - +(b[0] === UNTAGGED) || b[1] - a[1] || a[0].localeCompare(b[0])
  );
}
function matchesTags(item, selected) {
  if (selected.length === 0) return true;
  return selected.some((t) => t === UNTAGGED ? item.tags.length === 0 : item.tags.includes(t));
}

// src/actions.ts
var Actions = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  get app() {
    return this.plugin.app;
  }
  get settings() {
    return this.plugin.data.settings;
  }
  async snooze(file) {
    const item = this.plugin.itemFor(file.path);
    const today = todayIso();
    const next = nextSnooze(item?.snoozes ?? 0, this.settings.ladder, today);
    if (!next) {
      new import_obsidian.Notice(`\u201C${file.basename}\u201D has no rest left. Advance it or let it go.`);
      return;
    }
    this.plugin.hold(file.path);
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      fm[SNOOZES_KEY] = next.snoozes;
      fm[SNOOZED_UNTIL_KEY] = next.until;
    });
    this.plugin.record({ path: file.path, title: file.basename, outcome: "snoozed", snoozes: next.snoozes, detail: next.until });
    await this.plugin.settle(file.path);
  }
  async retype(file, type) {
    const { typeKey, typeValue } = this.settings;
    const snoozes = this.plugin.itemFor(file.path)?.snoozes ?? 0;
    this.plugin.hold(file.path);
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      fm[typeKey] = type;
      delete fm[SNOOZES_KEY];
      delete fm[SNOOZED_UNTIL_KEY];
      if (type === "concept") {
        fm.discipline ?? (fm.discipline = []);
        fm.field ?? (fm.field = []);
      }
      fm.tags = withoutTag(fm.tags, typeValue);
      if (fm.tags === void 0) delete fm.tags;
    });
    this.plugin.record({ path: file.path, title: file.basename, outcome: "advanced", snoozes, detail: `retyped:${type}` });
    await this.plugin.settle(file.path);
  }
  async merge(file, target) {
    if (this.settings.mergeAppend) {
      const body = (await this.bodyFor(file, target)).trim();
      if (body) {
        const stamp = `%% merged from \u201C${file.basename}\u201D \xB7 ${todayIso()} %%`;
        await this.app.vault.process(target, (data) => `${data.replace(/\s*$/, "")}

${stamp}
${body}
`);
      }
    }
    await this.archive(file, "merged", target);
  }
  async archive(file, reason, mergedInto) {
    const snoozes = this.plugin.itemFor(file.path)?.snoozes ?? 0;
    const from = file.path;
    this.plugin.hold(from);
    await this.app.fileManager.processFrontMatter(file, (fm) => {
      fm[this.settings.typeKey] = "archived";
      fm.archived = todayIso();
      fm.archive_reason = reason;
      if (mergedInto) fm.merged_into = `[[${this.app.metadataCache.fileToLinktext(mergedInto, from)}]]`;
      delete fm[SNOOZED_UNTIL_KEY];
    });
    const folder = (0, import_obsidian.normalizePath)(this.settings.archiveFolder);
    if (!this.app.vault.getAbstractFileByPath(folder)) await this.app.vault.createFolder(folder);
    const dest = this.freePath(folder, file.basename, file.extension);
    this.plugin.hold(dest);
    await this.app.fileManager.renameFile(file, dest);
    this.plugin.record({ path: from, title: file.basename, outcome: reason, snoozes, detail: mergedInto?.path });
    await this.plugin.settle(from);
  }
  freePath(folder, name, ext) {
    let candidate = (0, import_obsidian.normalizePath)(`${folder}/${name}.${ext}`);
    for (let n = 1; this.app.vault.getAbstractFileByPath(candidate); n++) {
      candidate = (0, import_obsidian.normalizePath)(`${folder}/${name} ${n}.${ext}`);
    }
    return candidate;
  }
  /** The note's text without frontmatter, its internal links rewritten to resolve from `target`. */
  async bodyFor(file, target) {
    const content = await this.app.vault.read(file);
    const cache = this.app.metadataCache.getFileCache(file);
    const start = cache?.frontmatterPosition?.end.offset ?? 0;
    let body = content.slice(start);
    const refs = [...cache?.links ?? [], ...cache?.embeds ?? []].filter((r) => r.position.start.offset >= start).sort((a, b) => b.position.start.offset - a.position.start.offset);
    for (const ref of refs) {
      const { path, subpath } = (0, import_obsidian.parseLinktext)(ref.link);
      const dest = this.app.metadataCache.getFirstLinkpathDest(path, file.path);
      if (!dest) continue;
      const alias = ref.displayText && ref.displayText !== dest.basename && ref.displayText !== ref.link ? ref.displayText : void 0;
      let link = this.app.fileManager.generateMarkdownLink(dest, target.path, subpath, alias);
      if (ref.original.startsWith("!") && !link.startsWith("!")) link = "!" + link;
      const s = ref.position.start.offset - start;
      const e = ref.position.end.offset - start;
      body = body.slice(0, s) + link + body.slice(e);
    }
    return body;
  }
};
function withoutTag(tags, tag) {
  const drop = (t) => t.trim().replace(/^#/, "").toLowerCase() === tag.toLowerCase();
  if (Array.isArray(tags)) {
    const kept = tags.filter((t) => typeof t !== "string" || !drop(t));
    return kept.length ? kept : void 0;
  }
  if (typeof tags === "string") {
    const kept = tags.split(/[,\s]+/).filter((t) => t && !drop(t));
    return kept.length ? kept : void 0;
  }
  return tags;
}

// src/settings.ts
var import_obsidian2 = require("obsidian");
var DEFAULT_SETTINGS = {
  typeKey: "type",
  typeValue: "fleeting",
  excludeTags: ["daily-minimum"],
  ladder: [3, 7, 21],
  archiveFolder: "Fleeting/Archive",
  retypeOptions: ["concept", "puzzle", "task", "book", "moc"],
  mergeTargetType: "concept",
  mergeAppend: true,
  icon: "wind",
  recallEnabled: true,
  recallIcon: "brain",
  recallTypes: ["concept", "puzzle"],
  retention: 0.85,
  newPerDay: 3,
  reviewsPerDay: 8,
  maxInterval: 365
};
function queueConfig(s) {
  return { typeKey: s.typeKey, typeValue: s.typeValue, excludeTags: s.excludeTags, ladder: s.ladder };
}
function list(value) {
  return value.split(",").map((v) => v.trim()).filter(Boolean);
}
var AnamnesisSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  /** A Lucide name field with a live preview; only names Obsidian knows are saved. */
  iconSetting(known, name, value, onValid) {
    const setting = new import_obsidian2.Setting(this.containerEl).setName(name).setDesc("A Lucide icon name (lucide.dev/icons). Panel tabs pick it up when reopened.");
    const preview2 = setting.controlEl.createSpan({ cls: "anamnesis-icon-preview" });
    const show = (icon) => {
      preview2.empty();
      (0, import_obsidian2.setIcon)(preview2, icon);
      preview2.toggleClass("is-missing", !known.has(icon));
      preview2.setAttr("aria-label", known.has(icon) ? icon : "No such icon in this Obsidian");
    };
    show(value);
    setting.addText(
      (t) => t.setValue(value).onChange(async (v) => {
        const icon = v.trim().replace(/^lucide-/, "");
        show(icon);
        if (known.has(icon)) await onValid(icon);
      })
    );
  }
  display() {
    const { containerEl } = this;
    const s = this.plugin.data.settings;
    containerEl.empty();
    const save = async () => {
      await this.plugin.save();
      this.plugin.refresh();
    };
    new import_obsidian2.Setting(containerEl).setName("Appearance").setHeading();
    const known = new Set((0, import_obsidian2.getIconIds)().map((id) => id.replace(/^lucide-/, "")));
    this.iconSetting(known, "Fleeting icon", s.icon, async (name) => {
      s.icon = name;
      this.plugin.setRibbonIcon("fleeting", name);
      await save();
    });
    this.iconSetting(known, "Recall icon", s.recallIcon, async (name) => {
      s.recallIcon = name;
      this.plugin.setRibbonIcon("recall", name);
      await save();
    });
    new import_obsidian2.Setting(containerEl).setName("Queue").setHeading();
    new import_obsidian2.Setting(containerEl).setName("Type property").setDesc("Frontmatter key and value that mark a fleeting note.").addText(
      (t) => t.setPlaceholder("type").setValue(s.typeKey).onChange(async (v) => {
        s.typeKey = v.trim() || DEFAULT_SETTINGS.typeKey;
        await save();
      })
    ).addText(
      (t) => t.setPlaceholder("fleeting").setValue(s.typeValue).onChange(async (v) => {
        s.typeValue = v.trim() || DEFAULT_SETTINGS.typeValue;
        await save();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Skip tags").setDesc("Fleeting notes with any of these tags stay out of the queue. Comma separated.").addText(
      (t) => t.setValue(s.excludeTags.join(", ")).onChange(async (v) => {
        s.excludeTags = list(v);
        await save();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Snooze ladder").setDesc(
      "Days each successive \u201Cnot yet\u201D rests a note. When the last rung runs out, the note is archived."
    ).addText(
      (t) => t.setValue(s.ladder.join(", ")).onChange(async (v) => {
        const ladder = list(v).map(Number).filter((n) => Number.isFinite(n) && n > 0).map(Math.round);
        if (ladder.length) {
          s.ladder = ladder;
          await save();
        }
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Outcomes").setHeading();
    new import_obsidian2.Setting(containerEl).setName("Archive folder").setDesc("Where let-go, expired and merged notes are moved.").addText(
      (t) => t.setValue(s.archiveFolder).onChange(async (v) => {
        s.archiveFolder = v.trim() || DEFAULT_SETTINGS.archiveFolder;
        await save();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Re-type options").setDesc("Types offered when a note advances. Comma separated.").addText(
      (t) => t.setValue(s.retypeOptions.join(", ")).onChange(async (v) => {
        s.retypeOptions = list(v);
        await save();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Merge targets").setDesc("Type of the notes offered by \u201Cpart of\u2026\u201D.").addText(
      (t) => t.setValue(s.mergeTargetType).onChange(async (v) => {
        s.mergeTargetType = v.trim() || DEFAULT_SETTINGS.mergeTargetType;
        await save();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Append on merge").setDesc("Copy the fleeting note's text to the end of the note it is merged into.").addToggle(
      (t) => t.setValue(s.mergeAppend).onChange(async (v) => {
        s.mergeAppend = v;
        await save();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Recall").setHeading();
    new import_obsidian2.Setting(containerEl).setName("Enable recall").setDesc("The spaced recall panel for concepts and puzzles. Reload Obsidian after changing.").addToggle(
      (t) => t.setValue(s.recallEnabled).onChange(async (v) => {
        s.recallEnabled = v;
        await save();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Recalled types").setDesc("Note types that come up for recall. Comma separated.").addText(
      (t) => t.setValue(s.recallTypes.join(", ")).onChange(async (v) => {
        const types = list(v);
        if (types.length) {
          s.recallTypes = types;
          await save();
        }
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Target retention").setDesc(
      "The chance you can still recall a note when it comes due (0.70\u20130.97). Higher means more reviews, and the workload rises steeply near the top."
    ).addText(
      (t) => t.setValue(String(s.retention)).onChange(async (v) => {
        const n = Number(v);
        if (n >= 0.7 && n <= 0.97) {
          s.retention = n;
          await save();
        }
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Daily limits").setDesc("New notes introduced, then reviews, per day. Counted across all your devices.").addText(
      (t) => t.setPlaceholder("new").setValue(String(s.newPerDay)).onChange(async (v) => {
        const n = Math.floor(Number(v));
        if (n >= 0) {
          s.newPerDay = n;
          await save();
        }
      })
    ).addText(
      (t) => t.setPlaceholder("reviews").setValue(String(s.reviewsPerDay)).onChange(async (v) => {
        const n = Math.floor(Number(v));
        if (n >= 0) {
          s.reviewsPerDay = n;
          await save();
        }
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Longest interval").setDesc("Days. No note waits longer than this.").addText(
      (t) => t.setValue(String(s.maxInterval)).onChange(async (v) => {
        const n = Math.floor(Number(v));
        if (n >= 7) {
          s.maxInterval = n;
          await save();
        }
      })
    );
  }
};

// src/recall/Recall.ts
var import_obsidian3 = require("obsidian");

// src/recall/pool.ts
function norm2(s) {
  return s.trim().replace(/^#/, "").toLowerCase();
}
function inPool(r, cfg) {
  return r.type !== null && cfg.types.map(norm2).includes(r.type);
}
function matchesFilter(r, f) {
  const typeOk = f.types.length === 0 || r.type !== null && f.types.includes(r.type);
  const subjectOk = f.subjects.length === 0 || f.subjects.some((s) => r.subjects.includes(s));
  return typeOk && subjectOk;
}
function interleave(items, key) {
  const rest = [...items];
  const out = [];
  let prev = null;
  while (rest.length) {
    let i = rest.findIndex((t2) => key(t2) !== prev);
    if (i < 0) i = 0;
    const [t] = rest.splice(i, 1);
    out.push(t);
    prev = key(t);
  }
  return out;
}
function roundRobin(items, key, age) {
  const groups = /* @__PURE__ */ new Map();
  for (const t of [...items].sort((a, b) => age(a) - age(b))) {
    const k = key(t);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(t);
  }
  const lanes = [...groups.values()];
  const out = [];
  for (let i = 0; out.length < items.length; i++) {
    for (const lane of lanes) if (i < lane.length) out.push(lane[i]);
  }
  return out;
}
function buildDay(records, today, cfg, filter, priority = []) {
  const primary = (r) => r.primary;
  const pool = records.filter((r) => inPool(r, cfg));
  const reviewedToday = pool.filter((r) => r.state?.last === today && r.state.reps > 1).length;
  const introducedToday = pool.filter((r) => r.state?.last === today && r.state.reps === 1).length;
  const visible = pool.filter((r) => matchesFilter(r, filter));
  const due = visible.filter((r) => r.state && r.state.due <= today && r.state.last !== today).sort((a, b) => a.state.due.localeCompare(b.state.due) || a.ctime - b.ctime);
  const fresh = visible.filter((r) => !r.state);
  const rank = new Map(priority.map((p, i) => [p, i]));
  const first = fresh.filter((r) => rank.has(r.path)).sort((a, b) => rank.get(a.path) - rank.get(b.path));
  const others = roundRobin(
    fresh.filter((r) => !rank.has(r.path)),
    primary,
    (r) => r.ctime
  );
  const reviewSlots = Math.max(0, cfg.reviewsPerDay - reviewedToday);
  const newSlots = Math.max(0, cfg.newPerDay - introducedToday);
  const tomorrow = addDays(today, 1);
  const week = addDays(today, 7);
  const scheduled = visible.filter((r) => r.state && r.state.due > today);
  return {
    today: [
      ...interleave(due.slice(0, reviewSlots), primary),
      ...[...first, ...others].slice(0, newSlots)
    ],
    reviewedToday,
    introducedToday,
    dueTotal: due.length,
    newTotal: fresh.length,
    dueTomorrow: scheduled.filter((r) => r.state.due === tomorrow).length,
    dueThisWeek: scheduled.filter((r) => r.state.due <= week).length
  };
}
function facets(records, cfg) {
  const pool = records.filter((r) => inPool(r, cfg));
  const count = (keys) => {
    const m = /* @__PURE__ */ new Map();
    for (const r of pool) for (const k of new Set(keys(r))) m.set(k, (m.get(k) ?? 0) + 1);
    return [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  };
  return { types: count((r) => r.type ? [r.type] : []), subjects: count((r) => r.subjects) };
}

// node_modules/ts-fsrs/dist/index.mjs
var FSRSError = class _FSRSError extends Error {
  constructor(message = "FSRS Error") {
    super(message);
    this.name = "FSRSError";
    Error.captureStackTrace?.(this, _FSRSError);
  }
};
var FSRSValidationError = class _FSRSValidationError extends FSRSError {
  constructor(message) {
    super(message);
    this.name = "FSRSValidationError";
    Error.captureStackTrace?.(this, _FSRSValidationError);
  }
};
var State = /* @__PURE__ */ ((State2) => {
  State2[State2["New"] = 0] = "New";
  State2[State2["Learning"] = 1] = "Learning";
  State2[State2["Review"] = 2] = "Review";
  State2[State2["Relearning"] = 3] = "Relearning";
  return State2;
})(State || {});
var Rating = /* @__PURE__ */ ((Rating2) => {
  Rating2[Rating2["Manual"] = 0] = "Manual";
  Rating2[Rating2["Again"] = 1] = "Again";
  Rating2[Rating2["Hard"] = 2] = "Hard";
  Rating2[Rating2["Good"] = 3] = "Good";
  Rating2[Rating2["Easy"] = 4] = "Easy";
  return Rating2;
})(Rating || {});
var TypeConvert = class _TypeConvert {
  static card(card) {
    return {
      ...card,
      state: _TypeConvert.state(card.state),
      due: _TypeConvert.time(card.due),
      last_review: card.last_review ? _TypeConvert.time(card.last_review) : void 0
    };
  }
  static rating(value) {
    if (typeof value === "string") {
      const firstLetter = value.charAt(0).toUpperCase();
      const restOfString = value.slice(1).toLowerCase();
      const ret = Rating[`${firstLetter}${restOfString}`];
      if (ret === void 0) {
        throw new FSRSValidationError(`Invalid rating:[${value}]`);
      }
      return ret;
    } else if (typeof value === "number") {
      return value;
    }
    throw new FSRSValidationError(`Invalid rating:[${value}]`);
  }
  static state(value) {
    if (typeof value === "string") {
      const firstLetter = value.charAt(0).toUpperCase();
      const restOfString = value.slice(1).toLowerCase();
      const ret = State[`${firstLetter}${restOfString}`];
      if (ret === void 0) {
        throw new FSRSValidationError(`Invalid state:[${value}]`);
      }
      return ret;
    } else if (typeof value === "number") {
      return value;
    }
    throw new FSRSValidationError(`Invalid state:[${value}]`);
  }
  static time(value) {
    if (value instanceof Date) {
      return value;
    }
    const date = new Date(value);
    if (typeof value === "object" && value !== null && !Number.isNaN(Date.parse(value) || +date)) {
      return date;
    } else if (typeof value === "string") {
      const timestamp = Date.parse(value);
      if (!Number.isNaN(timestamp)) {
        return new Date(timestamp);
      } else {
        throw new FSRSValidationError(`Invalid date:[${value}]`);
      }
    } else if (typeof value === "number") {
      return new Date(value);
    }
    throw new FSRSValidationError(`Invalid date:[${value}]`);
  }
  static review_log(log) {
    return {
      ...log,
      due: _TypeConvert.time(log.due),
      rating: _TypeConvert.rating(log.rating),
      state: _TypeConvert.state(log.state),
      review: _TypeConvert.time(log.review)
    };
  }
};
Date.prototype.scheduler = function(t, isDay) {
  return date_scheduler(this, t, isDay);
};
Date.prototype.diff = function(pre, unit) {
  return date_diff(this, pre, unit);
};
Date.prototype.format = function() {
  return formatDate(this);
};
Date.prototype.dueFormat = function(last_review, unit, timeUnit) {
  return show_diff_message(this, last_review, unit, timeUnit);
};
function date_scheduler(now, t, isDay) {
  return new Date(
    isDay ? TypeConvert.time(now).getTime() + t * 24 * 60 * 60 * 1e3 : TypeConvert.time(now).getTime() + t * 60 * 1e3
  );
}
function date_diff(now, pre, unit) {
  if (!now || !pre) {
    throw new FSRSValidationError("Invalid date");
  }
  const diff = TypeConvert.time(now).getTime() - TypeConvert.time(pre).getTime();
  let r = 0;
  switch (unit) {
    case "days":
      r = Math.floor(diff / (24 * 60 * 60 * 1e3));
      break;
    case "minutes":
      r = Math.floor(diff / (60 * 1e3));
      break;
  }
  return r;
}
function formatDate(dateInput) {
  const date = TypeConvert.time(dateInput);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}-${padZero(month)}-${padZero(day)} ${padZero(hours)}:${padZero(
    minutes
  )}:${padZero(seconds)}`;
}
function padZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
var TIMEUNIT = [60, 60, 24, 31, 12];
var TIMEUNITFORMAT = ["second", "min", "hour", "day", "month", "year"];
function show_diff_message(due, last_review, unit, timeUnit = TIMEUNITFORMAT) {
  due = TypeConvert.time(due);
  last_review = TypeConvert.time(last_review);
  if (timeUnit.length !== TIMEUNITFORMAT.length) {
    timeUnit = TIMEUNITFORMAT;
  }
  let diff = due.getTime() - last_review.getTime();
  let i = 0;
  diff /= 1e3;
  for (i = 0; i < TIMEUNIT.length; i++) {
    if (diff < TIMEUNIT[i]) {
      break;
    } else {
      diff /= TIMEUNIT[i];
    }
  }
  return `${Math.floor(diff)}${unit ? timeUnit[i] : ""}`;
}
var Grades = Object.freeze([
  Rating.Again,
  Rating.Hard,
  Rating.Good,
  Rating.Easy
]);
var FUZZ_RANGES = [
  {
    start: 2.5,
    end: 7,
    factor: 0.15
  },
  {
    start: 7,
    end: 20,
    factor: 0.1
  },
  {
    start: 20,
    end: Infinity,
    factor: 0.05
  }
];
function get_fuzz_range(interval, elapsed_days, maximum_interval) {
  let delta = 1;
  for (const range of FUZZ_RANGES) {
    delta += range.factor * Math.max(Math.min(interval, range.end) - range.start, 0);
  }
  interval = Math.min(interval, maximum_interval);
  let min_ivl = Math.max(2, Math.round(interval - delta));
  const max_ivl = Math.min(Math.round(interval + delta), maximum_interval);
  if (interval > elapsed_days) {
    min_ivl = Math.max(min_ivl, elapsed_days + 1);
  }
  min_ivl = Math.min(min_ivl, max_ivl);
  return { min_ivl, max_ivl };
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function roundTo(num, decimals) {
  const factor = 10 ** decimals;
  return Math.round(num * factor) / factor;
}
function dateDiffInDays(last, cur) {
  const utc1 = Date.UTC(
    last.getUTCFullYear(),
    last.getUTCMonth(),
    last.getUTCDate()
  );
  const utc2 = Date.UTC(
    cur.getUTCFullYear(),
    cur.getUTCMonth(),
    cur.getUTCDate()
  );
  return Math.floor(
    (utc2 - utc1) / 864e5
    /** 1000 * 60 * 60 * 24*/
  );
}
var ConvertStepUnitToMinutes = (step) => {
  const unit = step.slice(-1);
  const value = parseInt(step.slice(0, -1), 10);
  if (Number.isNaN(value) || !Number.isFinite(value) || value < 0) {
    throw new FSRSValidationError(`Invalid step value: ${step}`);
  }
  switch (unit) {
    case "m":
      return value;
    case "h":
      return value * 60;
    case "d":
      return value * 1440;
    default:
      throw new FSRSValidationError(
        `Invalid step unit: ${step}, expected m/h/d`
      );
  }
};
var BasicLearningStepsStrategy = (params, state, cur_step) => {
  const learning_steps = state === State.Relearning || state === State.Review ? params.relearning_steps : params.learning_steps;
  const steps_length = learning_steps.length;
  if (steps_length === 0 || cur_step >= steps_length) return {};
  const firstStep = learning_steps[0];
  const toMinutes = ConvertStepUnitToMinutes;
  const getAgainInterval = () => {
    return toMinutes(firstStep);
  };
  const getHardInterval = () => {
    if (steps_length === 1) return Math.round(toMinutes(firstStep) * 1.5);
    const nextStep = learning_steps[1];
    return Math.round((toMinutes(firstStep) + toMinutes(nextStep)) / 2);
  };
  const getStepInfo = (index) => {
    if (index < 0 || index >= steps_length) {
      return null;
    } else {
      return learning_steps[index];
    }
  };
  const getGoodMinutes = (step) => {
    return toMinutes(step);
  };
  const result = {};
  const step_info = getStepInfo(Math.max(0, cur_step));
  if (state === State.Review) {
    result[Rating.Again] = {
      scheduled_minutes: toMinutes(step_info),
      next_step: 0
    };
    return result;
  } else {
    result[Rating.Again] = {
      scheduled_minutes: getAgainInterval(),
      next_step: 0
    };
    result[Rating.Hard] = {
      scheduled_minutes: getHardInterval(),
      next_step: cur_step
    };
    const next_info = getStepInfo(cur_step + 1);
    if (next_info) {
      const nextMin = getGoodMinutes(next_info);
      if (nextMin) {
        result[Rating.Good] = {
          scheduled_minutes: Math.round(nextMin),
          next_step: cur_step + 1
        };
      }
    }
  }
  return result;
};
function DefaultInitSeedStrategy() {
  const time = this.review_time.getTime();
  const reps = this.current.reps;
  const mul = this.current.difficulty * this.current.stability;
  return `${time}_${reps}_${mul}`;
}
var StrategyMode = /* @__PURE__ */ ((StrategyMode2) => {
  StrategyMode2["SCHEDULER"] = "Scheduler";
  StrategyMode2["LEARNING_STEPS"] = "LearningSteps";
  StrategyMode2["SEED"] = "Seed";
  return StrategyMode2;
})(StrategyMode || {});
var AbstractScheduler = class {
  // init
  constructor(card, now, algorithm, strategies) {
    __publicField(this, "last");
    __publicField(this, "current");
    __publicField(this, "review_time");
    __publicField(this, "next", /* @__PURE__ */ new Map());
    __publicField(this, "algorithm");
    __publicField(this, "strategies");
    __publicField(this, "elapsed_days", 0);
    this.algorithm = algorithm;
    this.last = TypeConvert.card(card);
    this.current = TypeConvert.card(card);
    this.review_time = TypeConvert.time(now);
    this.strategies = strategies;
    this.init();
  }
  checkGrade(grade2) {
    if (!Number.isFinite(grade2) || grade2 < 1 || grade2 > 4) {
      throw new FSRSValidationError(`Invalid grade "${grade2}",expected 1-4`);
    }
  }
  init() {
    const { state, last_review } = this.current;
    let interval = 0;
    if (state !== State.New && last_review) {
      interval = dateDiffInDays(last_review, this.review_time);
    }
    this.current.last_review = this.review_time;
    this.elapsed_days = interval;
    this.current.elapsed_days = interval;
    this.current.reps += 1;
    let seed_strategy = DefaultInitSeedStrategy;
    if (this.strategies) {
      const custom_strategy = this.strategies.get(StrategyMode.SEED);
      if (custom_strategy) {
        seed_strategy = custom_strategy;
      }
    }
    this.algorithm.seed = seed_strategy.call(this);
  }
  preview() {
    return {
      [Rating.Again]: this.review(Rating.Again),
      [Rating.Hard]: this.review(Rating.Hard),
      [Rating.Good]: this.review(Rating.Good),
      [Rating.Easy]: this.review(Rating.Easy),
      [Symbol.iterator]: this.previewIterator.bind(this)
    };
  }
  *previewIterator() {
    for (const grade2 of Grades) {
      yield this.review(grade2);
    }
  }
  review(grade2) {
    const { state } = this.last;
    let item;
    this.checkGrade(grade2);
    switch (state) {
      case State.New:
        item = this.newState(grade2);
        break;
      case State.Learning:
      case State.Relearning:
        item = this.learningState(grade2);
        break;
      case State.Review:
        item = this.reviewState(grade2);
        break;
    }
    return item;
  }
  buildLog(rating) {
    const { last_review, due, elapsed_days } = this.last;
    return {
      rating,
      state: this.current.state,
      due: last_review || due,
      stability: this.current.stability,
      difficulty: this.current.difficulty,
      elapsed_days: this.elapsed_days,
      last_elapsed_days: elapsed_days,
      scheduled_days: this.current.scheduled_days,
      learning_steps: this.current.learning_steps,
      review: this.review_time
    };
  }
};
var Alea = class {
  constructor(seed) {
    __publicField(this, "c");
    __publicField(this, "s0");
    __publicField(this, "s1");
    __publicField(this, "s2");
    const mash = Mash();
    this.c = 1;
    this.s0 = mash(" ");
    this.s1 = mash(" ");
    this.s2 = mash(" ");
    if (seed == null) seed = Date.now();
    this.s0 -= mash(seed);
    if (this.s0 < 0) this.s0 += 1;
    this.s1 -= mash(seed);
    if (this.s1 < 0) this.s1 += 1;
    this.s2 -= mash(seed);
    if (this.s2 < 0) this.s2 += 1;
  }
  next() {
    const t = 2091639 * this.s0 + this.c * 23283064365386963e-26;
    this.s0 = this.s1;
    this.s1 = this.s2;
    this.c = t | 0;
    this.s2 = t - this.c;
    return this.s2;
  }
  set state(state) {
    this.c = state.c;
    this.s0 = state.s0;
    this.s1 = state.s1;
    this.s2 = state.s2;
  }
  get state() {
    return {
      c: this.c,
      s0: this.s0,
      s1: this.s1,
      s2: this.s2
    };
  }
};
function Mash() {
  let n = 4022871197;
  return function mash(data) {
    data = String(data);
    for (let i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      let h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 4294967296;
    }
    return (n >>> 0) * 23283064365386963e-26;
  };
}
function alea(seed) {
  const xg = new Alea(seed);
  const prng = () => xg.next();
  prng.int32 = () => xg.next() * 4294967296 | 0;
  prng.double = () => prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
  prng.state = () => xg.state;
  prng.importState = (state) => {
    xg.state = state;
    return prng;
  };
  return prng;
}
var version = "5.4.2";
var default_request_retention = 0.9;
var default_maximum_interval = 36500;
var default_enable_fuzz = false;
var default_enable_short_term = true;
var default_learning_steps = Object.freeze([
  "1m",
  "10m"
]);
var default_relearning_steps = Object.freeze([
  "10m"
]);
var FSRSVersion = `v${version} using FSRS-6.0`;
var S_MIN = 1e-3;
var INIT_S_MAX = 100;
var FSRS5_DEFAULT_DECAY = 0.5;
var FSRS6_DEFAULT_DECAY = 0.1542;
var default_w = Object.freeze([
  0.212,
  1.2931,
  2.3065,
  8.2956,
  6.4133,
  0.8334,
  3.0194,
  1e-3,
  1.8722,
  0.1666,
  0.796,
  1.4835,
  0.0614,
  0.2629,
  1.6483,
  0.6014,
  1.8729,
  0.5425,
  0.0912,
  0.0658,
  FSRS6_DEFAULT_DECAY
]);
var W17_W18_Ceiling = 2;
var CLAMP_PARAMETERS = (w17_w18_ceiling, enable_short_term = default_enable_short_term) => [
  [S_MIN, INIT_S_MAX],
  [S_MIN, INIT_S_MAX],
  [S_MIN, INIT_S_MAX],
  [S_MIN, INIT_S_MAX],
  [1, 10],
  [1e-3, 4],
  [1e-3, 4],
  [1e-3, 0.75],
  [0, 4.5],
  [0, 0.8],
  [1e-3, 3.5],
  [1e-3, 5],
  [1e-3, 0.25],
  [1e-3, 0.9],
  [0, 4],
  [0, 1],
  [1, 6],
  [0, w17_w18_ceiling],
  [0, w17_w18_ceiling],
  [
    enable_short_term ? 0.01 : 0,
    0.8
  ],
  [0.1, 0.8]
];
var clipParameters = (parameters, numRelearningSteps, enableShortTerm = default_enable_short_term) => {
  const clip = CLAMP_PARAMETERS(W17_W18_Ceiling, enableShortTerm).slice(
    0,
    parameters.length
  );
  if (Math.max(0, numRelearningSteps) > 1) {
    const w11 = clamp(parameters[11] || 0, clip[11][0], clip[11][1]);
    const w13 = clamp(parameters[13] || 0, clip[13][0], clip[13][1]);
    const w14 = clamp(parameters[14] || 0, clip[14][0], clip[14][1]);
    const value = -(Math.log(w11) + Math.log(Math.pow(2, w13) - 1) + w14 * 0.3) / numRelearningSteps;
    const w17_w18_ceiling = clamp(
      roundTo(Math.sqrt(Math.max(value, 0)), 8),
      0.01,
      W17_W18_Ceiling
    );
    if (clip[17]) clip[17] = [clip[17][0], w17_w18_ceiling];
    if (clip[18]) clip[18] = [clip[18][0], w17_w18_ceiling];
  }
  return clip.map(
    ([min, max], index) => clamp(parameters[index] || 0, min, max)
  );
};
var migrateParameters = (parameters, numRelearningSteps = 0, enableShortTerm = default_enable_short_term) => {
  if (parameters === void 0) {
    return [...default_w];
  }
  switch (parameters.length) {
    case 21:
      return clipParameters(
        Array.from(parameters),
        numRelearningSteps,
        enableShortTerm
      );
    case 19:
      console.debug("[FSRS-6]auto fill w from 19 to 21 length");
      return clipParameters(
        Array.from(parameters),
        numRelearningSteps,
        enableShortTerm
      ).concat([0, FSRS5_DEFAULT_DECAY]);
    case 17: {
      const w = clipParameters(
        Array.from(parameters),
        numRelearningSteps,
        enableShortTerm
      );
      w[4] = +(w[5] * 2 + w[4]).toFixed(8);
      w[5] = +(Math.log(w[5] * 3 + 1) / 3).toFixed(8);
      w[6] = +(w[6] + 0.5).toFixed(8);
      console.debug("[FSRS-6]auto fill w from 17 to 21 length");
      return w.concat([0, 0, 0, FSRS5_DEFAULT_DECAY]);
    }
    default:
      console.warn("[FSRS]Invalid parameters length, using default parameters");
      return [...default_w];
  }
};
var generatorParameters = (props) => {
  const learning_steps = Array.isArray(props?.learning_steps) ? props.learning_steps : default_learning_steps;
  const relearning_steps = Array.isArray(props?.relearning_steps) ? props.relearning_steps : default_relearning_steps;
  const enable_short_term = props?.enable_short_term ?? default_enable_short_term;
  const w = migrateParameters(
    props?.w,
    relearning_steps.length,
    enable_short_term
  );
  return {
    request_retention: props?.request_retention || default_request_retention,
    maximum_interval: props?.maximum_interval || default_maximum_interval,
    w,
    enable_fuzz: props?.enable_fuzz ?? default_enable_fuzz,
    enable_short_term,
    learning_steps,
    relearning_steps
  };
};
function createEmptyCard(now, afterHandler) {
  const emptyCard = {
    due: now ? TypeConvert.time(now) : /* @__PURE__ */ new Date(),
    stability: 0,
    difficulty: 0,
    elapsed_days: 0,
    scheduled_days: 0,
    reps: 0,
    lapses: 0,
    learning_steps: 0,
    state: State.New,
    last_review: void 0
  };
  if (afterHandler && typeof afterHandler === "function") {
    return afterHandler(emptyCard);
  } else {
    return emptyCard;
  }
}
var computeDecayFactor = (decayOrParams) => {
  const decay = typeof decayOrParams === "number" ? -decayOrParams : -decayOrParams[20];
  const factor = Math.exp(Math.pow(decay, -1) * Math.log(0.9)) - 1;
  return { decay, factor: roundTo(factor, 8) };
};
function forgetting_curve(decayOrParams, elapsed_days, stability) {
  const { decay, factor } = computeDecayFactor(decayOrParams);
  return roundTo(Math.pow(1 + factor * elapsed_days / stability, decay), 8);
}
var FSRSAlgorithm = class {
  constructor(params) {
    __publicField(this, "param");
    __publicField(this, "intervalModifier");
    __publicField(this, "_seed");
    __publicField(this, "prepare_parameters", (params) => {
      const generated = generatorParameters(params);
      generated.w = clipParameters(
        Array.from(generated.w),
        generated.relearning_steps.length,
        generated.enable_short_term
      );
      return generated;
    });
    /**
     * The formula used is :
     * $$R(t,S) = (1 + \text{FACTOR} \times \frac{t}{9 \cdot S})^{\text{DECAY}}$$
     * @param {number} elapsed_days t days since the last review
     * @param {number} stability Stability (interval when R=90%)
     * @return {number} r Retrievability (probability of recall)
     */
    __publicField(this, "forgetting_curve");
    this.param = new Proxy(
      this.prepare_parameters(params),
      this.params_handler_proxy()
    );
    this.intervalModifier = this.calculate_interval_modifier(
      this.param.request_retention
    );
    this.forgetting_curve = forgetting_curve.bind(this, this.param.w);
  }
  get interval_modifier() {
    return this.intervalModifier;
  }
  set seed(seed) {
    this._seed = seed;
  }
  /**
   * @see https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm#fsrs-5
   *
   * The formula used is: $$I(r,s) = (r^{\frac{1}{DECAY}} - 1) / FACTOR \times s$$
   * @param request_retention 0<request_retention<=1,Requested retention rate
   * @throws {Error} Requested retention rate should be in the range (0,1]
   */
  calculate_interval_modifier(request_retention) {
    if (request_retention <= 0 || request_retention > 1) {
      throw new FSRSValidationError(
        "Requested retention rate should be in the range (0,1]"
      );
    }
    const { decay, factor } = computeDecayFactor(this.param.w);
    return roundTo((Math.pow(request_retention, 1 / decay) - 1) / factor, 8);
  }
  /**
   * Get the parameters of the algorithm.
   */
  get parameters() {
    return this.param;
  }
  /**
   * Set the parameters of the algorithm.
   * @param params Partial<FSRSParameters>
   */
  set parameters(params) {
    this.update_parameters(params);
  }
  params_handler_proxy() {
    const _this = this;
    return {
      set: function(target, prop, value) {
        if (prop === "request_retention" && Number.isFinite(value)) {
          _this.intervalModifier = _this.calculate_interval_modifier(
            Number(value)
          );
        } else if (prop === "w") {
          value = migrateParameters(
            value,
            target.relearning_steps.length,
            target.enable_short_term
          );
          value = clipParameters(
            Array.from(value),
            target.relearning_steps.length,
            target.enable_short_term
          );
          _this.forgetting_curve = forgetting_curve.bind(this, value);
          _this.intervalModifier = _this.calculate_interval_modifier(
            Number(target.request_retention)
          );
        }
        Reflect.set(target, prop, value);
        return true;
      }
    };
  }
  update_parameters(params) {
    const _params = this.prepare_parameters(params);
    for (const key in _params) {
      const paramKey = key;
      this.param[paramKey] = _params[paramKey];
    }
  }
  /**
     * The formula used is :
     * $$ S_0(G) = w_{G-1}$$
     * $$S_0 = \max \lbrace S_0,0.1\rbrace $$
  
     * @param g Grade (rating at Anki) [1.again,2.hard,3.good,4.easy]
     * @return Stability (interval when R=90%)
     */
  init_stability(g) {
    return Math.max(this.param.w[g - 1], 0.1);
  }
  /**
   * The formula used is :
   * $$D_0(G) = w_4 - e^{(G-1) \cdot w_5} + 1 $$
   * $$D_0 = \min \lbrace \max \lbrace D_0(G),1 \rbrace,10 \rbrace$$
   * where the $$D_0(1)=w_4$$ when the first rating is good.
   *
   * @param {Grade} g Grade (rating at Anki) [1.again,2.hard,3.good,4.easy]
   * @return {number} Difficulty $$D \in [1,10]$$
   */
  init_difficulty(g) {
    const w = this.param.w;
    const d = w[4] - Math.exp((g - 1) * w[5]) + 1;
    return roundTo(d, 8);
  }
  /**
   * If fuzzing is disabled or ivl is less than 2.5, it returns the original interval.
   * @param {number} ivl - The interval to be fuzzed.
   * @param {number} elapsed_days t days since the last review
   * @return {number} - The fuzzed interval.
   **/
  apply_fuzz(ivl, elapsed_days) {
    if (!this.param.enable_fuzz || ivl < 2.5) return Math.round(ivl);
    const generator = alea(this._seed);
    const fuzz_factor = generator();
    const { min_ivl, max_ivl } = get_fuzz_range(
      ivl,
      elapsed_days,
      this.param.maximum_interval
    );
    return Math.floor(fuzz_factor * (max_ivl - min_ivl + 1) + min_ivl);
  }
  /**
   *   @see The formula used is : {@link FSRSAlgorithm.calculate_interval_modifier}
   *   @param {number} s - Stability (interval when R=90%)
   *   @param {number} elapsed_days t days since the last review
   */
  next_interval(s, elapsed_days) {
    const newInterval = Math.min(
      Math.max(1, Math.round(s * this.intervalModifier)),
      this.param.maximum_interval
    );
    return this.apply_fuzz(newInterval, elapsed_days);
  }
  /**
   * @see https://github.com/open-spaced-repetition/fsrs4anki/issues/697
   */
  linear_damping(delta_d, old_d) {
    return roundTo(delta_d * (10 - old_d) / 9, 8);
  }
  /**
   * The formula used is :
   * $$\text{delta}_d = -w_6 \cdot (g - 3)$$
   * $$\text{next}_d = D + \text{linear damping}(\text{delta}_d , D)$$
   * $$D^\prime(D,R) = w_7 \cdot D_0(4) +(1 - w_7) \cdot \text{next}_d$$
   * @param {number} d Difficulty $$D \in [1,10]$$
   * @param {Grade} g Grade (rating at Anki) [1.again,2.hard,3.good,4.easy]
   * @return {number} $$\text{next}_D$$
   */
  next_difficulty(d, g) {
    const delta_d = -this.param.w[6] * (g - 3);
    const next_d = d + this.linear_damping(delta_d, d);
    return clamp(
      this.mean_reversion(this.init_difficulty(Rating.Easy), next_d),
      1,
      10
    );
  }
  /**
   * The formula used is :
   * $$w_7 \cdot \text{init} +(1 - w_7) \cdot \text{current}$$
   * @param {number} init $$w_2 : D_0(3) = w_2 + (R-2) \cdot w_3= w_2$$
   * @param {number} current $$D - w_6 \cdot (R - 2)$$
   * @return {number} difficulty
   */
  mean_reversion(init, current) {
    const w = this.param.w;
    return roundTo(w[7] * init + (1 - w[7]) * current, 8);
  }
  /**
   * The formula used is :
   * $$S^\prime_r(D,S,R,G) = S\cdot(e^{w_8}\cdot (11-D)\cdot S^{-w_9}\cdot(e^{w_{10}\cdot(1-R)}-1)\cdot w_{15}(\text{if} G=2) \cdot w_{16}(\text{if} G=4)+1)$$
   * @param {number} d Difficulty D \in [1,10]
   * @param {number} s Stability (interval when R=90%)
   * @param {number} r Retrievability (probability of recall)
   * @param {Grade} g Grade (Rating[0.again,1.hard,2.good,3.easy])
   * @return {number} S^\prime_r new stability after recall
   */
  next_recall_stability(d, s, r, g) {
    const w = this.param.w;
    const hard_penalty = Rating.Hard === g ? w[15] : 1;
    const easy_bound = Rating.Easy === g ? w[16] : 1;
    return roundTo(
      clamp(
        s * (1 + Math.exp(w[8]) * (11 - d) * Math.pow(s, -w[9]) * (Math.exp((1 - r) * w[10]) - 1) * hard_penalty * easy_bound),
        S_MIN,
        36500
      ),
      8
    );
  }
  /**
   * The formula used is :
   * $$S^\prime_f(D,S,R) = w_{11}\cdot D^{-w_{12}}\cdot ((S+1)^{w_{13}}-1) \cdot e^{w_{14}\cdot(1-R)}$$
   * enable_short_term = true : $$S^\prime_f \in \min \lbrace \max \lbrace S^\prime_f,0.01\rbrace, \frac{S}{e^{w_{17} \cdot w_{18}}} \rbrace$$
   * enable_short_term = false : $$S^\prime_f \in \min \lbrace \max \lbrace S^\prime_f,0.01\rbrace, S \rbrace$$
   * @param {number} d Difficulty D \in [1,10]
   * @param {number} s Stability (interval when R=90%)
   * @param {number} r Retrievability (probability of recall)
   * @return {number} S^\prime_f new stability after forgetting
   */
  next_forget_stability(d, s, r) {
    const w = this.param.w;
    return roundTo(
      clamp(
        w[11] * Math.pow(d, -w[12]) * (Math.pow(s + 1, w[13]) - 1) * Math.exp((1 - r) * w[14]),
        S_MIN,
        36500
      ),
      8
    );
  }
  /**
   * The formula used is :
   * $$S^\prime_s(S,G) = S \cdot e^{w_{17} \cdot (G-3+w_{18})}$$
   * @param {number} s Stability (interval when R=90%)
   * @param {Grade} g Grade (Rating[0.again,1.hard,2.good,3.easy])
   */
  next_short_term_stability(s, g) {
    const w = this.param.w;
    const sinc = Math.pow(s, -w[19]) * Math.exp(w[17] * (g - 3 + w[18]));
    const maskedSinc = g >= Rating.Hard ? Math.max(sinc, 1) : sinc;
    return roundTo(clamp(s * maskedSinc, S_MIN, 36500), 8);
  }
  /**
   * Calculates the next state of memory based on the current state, time elapsed, and grade.
   *
   * @param memory_state - The current state of memory, which can be null.
   * @param t - The time elapsed since the last review.
   * @param {Rating} g Grade (Rating[0.Manual,1.Again,2.Hard,3.Good,4.Easy])
   * @param r - Optional retrievability value. If not provided, it will be calculated.
   * @returns The next state of memory with updated difficulty and stability.
   */
  next_state(memory_state, t, g, r) {
    const { difficulty: d, stability: s } = memory_state ?? {
      difficulty: 0,
      stability: 0
    };
    if (t < 0) {
      throw new FSRSValidationError(`Invalid delta_t "${t}"`);
    }
    if (g < 0 || g > 4) {
      throw new FSRSValidationError(`Invalid grade "${g}"`);
    }
    if (d === 0 && s === 0) {
      return {
        difficulty: clamp(this.init_difficulty(g), 1, 10),
        stability: this.init_stability(g)
      };
    }
    if (g === 0) {
      return {
        difficulty: d,
        stability: s
      };
    }
    if (d < 1 || s < S_MIN) {
      throw new FSRSValidationError(
        `Invalid memory state { difficulty: ${d}, stability: ${s} }`
      );
    }
    const w = this.param.w;
    r = typeof r === "number" ? r : this.forgetting_curve(t, s);
    let new_s;
    if (t === 0 && this.param.enable_short_term) {
      new_s = this.next_short_term_stability(s, g);
    } else if (g === 1) {
      const s_after_fail = this.next_forget_stability(d, s, r);
      let [w_17, w_18] = [0, 0];
      if (this.param.enable_short_term) {
        w_17 = w[17];
        w_18 = w[18];
      }
      const next_s_min = s / Math.exp(w_17 * w_18);
      new_s = clamp(roundTo(next_s_min, 8), S_MIN, s_after_fail);
    } else {
      new_s = this.next_recall_stability(d, s, r, g);
    }
    const new_d = this.next_difficulty(d, g);
    return { difficulty: new_d, stability: new_s };
  }
};
var BasicScheduler = class extends AbstractScheduler {
  constructor(card, now, algorithm, strategies) {
    super(card, now, algorithm, strategies);
    __publicField(this, "learningStepsStrategy");
    let learningStepStrategy = BasicLearningStepsStrategy;
    if (this.strategies) {
      const custom_strategy = this.strategies.get(StrategyMode.LEARNING_STEPS);
      if (custom_strategy) {
        learningStepStrategy = custom_strategy;
      }
    }
    this.learningStepsStrategy = learningStepStrategy;
  }
  getLearningInfo(card, grade2) {
    const parameters = this.algorithm.parameters;
    card.learning_steps = card.learning_steps || 0;
    const steps_strategy = this.learningStepsStrategy(
      parameters,
      card.state,
      card.learning_steps
    );
    const scheduled_minutes = Math.max(
      0,
      steps_strategy[grade2]?.scheduled_minutes ?? 0
    );
    const next_steps = Math.max(0, steps_strategy[grade2]?.next_step ?? 0);
    return {
      scheduled_minutes,
      next_steps
    };
  }
  /**
   * @description This function applies the learning steps based on the current card's state and grade.
   */
  applyLearningSteps(nextCard, grade2, to_state) {
    const { scheduled_minutes, next_steps } = this.getLearningInfo(
      this.current,
      grade2
    );
    if (scheduled_minutes > 0 && scheduled_minutes < 1440) {
      nextCard.learning_steps = next_steps;
      nextCard.scheduled_days = 0;
      nextCard.state = to_state;
      nextCard.due = date_scheduler(
        this.review_time,
        Math.round(scheduled_minutes),
        false
        /** true:days false: minute */
      );
    } else {
      nextCard.state = State.Review;
      if (scheduled_minutes >= 1440) {
        nextCard.learning_steps = next_steps;
        nextCard.due = date_scheduler(
          this.review_time,
          Math.round(scheduled_minutes),
          false
          /** true:days false: minute */
        );
        nextCard.scheduled_days = Math.floor(scheduled_minutes / 1440);
      } else {
        nextCard.learning_steps = 0;
        const interval = this.algorithm.next_interval(
          nextCard.stability,
          this.elapsed_days
        );
        nextCard.scheduled_days = interval;
        nextCard.due = date_scheduler(this.review_time, interval, true);
      }
    }
  }
  newState(grade2) {
    const exist = this.next.get(grade2);
    if (exist) {
      return exist;
    }
    const next = this.next_ds(this.elapsed_days, grade2);
    this.applyLearningSteps(next, grade2, State.Learning);
    const item = {
      card: next,
      log: this.buildLog(grade2)
    };
    this.next.set(grade2, item);
    return item;
  }
  learningState(grade2) {
    const exist = this.next.get(grade2);
    if (exist) {
      return exist;
    }
    const next = this.next_ds(this.elapsed_days, grade2);
    this.applyLearningSteps(
      next,
      grade2,
      this.last.state
      /** Learning or Relearning */
    );
    const item = {
      card: next,
      log: this.buildLog(grade2)
    };
    this.next.set(grade2, item);
    return item;
  }
  reviewState(grade2) {
    const exist = this.next.get(grade2);
    if (exist) {
      return exist;
    }
    const interval = this.elapsed_days;
    const retrievability = this.algorithm.forgetting_curve(
      interval,
      this.current.stability
    );
    const next_again = this.next_ds(interval, Rating.Again, retrievability);
    const next_hard = this.next_ds(interval, Rating.Hard, retrievability);
    const next_good = this.next_ds(interval, Rating.Good, retrievability);
    const next_easy = this.next_ds(interval, Rating.Easy, retrievability);
    this.next_interval(next_hard, next_good, next_easy, interval);
    this.next_state(next_hard, next_good, next_easy);
    this.applyLearningSteps(next_again, Rating.Again, State.Relearning);
    next_again.lapses += 1;
    const item_again = {
      card: next_again,
      log: this.buildLog(Rating.Again)
    };
    const item_hard = {
      card: next_hard,
      log: super.buildLog(Rating.Hard)
    };
    const item_good = {
      card: next_good,
      log: super.buildLog(Rating.Good)
    };
    const item_easy = {
      card: next_easy,
      log: super.buildLog(Rating.Easy)
    };
    this.next.set(Rating.Again, item_again);
    this.next.set(Rating.Hard, item_hard);
    this.next.set(Rating.Good, item_good);
    this.next.set(Rating.Easy, item_easy);
    return this.next.get(grade2);
  }
  /**
   * Review next_ds
   */
  next_ds(t, g, r) {
    const next_state = this.algorithm.next_state(
      {
        difficulty: this.current.difficulty,
        stability: this.current.stability
      },
      t,
      g,
      r
    );
    const card = TypeConvert.card(this.current);
    card.difficulty = next_state.difficulty;
    card.stability = next_state.stability;
    return card;
  }
  /**
   * Review next_interval
   */
  next_interval(next_hard, next_good, next_easy, interval) {
    let hard_interval, good_interval;
    hard_interval = this.algorithm.next_interval(next_hard.stability, interval);
    good_interval = this.algorithm.next_interval(next_good.stability, interval);
    hard_interval = Math.min(hard_interval, good_interval);
    good_interval = Math.max(good_interval, hard_interval + 1);
    const easy_interval = Math.max(
      this.algorithm.next_interval(next_easy.stability, interval),
      good_interval + 1
    );
    next_hard.scheduled_days = hard_interval;
    next_hard.due = date_scheduler(this.review_time, hard_interval, true);
    next_good.scheduled_days = good_interval;
    next_good.due = date_scheduler(this.review_time, good_interval, true);
    next_easy.scheduled_days = easy_interval;
    next_easy.due = date_scheduler(this.review_time, easy_interval, true);
  }
  /**
   * Review next_state
   */
  next_state(next_hard, next_good, next_easy) {
    next_hard.state = State.Review;
    next_hard.learning_steps = 0;
    next_good.state = State.Review;
    next_good.learning_steps = 0;
    next_easy.state = State.Review;
    next_easy.learning_steps = 0;
  }
};
var LongTermScheduler = class extends AbstractScheduler {
  newState(grade2) {
    const exist = this.next.get(grade2);
    if (exist) {
      return exist;
    }
    this.current.scheduled_days = 0;
    this.current.elapsed_days = 0;
    const first_interval = 0;
    const next_again = this.next_ds(first_interval, Rating.Again);
    const next_hard = this.next_ds(first_interval, Rating.Hard);
    const next_good = this.next_ds(first_interval, Rating.Good);
    const next_easy = this.next_ds(first_interval, Rating.Easy);
    this.next_interval(
      next_again,
      next_hard,
      next_good,
      next_easy,
      first_interval
    );
    this.next_state(next_again, next_hard, next_good, next_easy);
    this.update_next(next_again, next_hard, next_good, next_easy);
    return this.next.get(grade2);
  }
  next_ds(t, g, r) {
    const next_state = this.algorithm.next_state(
      {
        difficulty: this.current.difficulty,
        stability: this.current.stability
      },
      t,
      g,
      r
    );
    const card = TypeConvert.card(this.current);
    card.difficulty = next_state.difficulty;
    card.stability = next_state.stability;
    return card;
  }
  /**
   * @see https://github.com/open-spaced-repetition/ts-fsrs/issues/98#issuecomment-2241923194
   */
  learningState(grade2) {
    return this.reviewState(grade2);
  }
  reviewState(grade2) {
    const exist = this.next.get(grade2);
    if (exist) {
      return exist;
    }
    const interval = this.elapsed_days;
    const retrievability = this.algorithm.forgetting_curve(
      interval,
      this.current.stability
    );
    const next_again = this.next_ds(interval, Rating.Again, retrievability);
    const next_hard = this.next_ds(interval, Rating.Hard, retrievability);
    const next_good = this.next_ds(interval, Rating.Good, retrievability);
    const next_easy = this.next_ds(interval, Rating.Easy, retrievability);
    this.next_interval(next_again, next_hard, next_good, next_easy, interval);
    this.next_state(next_again, next_hard, next_good, next_easy);
    next_again.lapses += 1;
    this.update_next(next_again, next_hard, next_good, next_easy);
    return this.next.get(grade2);
  }
  /**
   * Review/New next_interval
   */
  next_interval(next_again, next_hard, next_good, next_easy, interval) {
    let again_interval, hard_interval, good_interval, easy_interval;
    again_interval = this.algorithm.next_interval(
      next_again.stability,
      interval
    );
    hard_interval = this.algorithm.next_interval(next_hard.stability, interval);
    good_interval = this.algorithm.next_interval(next_good.stability, interval);
    easy_interval = this.algorithm.next_interval(next_easy.stability, interval);
    again_interval = Math.min(again_interval, hard_interval);
    hard_interval = Math.max(hard_interval, again_interval + 1);
    good_interval = Math.max(good_interval, hard_interval + 1);
    easy_interval = Math.max(easy_interval, good_interval + 1);
    next_again.scheduled_days = again_interval;
    next_again.due = date_scheduler(this.review_time, again_interval, true);
    next_hard.scheduled_days = hard_interval;
    next_hard.due = date_scheduler(this.review_time, hard_interval, true);
    next_good.scheduled_days = good_interval;
    next_good.due = date_scheduler(this.review_time, good_interval, true);
    next_easy.scheduled_days = easy_interval;
    next_easy.due = date_scheduler(this.review_time, easy_interval, true);
  }
  /**
   * Review/New next_state
   */
  next_state(next_again, next_hard, next_good, next_easy) {
    next_again.state = State.Review;
    next_again.learning_steps = 0;
    next_hard.state = State.Review;
    next_hard.learning_steps = 0;
    next_good.state = State.Review;
    next_good.learning_steps = 0;
    next_easy.state = State.Review;
    next_easy.learning_steps = 0;
  }
  update_next(next_again, next_hard, next_good, next_easy) {
    const item_again = {
      card: next_again,
      log: this.buildLog(Rating.Again)
    };
    const item_hard = {
      card: next_hard,
      log: super.buildLog(Rating.Hard)
    };
    const item_good = {
      card: next_good,
      log: super.buildLog(Rating.Good)
    };
    const item_easy = {
      card: next_easy,
      log: super.buildLog(Rating.Easy)
    };
    this.next.set(Rating.Again, item_again);
    this.next.set(Rating.Hard, item_hard);
    this.next.set(Rating.Good, item_good);
    this.next.set(Rating.Easy, item_easy);
  }
};
var Reschedule = class {
  /**
   * Creates an instance of the `Reschedule` class.
   * @param fsrs - An instance of the FSRS class used for scheduling.
   */
  constructor(fsrs2) {
    __publicField(this, "fsrs");
    this.fsrs = fsrs2;
  }
  /**
   * Replays a review for a card and determines the next review date based on the given rating.
   * @param card - The card being reviewed.
   * @param reviewed - The date the card was reviewed.
   * @param rating - The grade given to the card during the review.
   * @returns A `RecordLogItem` containing the updated card and review log.
   */
  replay(card, reviewed, rating) {
    return this.fsrs.next(card, reviewed, rating);
  }
  /**
   * Processes a manual review for a card, allowing for custom state, stability, difficulty, and due date.
   * @param card - The card being reviewed.
   * @param state - The state of the card after the review.
   * @param reviewed - The date the card was reviewed.
   * @param elapsed_days - The number of days since the last review.
   * @param stability - (Optional) The stability of the card.
   * @param difficulty - (Optional) The difficulty of the card.
   * @param due - (Optional) The due date for the next review.
   * @returns A `RecordLogItem` containing the updated card and review log.
   * @throws Will throw an error if the state or due date is not provided when required.
   */
  handleManualRating(card, state, reviewed, elapsed_days, stability, difficulty, due) {
    if (typeof state === "undefined") {
      throw new FSRSValidationError(
        "reschedule: state is required for manual rating"
      );
    }
    let log;
    let next_card;
    if (state === State.New) {
      log = {
        rating: Rating.Manual,
        state,
        due: due ?? reviewed,
        stability: card.stability,
        difficulty: card.difficulty,
        elapsed_days,
        last_elapsed_days: card.elapsed_days,
        scheduled_days: card.scheduled_days,
        learning_steps: card.learning_steps,
        review: reviewed
      };
      next_card = createEmptyCard(reviewed);
      next_card.last_review = reviewed;
    } else {
      if (typeof due === "undefined") {
        throw new FSRSValidationError(
          "reschedule: due is required for manual rating"
        );
      }
      const scheduled_days = date_diff(due, reviewed, "days");
      log = {
        rating: Rating.Manual,
        state: card.state,
        due: card.last_review || card.due,
        stability: card.stability,
        difficulty: card.difficulty,
        elapsed_days,
        last_elapsed_days: card.elapsed_days,
        scheduled_days: card.scheduled_days,
        learning_steps: card.learning_steps,
        review: reviewed
      };
      next_card = {
        ...card,
        state,
        due,
        last_review: reviewed,
        stability: stability || card.stability,
        difficulty: difficulty || card.difficulty,
        elapsed_days,
        scheduled_days,
        reps: card.reps + 1
      };
    }
    return { card: next_card, log };
  }
  /**
   * Reschedules a card based on its review history.
   *
   * @param current_card - The card to be rescheduled.
   * @param reviews - An array of review history objects.
   * @returns An array of record log items representing the rescheduling process.
   */
  reschedule(current_card, reviews) {
    const collections = [];
    let cur_card = createEmptyCard(current_card.due);
    for (const review of reviews) {
      let item;
      review.review = TypeConvert.time(review.review);
      if (review.rating === Rating.Manual) {
        let interval = 0;
        if (cur_card.state !== State.New && cur_card.last_review) {
          interval = date_diff(review.review, cur_card.last_review, "days");
        }
        item = this.handleManualRating(
          cur_card,
          review.state,
          review.review,
          interval,
          review.stability,
          review.difficulty,
          review.due ? TypeConvert.time(review.due) : void 0
        );
      } else {
        item = this.replay(cur_card, review.review, review.rating);
      }
      collections.push(item);
      cur_card = item.card;
    }
    return collections;
  }
  calculateManualRecord(current_card, now, record_log_item, update_memory) {
    if (!record_log_item) {
      return null;
    }
    const { card: reschedule_card, log } = record_log_item;
    const cur_card = TypeConvert.card(current_card);
    if (cur_card.due.getTime() === reschedule_card.due.getTime()) {
      return null;
    }
    cur_card.scheduled_days = date_diff(
      reschedule_card.due,
      cur_card.due,
      "days"
    );
    return this.handleManualRating(
      cur_card,
      reschedule_card.state,
      TypeConvert.time(now),
      log.elapsed_days,
      update_memory ? reschedule_card.stability : void 0,
      update_memory ? reschedule_card.difficulty : void 0,
      reschedule_card.due
    );
  }
};
function applyAfterHandler(value, afterHandler) {
  return typeof afterHandler === "function" ? afterHandler(value) : value;
}
var FSRS = class extends FSRSAlgorithm {
  constructor(param) {
    super(param);
    __publicField(this, "strategyHandler", /* @__PURE__ */ new Map());
    __publicField(this, "Scheduler");
    const { enable_short_term } = this.parameters;
    this.Scheduler = enable_short_term ? BasicScheduler : LongTermScheduler;
  }
  params_handler_proxy() {
    const _this = this;
    return {
      set: function(target, prop, value) {
        if (prop === "request_retention" && Number.isFinite(value)) {
          _this.intervalModifier = _this.calculate_interval_modifier(
            Number(value)
          );
        } else if (prop === "enable_short_term") {
          _this.Scheduler = value === true ? BasicScheduler : LongTermScheduler;
        } else if (prop === "w") {
          value = migrateParameters(
            value,
            target.relearning_steps.length,
            target.enable_short_term
          );
          value = clipParameters(
            Array.from(value),
            target.relearning_steps.length,
            target.enable_short_term
          );
          _this.forgetting_curve = forgetting_curve.bind(this, value);
          _this.intervalModifier = _this.calculate_interval_modifier(
            Number(target.request_retention)
          );
        }
        Reflect.set(target, prop, value);
        return true;
      }
    };
  }
  useStrategy(mode, handler) {
    this.strategyHandler.set(mode, handler);
    return this;
  }
  clearStrategy(mode) {
    if (mode) {
      this.strategyHandler.delete(mode);
    } else {
      this.strategyHandler.clear();
    }
    return this;
  }
  getScheduler(card, now) {
    const schedulerStrategy = this.strategyHandler.get(
      StrategyMode.SCHEDULER
    );
    const Scheduler = schedulerStrategy || this.Scheduler;
    const instance = new Scheduler(card, now, this, this.strategyHandler);
    return instance;
  }
  /**
   * Display the collection of cards and logs for the four scenarios after scheduling the card at the current time.
   * @param card Card to be processed
   * @param now Current time or scheduled time
   * @param afterHandler Convert the result to another type. (Optional)
   * @example
   * ```typescript
   * const card: Card = createEmptyCard(new Date());
   * const f = fsrs();
   * const recordLog = f.repeat(card, new Date());
   * ```
   * @example
   * ```typescript
   * interface RevLogUnchecked
   *   extends Omit<ReviewLog, "due" | "review" | "state" | "rating"> {
   *   cid: string;
   *   due: Date | number;
   *   state: StateType;
   *   review: Date | number;
   *   rating: RatingType;
   * }
   *
   * interface RepeatRecordLog {
   *   card: CardUnChecked; //see method: createEmptyCard
   *   log: RevLogUnchecked;
   * }
   *
   * function repeatAfterHandler(recordLog: RecordLog) {
   *     const record: { [key in Grade]: RepeatRecordLog } = {} as {
   *       [key in Grade]: RepeatRecordLog;
   *     };
   *     for (const grade of Grades) {
   *       record[grade] = {
   *         card: {
   *           ...(recordLog[grade].card as Card & { cid: string }),
   *           due: recordLog[grade].card.due.getTime(),
   *           state: State[recordLog[grade].card.state] as StateType,
   *           last_review: recordLog[grade].card.last_review
   *             ? recordLog[grade].card.last_review!.getTime()
   *             : null,
   *         },
   *         log: {
   *           ...recordLog[grade].log,
   *           cid: (recordLog[grade].card as Card & { cid: string }).cid,
   *           due: recordLog[grade].log.due.getTime(),
   *           review: recordLog[grade].log.review.getTime(),
   *           state: State[recordLog[grade].log.state] as StateType,
   *           rating: Rating[recordLog[grade].log.rating] as RatingType,
   *         },
   *       };
   *     }
   *     return record;
   * }
   * const card: Card = createEmptyCard(new Date(), cardAfterHandler); //see method:  createEmptyCard
   * const f = fsrs();
   * const recordLog = f.repeat(card, new Date(), repeatAfterHandler);
   * ```
   */
  repeat(card, now, afterHandler) {
    const instance = this.getScheduler(card, now);
    const recordLog = instance.preview();
    return applyAfterHandler(recordLog, afterHandler);
  }
  /**
   * Display the collection of cards and logs for the card scheduled at the current time, after applying a specific grade rating.
   * @param card Card to be processed
   * @param now Current time or scheduled time
   * @param grade Rating of the review (Again, Hard, Good, Easy)
   * @param afterHandler Convert the result to another type. (Optional)
   * @example
   * ```typescript
   * const card: Card = createEmptyCard(new Date());
   * const f = fsrs();
   * const recordLogItem = f.next(card, new Date(), Rating.Again);
   * ```
   * @example
   * ```typescript
   * interface RevLogUnchecked
   *   extends Omit<ReviewLog, "due" | "review" | "state" | "rating"> {
   *   cid: string;
   *   due: Date | number;
   *   state: StateType;
   *   review: Date | number;
   *   rating: RatingType;
   * }
   *
   * interface NextRecordLog {
   *   card: CardUnChecked; //see method: createEmptyCard
   *   log: RevLogUnchecked;
   * }
   *
  function nextAfterHandler(recordLogItem: RecordLogItem) {
    const recordItem = {
      card: {
        ...(recordLogItem.card as Card & { cid: string }),
        due: recordLogItem.card.due.getTime(),
        state: State[recordLogItem.card.state] as StateType,
        last_review: recordLogItem.card.last_review
          ? recordLogItem.card.last_review!.getTime()
          : null,
      },
      log: {
        ...recordLogItem.log,
        cid: (recordLogItem.card as Card & { cid: string }).cid,
        due: recordLogItem.log.due.getTime(),
        review: recordLogItem.log.review.getTime(),
        state: State[recordLogItem.log.state] as StateType,
        rating: Rating[recordLogItem.log.rating] as RatingType,
      },
    };
    return recordItem
  }
   * const card: Card = createEmptyCard(new Date(), cardAfterHandler); //see method:  createEmptyCard
   * const f = fsrs();
   * const recordLogItem = f.repeat(card, new Date(), Rating.Again, nextAfterHandler);
   * ```
   */
  next(card, now, grade2, afterHandler) {
    const instance = this.getScheduler(card, now);
    const g = TypeConvert.rating(grade2);
    if (g === Rating.Manual) {
      throw new FSRSValidationError("Cannot review a manual rating");
    }
    const recordLogItem = instance.review(g);
    return applyAfterHandler(recordLogItem, afterHandler);
  }
  /**
   * Get the retrievability of the card
   * @param card  Card to be processed
   * @param now  Current time or scheduled time
   * @param format  default:true , Convert the result to another type. (Optional)
   * @returns  The retrievability of the card,if format is true, the result is a string, otherwise it is a number
   */
  get_retrievability(card, now, format = true) {
    const processedCard = TypeConvert.card(card);
    now = now ? TypeConvert.time(now) : /* @__PURE__ */ new Date();
    const t = processedCard.state !== State.New ? Math.max(date_diff(now, processedCard.last_review, "days"), 0) : 0;
    const r = processedCard.state !== State.New ? this.forgetting_curve(t, +processedCard.stability.toFixed(8)) : 0;
    return format ? `${(r * 100).toFixed(2)}%` : r;
  }
  /**
   *
   * @param card Card to be processed
   * @param log last review log
   * @param afterHandler Convert the result to another type. (Optional)
   * @example
   * ```typescript
   * const now = new Date();
   * const f = fsrs();
   * const emptyCardFormAfterHandler = createEmptyCard(now);
   * const repeatFormAfterHandler = f.repeat(emptyCardFormAfterHandler, now);
   * const { card, log } = repeatFormAfterHandler[Rating.Hard];
   * const rollbackFromAfterHandler = f.rollback(card, log);
   * ```
   *
   * @example
   * ```typescript
   * const now = new Date();
   * const f = fsrs();
   * const emptyCardFormAfterHandler = createEmptyCard(now, cardAfterHandler);  //see method: createEmptyCard
   * const repeatFormAfterHandler = f.repeat(emptyCardFormAfterHandler, now, repeatAfterHandler); //see method: fsrs.repeat()
   * const { card, log } = repeatFormAfterHandler[Rating.Hard];
   * const rollbackFromAfterHandler = f.rollback(card, log, cardAfterHandler);
   * ```
   */
  rollback(card, log, afterHandler) {
    const processedCard = TypeConvert.card(card);
    const processedLog = TypeConvert.review_log(log);
    if (processedLog.rating === Rating.Manual) {
      throw new FSRSValidationError("Cannot rollback a manual rating");
    }
    let last_due;
    let last_review;
    let last_lapses;
    switch (processedLog.state) {
      case State.New:
        last_due = processedLog.due;
        last_review = void 0;
        last_lapses = 0;
        break;
      case State.Learning:
      case State.Relearning:
      case State.Review:
        last_due = processedLog.review;
        last_review = processedLog.due;
        last_lapses = processedCard.lapses - (processedLog.rating === Rating.Again && processedLog.state === State.Review ? 1 : 0);
        break;
    }
    const prevCard = {
      ...processedCard,
      due: last_due,
      stability: processedLog.stability,
      difficulty: processedLog.difficulty,
      elapsed_days: processedLog.last_elapsed_days,
      scheduled_days: processedLog.scheduled_days,
      reps: Math.max(0, processedCard.reps - 1),
      lapses: Math.max(0, last_lapses),
      learning_steps: processedLog.learning_steps,
      state: processedLog.state,
      last_review
    };
    return applyAfterHandler(prevCard, afterHandler);
  }
  /**
   *
   * @param card Card to be processed
   * @param now Current time or scheduled time
   * @param reset_count Should the review count information(reps,lapses) be reset. (Optional)
   * @param afterHandler Convert the result to another type. (Optional)
   * @example
   * ```typescript
   * const now = new Date();
   * const f = fsrs();
   * const emptyCard = createEmptyCard(now);
   * const scheduling_cards = f.repeat(emptyCard, now);
   * const { card, log } = scheduling_cards[Rating.Hard];
   * const forgetCard = f.forget(card, new Date(), true);
   * ```
   *
   * @example
   * ```typescript
   * interface RepeatRecordLog {
   *   card: CardUnChecked; //see method: createEmptyCard
   *   log: RevLogUnchecked; //see method: fsrs.repeat()
   * }
   *
   * function forgetAfterHandler(recordLogItem: RecordLogItem): RepeatRecordLog {
   *     return {
   *       card: {
   *         ...(recordLogItem.card as Card & { cid: string }),
   *         due: recordLogItem.card.due.getTime(),
   *         state: State[recordLogItem.card.state] as StateType,
   *         last_review: recordLogItem.card.last_review
   *           ? recordLogItem.card.last_review!.getTime()
   *           : null,
   *       },
   *       log: {
   *         ...recordLogItem.log,
   *         cid: (recordLogItem.card as Card & { cid: string }).cid,
   *         due: recordLogItem.log.due.getTime(),
   *         review: recordLogItem.log.review.getTime(),
   *         state: State[recordLogItem.log.state] as StateType,
   *         rating: Rating[recordLogItem.log.rating] as RatingType,
   *       },
   *     };
   * }
   * const now = new Date();
   * const f = fsrs();
   * const emptyCardFormAfterHandler = createEmptyCard(now, cardAfterHandler); //see method:  createEmptyCard
   * const repeatFormAfterHandler = f.repeat(emptyCardFormAfterHandler, now, repeatAfterHandler); //see method: fsrs.repeat()
   * const { card } = repeatFormAfterHandler[Rating.Hard];
   * const forgetFromAfterHandler = f.forget(card, date_scheduler(now, 1, true), false, forgetAfterHandler);
   * ```
   */
  forget(card, now, reset_count = false, afterHandler) {
    const processedCard = TypeConvert.card(card);
    now = TypeConvert.time(now);
    const scheduled_days = processedCard.state === State.New ? 0 : date_diff(now, processedCard.due, "days");
    const forget_log = {
      rating: Rating.Manual,
      state: processedCard.state,
      due: processedCard.due,
      stability: processedCard.stability,
      difficulty: processedCard.difficulty,
      elapsed_days: 0,
      last_elapsed_days: processedCard.elapsed_days,
      scheduled_days,
      learning_steps: processedCard.learning_steps,
      review: now
    };
    const forget_card = {
      ...processedCard,
      due: now,
      stability: 0,
      difficulty: 0,
      elapsed_days: 0,
      scheduled_days: 0,
      reps: reset_count ? 0 : processedCard.reps,
      lapses: reset_count ? 0 : processedCard.lapses,
      learning_steps: 0,
      state: State.New,
      last_review: processedCard.last_review
    };
    const recordLogItem = { card: forget_card, log: forget_log };
    return applyAfterHandler(recordLogItem, afterHandler);
  }
  /**
   * Reschedules the current card and returns the rescheduled collections and reschedule item.
   *
   * @template T - The type of the record log item.
   * @param {CardInput | Card} current_card - The current card to be rescheduled.
   * @param {Array<FSRSHistory>} reviews - The array of FSRSHistory objects representing the reviews.
   * @param {Partial<RescheduleOptions<T>>} options - The optional reschedule options.
   * @returns {IReschedule<T>} - The rescheduled collections and reschedule item.
   *
   * @example
   * ```typescript
   * const f = fsrs()
   * const grades: Grade[] = [Rating.Good, Rating.Good, Rating.Good, Rating.Good]
   * const reviews_at = [
   *   new Date(2024, 8, 13),
   *   new Date(2024, 8, 13),
   *   new Date(2024, 8, 17),
   *   new Date(2024, 8, 28),
   * ]
   *
   * const reviews: FSRSHistory[] = []
   * for (let i = 0; i < grades.length; i++) {
   *   reviews.push({
   *     rating: grades[i],
   *     review: reviews_at[i],
   *   })
   * }
   *
   * const results_short = scheduler.reschedule(
   *   createEmptyCard(),
   *   reviews,
   *   {
   *     skipManual: false,
   *   }
   * )
   * console.log(results_short)
   * ```
   */
  reschedule(current_card, reviews = [], options = {}) {
    const {
      recordLogHandler,
      reviewsOrderBy,
      skipManual = true,
      now = /* @__PURE__ */ new Date(),
      update_memory_state: updateMemoryState = false
    } = options;
    if (reviewsOrderBy && typeof reviewsOrderBy === "function") {
      reviews.sort(reviewsOrderBy);
    }
    if (skipManual) {
      reviews = reviews.filter((review) => review.rating !== Rating.Manual);
    }
    const rescheduleSvc = new Reschedule(this);
    const collections = rescheduleSvc.reschedule(
      options.first_card || createEmptyCard(),
      reviews
    );
    const len = collections.length;
    const cur_card = TypeConvert.card(current_card);
    const manual_item = rescheduleSvc.calculateManualRecord(
      cur_card,
      now,
      len ? collections[len - 1] : void 0,
      updateMemoryState
    );
    return {
      collections: typeof recordLogHandler === "function" ? collections.map(recordLogHandler) : collections,
      reschedule_item: manual_item ? applyAfterHandler(manual_item, recordLogHandler) : null
    };
  }
};
var fsrs = (params) => {
  return new FSRS(params || {});
};

// src/recall/schedule.ts
var KEYS = {
  due: "recall_due",
  last: "recall_last",
  stability: "recall_stability",
  difficulty: "recall_difficulty",
  reps: "recall_reps",
  lapses: "recall_lapses"
};
var GRADES = [
  { name: "forgot", rating: Rating.Again, hint: "Couldn't rebuild the core idea" },
  { name: "shaky", rating: Rating.Hard, hint: "Had the gist, with real gaps" },
  { name: "solid", rating: Rating.Good, hint: "The idea and its key relation" },
  { name: "effortless", rating: Rating.Easy, hint: "Could teach it" }
];
function readState(fm) {
  if (!fm) return null;
  const due = normalizeIso(fm[KEYS.due]);
  const last = normalizeIso(fm[KEYS.last]);
  const stability = Number(fm[KEYS.stability]);
  const difficulty = Number(fm[KEYS.difficulty]);
  if (!due || !last || !(stability > 0) || !(difficulty > 0)) return null;
  return {
    due,
    last,
    stability,
    difficulty,
    reps: Math.max(1, Math.floor(Number(fm[KEYS.reps]) || 1)),
    lapses: Math.max(0, Math.floor(Number(fm[KEYS.lapses]) || 0))
  };
}
function writeState(fm, s) {
  fm[KEYS.due] = s.due;
  fm[KEYS.last] = s.last;
  fm[KEYS.stability] = round(s.stability);
  fm[KEYS.difficulty] = round(s.difficulty);
  fm[KEYS.reps] = s.reps;
  fm[KEYS.lapses] = s.lapses;
}
function round(n) {
  return Math.round(n * 100) / 100;
}
function makeScheduler(retention, maxInterval) {
  return fsrs(
    generatorParameters({
      request_retention: retention,
      maximum_interval: maxInterval,
      enable_fuzz: true,
      enable_short_term: false
    })
  );
}
function noon(iso) {
  return /* @__PURE__ */ new Date(`${iso}T12:00:00`);
}
function toCard(s, today) {
  if (!s) return createEmptyCard(noon(today));
  return {
    due: noon(s.due),
    stability: s.stability,
    difficulty: s.difficulty,
    elapsed_days: 0,
    scheduled_days: Math.max(0, daysBetween(s.last, s.due)),
    learning_steps: 0,
    reps: s.reps,
    lapses: s.lapses,
    state: State.Review,
    last_review: noon(s.last)
  };
}
function fromCard(card, today) {
  return {
    due: isoDate(card.due),
    last: today,
    stability: card.stability,
    difficulty: card.difficulty,
    reps: card.reps,
    lapses: card.lapses
  };
}
function grade(f, s, today, name) {
  const rating = GRADES.find((g) => g.name === name).rating;
  return fromCard(f.next(toCard(s, today), noon(today), rating).card, today);
}
function preview(f, s, today) {
  const all = f.repeat(toCard(s, today), noon(today));
  const out = {};
  for (const g of GRADES) out[g.name] = daysBetween(today, isoDate(all[g.rating].card.due));
  return out;
}

// src/recall/Recall.ts
function list2(v) {
  if (Array.isArray(v)) return v.filter((x) => typeof x === "string").map(norm2).filter(Boolean);
  if (typeof v === "string") return v.split(",").map(norm2).filter(Boolean);
  return [];
}
var Recall = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.day = { today: [], reviewedToday: 0, introducedToday: 0, dueTotal: 0, newTotal: 0, dueTomorrow: 0, dueThisWeek: 0 };
    this.facets = { types: [], subjects: [] };
    /** Path of the note whose answer is showing. */
    this.revealed = null;
    this.records = [];
    this.skipped = [];
    /** Grades written but not yet seen by the metadata cache. */
    this.pending = /* @__PURE__ */ new Map();
    this.schedulerKey = "";
  }
  get s() {
    return this.plugin.data.settings;
  }
  get f() {
    const key = `${this.s.retention}/${this.s.maxInterval}`;
    if (key !== this.schedulerKey) {
      this.scheduler = makeScheduler(this.s.retention, this.s.maxInterval);
      this.schedulerKey = key;
    }
    return this.scheduler;
  }
  recordOf(file) {
    const fm = this.plugin.app.metadataCache.getFileCache(file)?.frontmatter;
    const disciplines = list2(fm?.discipline);
    const fields = list2(fm?.field);
    let state = readState(fm);
    const written = this.pending.get(file.path);
    if (written) {
      if (state?.last === written.last && state.reps === written.reps) this.pending.delete(file.path);
      else state = written;
    }
    return {
      path: file.path,
      basename: file.basename,
      ctime: file.stat.ctime,
      type: typeof fm?.type === "string" ? norm2(fm.type) : null,
      subjects: [.../* @__PURE__ */ new Set([...disciplines, ...fields])],
      primary: fields[0] ?? disciplines[0] ?? "\u2014",
      state
    };
  }
  /** Concepts or puzzles the fleeting review just produced, newest first. */
  distilled() {
    const types = this.s.recallTypes.map(norm2);
    const paths = [];
    for (const e of [...this.plugin.data.log].reverse()) {
      const t = e.outcome === "advanced" && e.detail?.startsWith("retyped:") ? norm2(e.detail.slice(8)) : null;
      if (t && types.includes(t) && !paths.includes(e.path)) paths.push(e.path);
    }
    return paths;
  }
  refresh() {
    this.records = this.plugin.app.vault.getMarkdownFiles().map((f) => this.recordOf(f));
    const cfg = { types: this.s.recallTypes, newPerDay: this.s.newPerDay, reviewsPerDay: this.s.reviewsPerDay };
    this.pruneFilter(cfg);
    this.day = buildDay(this.records, todayIso(), cfg, this.filter, this.distilled());
    this.facets = facets(this.records, cfg);
    if (this.revealed && !this.day.today.some((r) => r.path === this.revealed)) this.revealed = null;
  }
  // ---- the prompt ---------------------------------------------------------
  /** Today's list with skipped notes moved to the back. */
  get ordered() {
    const t = this.day.today;
    const skip = (r) => this.skipped.indexOf(r.path);
    return [...t.filter((r) => skip(r) < 0), ...t.filter((r) => skip(r) >= 0).sort((a, b) => skip(a) - skip(b))];
  }
  get current() {
    if (this.revealed) return this.day.today.find((r) => r.path === this.revealed);
    return this.ordered[0];
  }
  get doneToday() {
    return this.day.reviewedToday + this.day.introducedToday;
  }
  intervals(r) {
    return preview(this.f, r.state, todayIso());
  }
  async reveal() {
    const r = this.current;
    if (!r) return;
    const file = this.plugin.app.vault.getAbstractFileByPath(r.path);
    if (!(file instanceof import_obsidian3.TFile)) return;
    this.revealed = r.path;
    await this.plugin.app.workspace.getLeaf(false).openFile(file);
    this.plugin.renderViews();
  }
  async grade(name) {
    const r = this.current;
    if (!r || this.revealed !== r.path) return;
    const file = this.plugin.app.vault.getAbstractFileByPath(r.path);
    if (!(file instanceof import_obsidian3.TFile)) return;
    const today = todayIso();
    const next = grade(this.f, r.state, today, name);
    this.pending.set(r.path, next);
    await this.plugin.app.fileManager.processFrontMatter(file, (fm) => writeState(fm, next));
    this.plugin.data.recallLog.push({ date: today, path: r.path, grade: name });
    await this.plugin.save();
    this.revealed = null;
    this.skipped = this.skipped.filter((p) => p !== r.path);
    this.refresh();
    this.plugin.renderViews();
    if (!this.current) new import_obsidian3.Notice("Today's recall is done.");
  }
  skip() {
    const r = this.current;
    if (!r || this.revealed) return;
    this.skipped = [...this.skipped.filter((p) => p !== r.path), r.path];
    this.plugin.renderViews();
  }
  /** "this week · 12 recalled · 83% held" */
  weekLine() {
    const today = todayIso();
    const week = this.plugin.data.recallLog.filter((e) => {
      const ago = daysBetween(e.date, today);
      return ago >= 0 && ago < 7;
    });
    if (week.length === 0) return "nothing recalled this week";
    const held = week.filter((e) => e.grade !== "forgot").length;
    return `this week \xB7 ${week.length} recalled \xB7 ${Math.round(100 * held / week.length)}% held`;
  }
  // ---- filter -------------------------------------------------------------
  get filter() {
    return this.plugin.data.recallFilter;
  }
  toggle(group, key) {
    const g = this.filter[group];
    this.filter[group] = g.includes(key) ? g.filter((k) => k !== key) : [...g, key];
    this.revealed = null;
    void this.plugin.save();
    this.refresh();
    this.plugin.renderViews();
  }
  clearFilter() {
    this.plugin.data.recallFilter = { types: [], subjects: [] };
    this.revealed = null;
    void this.plugin.save();
    this.refresh();
    this.plugin.renderViews();
  }
  /** Drop filter keys that no note in the pool carries any more. */
  pruneFilter(cfg) {
    const f = facets(this.records, cfg);
    const types = new Set(f.types.map(([k]) => k));
    const subjects = new Set(f.subjects.map(([k]) => k));
    const next = {
      types: this.filter.types.filter((k) => types.has(k)),
      subjects: this.filter.subjects.filter((k) => subjects.has(k))
    };
    if (next.types.length !== this.filter.types.length || next.subjects.length !== this.filter.subjects.length) {
      this.plugin.data.recallFilter = next;
      void this.plugin.save();
    }
  }
};

// src/view/ConceptSuggest.ts
var import_obsidian4 = require("obsidian");
var ConceptSuggest = class extends import_obsidian4.FuzzySuggestModal {
  constructor(app, targets, onPick) {
    super(app);
    this.targets = targets;
    this.onPick = onPick;
    this.setPlaceholder("Part of\u2026");
  }
  getItems() {
    return this.targets;
  }
  getItemText(file) {
    return file.basename;
  }
  onChooseItem(file) {
    this.onPick(file);
  }
};

// src/view/QueueView.ts
var import_obsidian5 = require("obsidian");

// src/log.ts
function summarize(log, today, days = 7) {
  const s = { advanced: 0, snoozed: 0, "let-go": 0, expired: 0, merged: 0 };
  for (const e of log) {
    const ago = daysBetween(e.date, today);
    if (ago >= 0 && ago < days) s[e.outcome]++;
  }
  return s;
}
function summaryLine(s) {
  const parts = [];
  const advanced = s.advanced + s.merged;
  if (advanced) parts.push(`${advanced} distilled`);
  if (s["let-go"]) parts.push(`${s["let-go"]} let go`);
  if (s.expired) parts.push(`${s.expired} expired`);
  if (s.snoozed) parts.push(`${s.snoozed} rested`);
  return parts.length ? ["this week", ...parts].join(" \xB7 ") : "a quiet week";
}

// src/view/chips.ts
function renderChips(parent, chips, o) {
  if (chips.length === 0) return;
  const row = parent.createDiv({ cls: "anamnesis-tags" });
  let unpinned = 0;
  let hidden = 0;
  let lastPinned = false;
  for (const chip of chips) {
    const visible = chip.pinned || chip.on || o.expanded || unpinned < o.fold;
    if (!chip.pinned) unpinned++;
    if (!visible) {
      hidden++;
      continue;
    }
    if (lastPinned && !chip.pinned) row.createSpan({ cls: "anamnesis-tag-sep", text: "\xB7" });
    lastPinned = !!chip.pinned;
    const btn = row.createEl("button", {
      cls: `anamnesis-tag${chip.on ? " is-on" : ""}${chip.cls ? " " + chip.cls : ""}`,
      attr: { "aria-pressed": String(chip.on) }
    });
    btn.createSpan({ text: chip.key });
    btn.createSpan({ cls: "anamnesis-tag-count", text: String(chip.count) });
    btn.onclick = () => o.onToggle(chip.key);
  }
  if (hidden > 0 || o.expanded) {
    const more = row.createEl("button", { cls: "anamnesis-tag mod-more", text: o.expanded ? "less" : `+${hidden}` });
    more.onclick = () => o.onExpand();
  }
  if (chips.some((c) => c.on)) {
    const clear = row.createEl("button", { cls: "anamnesis-tag mod-clear", text: "clear", attr: { "aria-label": o.clearHint } });
    clear.onclick = () => o.onClear();
  }
}

// src/view/QueueView.ts
var VIEW_TYPE = "anamnesis-queue";
var TAGS_SHOWN = 8;
var QueueView = class extends import_obsidian5.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.tagsExpanded = false;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Fleeting";
  }
  getIcon() {
    return this.plugin.data.settings.icon;
  }
  async onOpen() {
    this.render();
  }
  render() {
    const root = this.contentEl;
    root.empty();
    root.addClass("anamnesis");
    const { due, resting } = this.plugin.visible;
    const all = this.plugin.queue;
    const filtering = this.plugin.data.tagFilter.length > 0;
    const activePath = this.app.workspace.getActiveFile()?.path;
    const header = root.createDiv({ cls: "anamnesis-header" });
    header.createSpan({ cls: "anamnesis-label", text: "fleeting" });
    const drawBtn = header.createEl("button", {
      cls: "anamnesis-icon-btn clickable-icon",
      attr: { "aria-label": "Draw a note at random" }
    });
    (0, import_obsidian5.setIcon)(drawBtn, "shuffle");
    drawBtn.disabled = due.length === 0;
    if (filtering) drawBtn.setAttr("aria-label", "Draw a note at random, from these tags");
    drawBtn.onclick = () => void this.plugin.draw();
    if (all.due.length === 0 && all.resting.length === 0) {
      root.createDiv({ cls: "anamnesis-empty", text: "The sieve is empty." });
      this.renderFooter(root);
      return;
    }
    this.renderTags(root);
    const section = root.createDiv({ cls: "anamnesis-section" });
    section.createDiv({ cls: "anamnesis-label", text: "in review" });
    const current = this.plugin.currentItem;
    if (current) this.renderCard(section, current);
    else this.renderIdle(section, due.length > 0, filtering);
    this.renderList(root, "due", due, all.due.length, activePath, (i) => i.ageDays === 0 ? "today" : `${i.ageDays}d`);
    this.renderList(root, "resting", resting, all.resting.length, activePath, (i) => `${i.returnsIn}d`);
    this.renderFooter(root);
  }
  renderTags(root) {
    const selected = this.plugin.data.tagFilter;
    const chips = this.plugin.tags.map(([key, count]) => ({
      key,
      count,
      on: selected.includes(key),
      cls: key === UNTAGGED ? "mod-untagged" : void 0
    }));
    renderChips(root, chips, {
      fold: TAGS_SHOWN,
      expanded: this.tagsExpanded,
      onToggle: (tag) => this.plugin.toggleTag(tag),
      onExpand: () => {
        this.tagsExpanded = !this.tagsExpanded;
        this.render();
      },
      onClear: () => this.plugin.clearTags(),
      clearHint: "Show every note"
    });
  }
  renderIdle(parent, canDraw, filtering) {
    const idle = parent.createDiv({ cls: "anamnesis-card is-idle" });
    if (!canDraw) {
      idle.setText(filtering ? "Nothing due under these tags." : "Everything is resting.");
      return;
    }
    idle.appendText("Nothing in review. ");
    const link = idle.createEl("button", { cls: "anamnesis-act", text: "draw one" });
    link.onclick = () => void this.plugin.draw();
  }
  renderCard(parent, item) {
    const card = parent.createDiv({ cls: "anamnesis-card" });
    const title = card.createDiv({ cls: "anamnesis-card-title", text: item.basename });
    title.onclick = () => void this.plugin.openInReview(item.path);
    const meta = [item.ageDays === 0 ? "captured today" : `captured ${item.ageDays}d ago`, ...item.tags];
    if (item.snoozes) meta.push(`rested \xD7${item.snoozes}`);
    card.createDiv({ cls: "anamnesis-meta", text: meta.join(" \xB7 ") });
    const file = this.app.vault.getAbstractFileByPath(item.path);
    if (!(file instanceof import_obsidian5.TFile)) return;
    if (this.plugin.prompting) {
      this.renderPrompt(card, file);
      return;
    }
    const ladder = this.plugin.data.settings.ladder;
    const actions = card.createDiv({ cls: "anamnesis-actions" });
    this.action(
      actions,
      "became\u2026",
      "mod-advance",
      "It turned into something: give it a type, or fold it into a note",
      () => this.plugin.advance(file)
    );
    if (item.exhausted) {
      const spent = this.action(actions, "no rest left", "", "Its rests are used up: it became something, or let it go", () => {
      });
      spent.disabled = true;
    } else {
      const days = ladder[item.snoozes];
      this.action(
        actions,
        `not yet \xB7 ${days}d`,
        "",
        `Rest it ${days} days (rest ${item.snoozes + 1} of ${ladder.length}). Archived when the last rest runs out.`,
        () => this.plugin.actions.snooze(file)
      );
    }
    this.action(actions, "let go", "mod-faint", "Archive it now", () => this.plugin.actions.archive(file, "let-go"));
  }
  renderPrompt(card, file) {
    const prompt = card.createDiv({ cls: "anamnesis-prompt" });
    prompt.createDiv({ cls: "anamnesis-prompt-q", text: "What did it become?" });
    const chips = prompt.createDiv({ cls: "anamnesis-chips" });
    for (const type of this.plugin.data.settings.retypeOptions) {
      const chip = chips.createEl("button", {
        cls: "anamnesis-chip",
        text: type,
        attr: { "aria-label": `Make it a ${type} note, where it is` }
      });
      chip.onclick = () => void this.plugin.actions.retype(file, type);
    }
    const merge = chips.createEl("button", {
      cls: "anamnesis-chip mod-merge",
      text: "part of\u2026",
      attr: { "aria-label": "Fold its text into an existing note, then archive it" }
    });
    merge.onclick = () => this.plugin.pickMergeTarget(file);
    const back = prompt.createEl("button", { cls: "anamnesis-act mod-faint", text: "back" });
    back.onclick = () => this.plugin.cancelPrompt();
  }
  action(parent, text, mod, hint, run) {
    const btn = parent.createEl("button", { cls: `anamnesis-act ${mod}`.trim(), text, attr: { "aria-label": hint } });
    btn.onclick = () => void run();
    return btn;
  }
  renderList(root, label, items, total, activePath, trailing) {
    if (items.length === 0) return;
    const section = root.createDiv({ cls: `anamnesis-section mod-${label}` });
    const count = items.length === total ? `${total}` : `${items.length} of ${total}`;
    section.createDiv({ cls: "anamnesis-label", text: `${label} \xB7 ${count}` });
    const list3 = section.createEl("ul", { cls: "anamnesis-list" });
    const ladder = this.plugin.data.settings.ladder.length;
    for (const item of items) {
      const row = list3.createEl("li", { cls: "anamnesis-row" });
      if (item.path === activePath || item.path === this.plugin.data.current) row.addClass("is-active");
      row.tabIndex = 0;
      row.createSpan({ cls: "anamnesis-row-title", text: item.basename });
      if (item.snoozes > 0) {
        const dots = row.createSpan({
          cls: "anamnesis-strikes",
          attr: { "aria-label": `Rested ${item.snoozes} of ${ladder}` }
        });
        for (let i = 0; i < ladder; i++) {
          const dot = dots.createSpan({ cls: "anamnesis-dot" });
          if (i < item.snoozes) dot.addClass("is-used");
          if (i < item.snoozes && i === ladder - 1) dot.addClass("is-last");
        }
      }
      row.createSpan({ cls: "anamnesis-row-trail", text: trailing(item) });
      const open = () => void this.plugin.openInReview(item.path);
      row.onclick = open;
      row.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      };
    }
  }
  renderFooter(root) {
    const line = summaryLine(summarize(this.plugin.data.log, todayIso()));
    root.createDiv({ cls: "anamnesis-footer", text: line });
  }
};

// src/view/RecallView.ts
var import_obsidian6 = require("obsidian");
var RECALL_VIEW_TYPE = "anamnesis-recall";
var SUBJECTS_SHOWN = 8;
var MAX_DOTS = 12;
function formatDays(d) {
  if (d < 30) return `${d}d`;
  if (d < 365) return `${Math.round(d / 30)}mo`;
  return `${(d / 365).toFixed(1)}y`;
}
var RecallView = class extends import_obsidian6.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.expanded = false;
  }
  getViewType() {
    return RECALL_VIEW_TYPE;
  }
  getDisplayText() {
    return "Recall";
  }
  getIcon() {
    return this.plugin.data.settings.recallIcon;
  }
  async onOpen() {
    this.render();
  }
  get recall() {
    return this.plugin.recall;
  }
  render() {
    const root = this.contentEl;
    root.empty();
    root.addClass("anamnesis", "anamnesis-recall");
    const header = root.createDiv({ cls: "anamnesis-header" });
    header.createSpan({ cls: "anamnesis-label", text: "recall" });
    this.renderFilter(root);
    const day = this.recall.day;
    const current = this.recall.current;
    const remaining = day.today.length;
    const done = this.recall.doneToday;
    const section = root.createDiv({ cls: "anamnesis-section" });
    const label = section.createDiv({ cls: "anamnesis-label anamnesis-today" });
    label.createSpan({ text: "today" });
    this.renderProgress(label, done, done + remaining);
    if (current) this.renderCard(section, current);
    else this.renderDone(section);
    const later = root.createDiv({ cls: "anamnesis-later" });
    const parts = [];
    if (day.dueTotal > remaining) parts.push(`${day.dueTotal} due in all`);
    if (day.dueTomorrow) parts.push(`${day.dueTomorrow} tomorrow`);
    if (day.dueThisWeek) parts.push(`${day.dueThisWeek} this week`);
    if (day.newTotal) parts.push(`${day.newTotal} unseen`);
    later.setText(parts.join(" \xB7 "));
    root.createDiv({ cls: "anamnesis-footer", text: this.recall.weekLine() });
  }
  renderFilter(root) {
    const { types, subjects } = this.recall.facets;
    const f = this.recall.filter;
    const chips = [
      ...types.map(([key, count]) => ({ key, count, on: f.types.includes(key), pinned: true, cls: "mod-type" })),
      ...subjects.map(([key, count]) => ({ key, count, on: f.subjects.includes(key) }))
    ];
    renderChips(root, chips, {
      fold: SUBJECTS_SHOWN,
      expanded: this.expanded,
      onToggle: (key) => this.recall.toggle(types.some(([t]) => t === key) ? "types" : "subjects", key),
      onExpand: () => {
        this.expanded = !this.expanded;
        this.render();
      },
      onClear: () => this.recall.clearFilter(),
      clearHint: "Recall from everything"
    });
  }
  renderProgress(parent, done, total) {
    if (total === 0) return;
    if (total > MAX_DOTS) {
      parent.createSpan({ cls: "anamnesis-progress-text", text: `${done} / ${total}` });
      return;
    }
    const dots = parent.createSpan({ cls: "anamnesis-strikes anamnesis-progress", attr: { "aria-label": `${done} of ${total} today` } });
    for (let i = 0; i < total; i++) {
      const dot = dots.createSpan({ cls: "anamnesis-dot" });
      if (i < done) dot.addClass("is-used");
      if (i === done) dot.addClass("is-now");
    }
  }
  renderCard(parent, r) {
    const card = parent.createDiv({ cls: "anamnesis-card" });
    const today = todayIso();
    const meta = [
      r.state ? `seen ${r.state.reps}\xD7 \xB7 ${daysBetween(r.state.last, today)}d ago` : "new",
      r.type ?? "",
      r.primary
    ].filter(Boolean);
    card.createDiv({ cls: "anamnesis-meta mod-above", text: meta.join(" \xB7 ") });
    card.createDiv({ cls: "anamnesis-card-title mod-static", text: r.basename });
    if (this.recall.revealed !== r.path) {
      card.createDiv({ cls: "anamnesis-prompt-q", text: "Recall it on paper, then reveal." });
      const actions = card.createDiv({ cls: "anamnesis-actions" });
      const reveal = actions.createEl("button", { cls: "anamnesis-act mod-advance", text: "reveal", attr: { "aria-label": "Open the note to check yourself" } });
      reveal.onclick = () => void this.recall.reveal();
      if (this.recall.day.today.length > 1) {
        const skip = actions.createEl("button", { cls: "anamnesis-act mod-faint", text: "later", attr: { "aria-label": "Move it to the end of today" } });
        skip.onclick = () => this.recall.skip();
      }
      return;
    }
    card.createDiv({ cls: "anamnesis-prompt-q", text: "How well did it come back?" });
    const intervals = this.recall.intervals(r);
    const grid = card.createDiv({ cls: "anamnesis-grades" });
    for (const g of GRADES) {
      const btn = grid.createEl("button", {
        cls: `anamnesis-act anamnesis-grade mod-${g.name}`,
        attr: { "aria-label": `${g.hint}. Next in ${formatDays(intervals[g.name])}` }
      });
      btn.createSpan({ text: g.name });
      btn.createSpan({ cls: "anamnesis-interval", text: formatDays(intervals[g.name]) });
      btn.onclick = () => void this.recall.grade(g.name);
    }
  }
  renderDone(parent) {
    const card = parent.createDiv({ cls: "anamnesis-card is-idle" });
    const filtering = this.recall.filter.types.length + this.recall.filter.subjects.length > 0;
    card.setText(filtering ? "Nothing left today under this filter." : "Today's recall is done.");
  }
};

// src/main.ts
var HOLD_MS = 5e3;
var AnamnesisPlugin = class extends import_obsidian7.Plugin {
  constructor() {
    super(...arguments);
    this.queue = { due: [], resting: [] };
    /** "became…" was pressed: the card asks what the note turned into. */
    this.prompting = false;
    /** Paths that were in the queue at the last refresh. */
    this.known = /* @__PURE__ */ new Map();
    /** Paths our own actions are touching, with when the hold lapses. */
    this.held = /* @__PURE__ */ new Map();
    this.ribbons = {};
    this.scheduleRefresh = (0, import_obsidian7.debounce)(() => this.refresh(), 150, true);
  }
  async onload() {
    await this.loadPluginData();
    this.actions = new Actions(this);
    this.recall = new Recall(this);
    this.registerView(VIEW_TYPE, (leaf) => new QueueView(leaf, this));
    this.registerView(RECALL_VIEW_TYPE, (leaf) => new RecallView(leaf, this));
    this.ribbons.fleeting = this.addRibbonIcon(this.data.settings.icon, "Draw a fleeting note", () => this.draw());
    this.addSettingTab(new AnamnesisSettingTab(this.app, this));
    if (this.data.settings.recallEnabled) this.loadRecall();
    this.addCommand({ id: "open-queue", name: "Open fleeting queue", callback: () => this.activateView() });
    this.addCommand({ id: "draw", name: "Draw a fleeting note", callback: () => this.draw() });
    this.addTargetCommand("advanced", "It became something (re-type or merge)", (f) => this.advance(f));
    this.addTargetCommand("not-yet", "Not yet (snooze)", (f) => this.actions.snooze(f));
    this.addTargetCommand("let-go", "Let go (archive)", (f) => this.actions.archive(f, "let-go"));
    this.registerEvent(this.app.metadataCache.on("changed", (file) => this.onChanged(file)));
    this.registerEvent(this.app.metadataCache.on("resolved", () => this.scheduleRefresh()));
    this.registerEvent(this.app.vault.on("delete", (file) => this.onDeleted(file)));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => this.onRenamed(file, oldPath)));
    this.registerEvent(this.app.workspace.on("file-open", () => this.renderViews()));
    this.app.workspace.onLayoutReady(async () => {
      this.refresh();
      await this.expireStale();
    });
    this.registerInterval(window.setInterval(() => void this.expireStale(), 60 * 60 * 1e3));
  }
  // ---- data ---------------------------------------------------------------
  async loadPluginData() {
    const raw = await this.loadData() ?? {};
    this.data = {
      settings: { ...DEFAULT_SETTINGS, ...raw.settings ?? {} },
      current: raw.current ?? null,
      tagFilter: raw.tagFilter ?? [],
      log: raw.log ?? [],
      recallFilter: { types: [], subjects: [], ...raw.recallFilter ?? {} },
      recallLog: raw.recallLog ?? []
    };
  }
  async save() {
    await this.saveData(this.data);
  }
  record(entry) {
    this.data.log.push({ date: todayIso(), ...entry });
    void this.save();
  }
  // ---- queue --------------------------------------------------------------
  recordOf(file) {
    const cache = this.app.metadataCache.getFileCache(file);
    return {
      path: file.path,
      basename: file.basename,
      ctime: file.stat.ctime,
      frontmatter: cache?.frontmatter,
      tags: cache ? (0, import_obsidian7.getAllTags)(cache) ?? [] : []
    };
  }
  refresh() {
    const records = this.app.vault.getMarkdownFiles().map((f) => this.recordOf(f));
    this.queue = buildQueue(records, todayIso(), queueConfig(this.data.settings));
    this.known = new Map(
      [...this.queue.due, ...this.queue.resting].filter((i) => !this.isHeld(i.path)).map((i) => [i.path, i])
    );
    if (this.data.current && !this.itemFor(this.data.current) && !this.isHeld(this.data.current)) {
      this.data.current = null;
      this.prompting = false;
      void this.save();
    }
    const present = new Set(this.tags.map(([t]) => t));
    const kept = this.data.tagFilter.filter((t) => present.has(t));
    if (kept.length !== this.data.tagFilter.length) {
      this.data.tagFilter = kept;
      void this.save();
    }
    if (this.data.settings.recallEnabled) this.recall.refresh();
    this.renderViews();
  }
  itemFor(path) {
    return this.queue.due.find((i) => i.path === path) ?? this.queue.resting.find((i) => i.path === path);
  }
  // ---- tag filter ---------------------------------------------------------
  /** Tags across the whole queue (due and resting), with counts. */
  get tags() {
    return tagCounts([...this.queue.due, ...this.queue.resting]);
  }
  /** The queue as narrowed by the tag filter. */
  get visible() {
    const f = this.data.tagFilter;
    return {
      due: this.queue.due.filter((i) => matchesTags(i, f)),
      resting: this.queue.resting.filter((i) => matchesTags(i, f))
    };
  }
  toggleTag(tag) {
    const f = this.data.tagFilter;
    this.data.tagFilter = f.includes(tag) ? f.filter((t) => t !== tag) : [...f, tag];
    void this.save();
    this.renderViews();
  }
  clearTags() {
    this.data.tagFilter = [];
    void this.save();
    this.renderViews();
  }
  get currentItem() {
    return this.data.current ? this.itemFor(this.data.current) : void 0;
  }
  /** The note an action applies to: the active note if it is queued, else the one in review. */
  target() {
    const active = this.app.workspace.getActiveFile();
    const path = active && this.itemFor(active.path) ? active.path : this.data.current;
    const file = path ? this.app.vault.getAbstractFileByPath(path) : null;
    return file instanceof import_obsidian7.TFile ? file : null;
  }
  addTargetCommand(id, name, run) {
    this.addCommand({
      id,
      name,
      checkCallback: (checking) => {
        const file = this.target();
        if (!file) return false;
        if (!checking) void run(file);
        return true;
      }
    });
  }
  // ---- our own writes -----------------------------------------------------
  hold(path) {
    this.held.set(path, Date.now() + HOLD_MS);
    this.known.delete(path);
  }
  isHeld(path) {
    const until = this.held.get(path);
    if (until === void 0) return false;
    if (until > Date.now()) return true;
    this.held.delete(path);
    return false;
  }
  /** Called when an action on `path` is finished. */
  async settle(path) {
    if (this.data.current === path) {
      this.data.current = null;
      this.prompting = false;
    }
    await this.save();
    window.setTimeout(() => this.refresh(), HOLD_MS + 50);
    this.refresh();
  }
  // ---- noticing what the user did by hand ---------------------------------
  onChanged(file) {
    const before = this.known.get(file.path);
    if (before && !this.isHeld(file.path) && !hasType(this.recordOf(file), queueConfig(this.data.settings))) {
      const type = this.app.metadataCache.getFileCache(file)?.frontmatter?.[this.data.settings.typeKey];
      this.record({
        path: file.path,
        title: file.basename,
        outcome: "advanced",
        snoozes: before.snoozes,
        detail: `retyped:${type ?? "none"}`
      });
    }
    this.scheduleRefresh();
  }
  onDeleted(file) {
    const before = this.known.get(file.path);
    if (before && !this.isHeld(file.path)) {
      this.record({ path: file.path, title: before.basename, outcome: "advanced", snoozes: before.snoozes, detail: "deleted" });
    }
    this.scheduleRefresh();
  }
  onRenamed(file, oldPath) {
    if (this.data.current === oldPath && !this.isHeld(oldPath)) {
      this.data.current = file.path;
      void this.save();
    }
    this.scheduleRefresh();
  }
  // ---- review flow --------------------------------------------------------
  async draw() {
    const due = this.visible.due;
    const pool = due.filter((i) => i.path !== this.data.current);
    const pick = weightedDraw(pool.length ? pool : due);
    if (!pick) {
      new import_obsidian7.Notice(this.data.tagFilter.length ? "Nothing is due under these tags." : "Nothing is due. The sieve is empty.");
      return;
    }
    await this.openInReview(pick.path);
  }
  async openInReview(path) {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian7.TFile)) return;
    if (this.data.current !== path) this.prompting = false;
    this.data.current = path;
    await this.save();
    await this.app.workspace.getLeaf(false).openFile(file);
    await this.activateView(false);
    this.renderViews();
  }
  async advance(file) {
    if (!hasType(this.recordOf(file), queueConfig(this.data.settings))) {
      await this.settle(file.path);
      return;
    }
    this.data.current = file.path;
    this.prompting = true;
    await this.save();
    await this.activateView(false);
    this.renderViews();
  }
  pickMergeTarget(file) {
    const { typeKey, mergeTargetType } = this.data.settings;
    const targets = this.app.vault.getMarkdownFiles().filter(
      (f) => f.path !== file.path && String(this.app.metadataCache.getFileCache(f)?.frontmatter?.[typeKey] ?? "").toLowerCase() === mergeTargetType.toLowerCase()
    ).sort((a, b) => a.basename.localeCompare(b.basename));
    new ConceptSuggest(this.app, targets, (target) => void this.actions.merge(file, target)).open();
  }
  cancelPrompt() {
    this.prompting = false;
    this.renderViews();
  }
  async expireStale() {
    this.refresh();
    const today = todayIso();
    const stale = [...this.queue.due, ...this.queue.resting].filter((i) => isExpired(i, today));
    const archived = [];
    for (const item of stale) {
      const file = this.app.vault.getAbstractFileByPath(item.path);
      if (!(file instanceof import_obsidian7.TFile)) continue;
      await this.actions.archive(file, "expired");
      archived.push(item.basename);
    }
    if (archived.length) {
      new import_obsidian7.Notice(`Rested long enough, now archived:
${archived.join("\n")}`, 1e4);
    }
  }
  // ---- view ---------------------------------------------------------------
  setRibbonIcon(which, name) {
    const el = this.ribbons[which];
    if (el) (0, import_obsidian7.setIcon)(el, name);
  }
  async activateView(focus = true, type = VIEW_TYPE) {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(type)[0];
    if (!leaf) {
      const right = workspace.getRightLeaf(false);
      if (!right) return;
      await right.setViewState({ type, active: focus });
      leaf = right;
    }
    if (focus) await workspace.revealLeaf(leaf);
  }
  renderViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      if (leaf.view instanceof QueueView) leaf.view.render();
    }
    for (const leaf of this.app.workspace.getLeavesOfType(RECALL_VIEW_TYPE)) {
      if (leaf.view instanceof RecallView) leaf.view.render();
    }
  }
  // ---- recall -------------------------------------------------------------
  loadRecall() {
    const openRecall = () => this.activateView(true, RECALL_VIEW_TYPE);
    this.ribbons.recall = this.addRibbonIcon(this.data.settings.recallIcon, "Open recall", openRecall);
    this.addCommand({ id: "open-recall", name: "Open recall", callback: openRecall });
    this.addCommand({
      id: "recall-reveal",
      name: "Recall: reveal",
      checkCallback: (checking) => {
        const r = this.recall.current;
        if (!r || this.recall.revealed === r.path) return false;
        if (!checking) void this.recall.reveal();
        return true;
      }
    });
    this.addCommand({
      id: "recall-later",
      name: "Recall: later (move to the end of today)",
      checkCallback: (checking) => {
        if (!this.recall.current || this.recall.revealed) return false;
        if (!checking) this.recall.skip();
        return true;
      }
    });
    for (const g of GRADES) {
      this.addCommand({
        id: `recall-grade-${g.name}`,
        name: `Recall: ${g.name} (${g.hint.toLowerCase()})`,
        checkCallback: (checking) => {
          const r = this.recall.current;
          if (!r || this.recall.revealed !== r.path) return false;
          if (!checking) void this.recall.grade(g.name);
          return true;
        }
      });
    }
  }
};
/*! Bundled license information:

ts-fsrs/dist/index.mjs:
ts-fsrs/dist/index.mjs:
ts-fsrs/dist/index.mjs:
  (* istanbul ignore next -- @preserve *)
*/

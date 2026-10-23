"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => AskesisPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian9 = require("obsidian");

// src/dates.ts
var DAY_MS = 864e5;
var ISO_RE = /^(\d{4})-(\d{2})-(\d{2})/;
var WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
function weekday(iso) {
  return (epochDay(iso) % 7 + 11) % 7;
}
function weekStart(iso, firstDay = 0) {
  return addDays(iso, -((weekday(iso) - firstDay + 7) % 7));
}
function weekdayName(day) {
  return WEEKDAYS[(day % 7 + 7) % 7];
}
function monthName(iso) {
  return MONTHS[+iso.slice(5, 7) - 1];
}
function shortDate(iso) {
  return `${WEEKDAYS[weekday(iso)]} ${+iso.slice(8, 10)} ${monthName(iso)}`;
}
function longDate(iso) {
  return `${shortDate(iso)} ${iso.slice(0, 4)}`;
}
function monthStart(iso) {
  return `${iso.slice(0, 7)}-01`;
}
function addMonths(iso, n) {
  const d = new Date(Date.UTC(+iso.slice(0, 4), +iso.slice(5, 7) - 1 + n, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-01`;
}
var MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function monthLong(iso) {
  return MONTHS_LONG[+iso.slice(5, 7) - 1];
}

// src/journal.ts
var import_obsidian3 = require("obsidian");

// src/daily.ts
var import_obsidian2 = require("obsidian");

// src/modals.ts
var import_obsidian = require("obsidian");

// src/model.ts
var KEY_RE = /^[a-z][a-z0-9_]*$/;
var RESERVED = /* @__PURE__ */ new Set(["type", "date", "tags", "aliases", "cssclasses"]);
var noteKey = (key) => `${key}_note`;
var typeKey = (key) => `${key}_type`;
var text = (v) => typeof v === "string" && v.trim() ? v.trim() : null;
function textList(v) {
  if (Array.isArray(v)) return v.map(text).filter((x) => x !== null);
  const one = text(v);
  return one ? [one] : [];
}
function parseChallenge(path, name, fm) {
  if (!fm || fm.type !== "challenge") return null;
  const key = text(fm.key);
  const start = normalizeIso(fm.start);
  if (!key || !KEY_RE.test(key) || RESERVED.has(key) || !start) return null;
  return {
    path,
    name,
    key,
    doneLabel: text(fm.done_label) ?? "Done",
    notDoneLabel: text(fm.not_done_label) ?? "Not done",
    types: [...new Set(textList(fm.types).map((t) => t.toLowerCase()))],
    headline: fm.headline === "week" ? "week" : "streak",
    start,
    status: fm.status === "ended" ? "ended" : "active",
    ended: normalizeIso(fm.ended),
    order: typeof fm.order === "number" ? fm.order : Number.POSITIVE_INFINITY
  };
}
function keyProblem(key, taken) {
  if (!KEY_RE.test(key)) return "Use lowercase letters, digits and underscores, starting with a letter.";
  if (RESERVED.has(key)) return `\u201C${key}\u201D is already a property in every note. Pick another.`;
  if (/_(note|type)$/.test(key)) return "Don't end the property in _note or _type. Those hold each entry's details.";
  for (const t of taken) {
    if (t === key || noteKey(t) === key || typeKey(t) === key) return `\u201C${key}\u201D is already used by another challenge.`;
  }
  return null;
}
function readEntry(fm, key) {
  if (!fm) return null;
  const e = {};
  const v = fm[key];
  if (v === true || v === false) e.done = v;
  const note = fm[noteKey(key)];
  if (typeof note === "string" && note.trim()) e.note = note;
  const types = textList(fm[typeKey(key)]);
  if (e.done === true && types.length) e.types = types;
  return e.done === void 0 && !e.note ? null : e;
}
function mergeEntry(prev, patch) {
  const next = { ...prev ?? {} };
  if (patch.done !== void 0) {
    if (patch.done === null) delete next.done;
    else next.done = patch.done;
  }
  if (patch.note !== void 0) {
    if (patch.note.trim()) next.note = patch.note;
    else delete next.note;
  }
  if (patch.types !== void 0) next.types = [...patch.types];
  if (next.done !== true || !next.types?.length) delete next.types;
  return next.done === void 0 && !next.note ? null : next;
}
function applyEntry(fm, key, entry) {
  const set = (k, v) => {
    if (v === void 0) delete fm[k];
    else fm[k] = v;
  };
  set(key, entry?.done);
  set(typeKey(key), entry?.types?.length ? [...entry.types] : void 0);
  set(noteKey(key), entry?.note);
}
function stateLabel(c, e) {
  return e?.done === true ? c.doneLabel : e?.done === false ? c.notDoneLabel : "Not logged";
}
function plainText(note) {
  return note.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_m, target, alias) => alias ?? target.split("/").pop()?.replace(/#.*$/, "") ?? target);
}
function slugKey(name) {
  return name.toLowerCase().normalize("NFKD").replace(/[^\w\s]/g, "").trim().replace(/\s+/g, "_").replace(/^[^a-z]+/, "");
}

// src/modals.ts
var BAD_FILE_CHARS = /[\\/:*?"<>|#^[\]]/;
var NewChallengeModal = class extends import_obsidian.Modal {
  constructor(plugin) {
    super(plugin.app);
    this.plugin = plugin;
    this.name = "";
    this.key = "";
    this.keyTouched = false;
    this.doneLabel = "";
    this.notDoneLabel = "";
    this.types = "";
    this.headline = "streak";
  }
  onOpen() {
    const { contentEl } = this;
    this.titleEl.setText("New challenge");
    let keyInput = null;
    new import_obsidian.Setting(contentEl).setName("Name").setDesc("Also the challenge note's file name.").addText((t) => {
      t.setPlaceholder("Meditation").onChange((v) => {
        this.name = v.trim();
        if (!this.keyTouched) {
          this.key = slugKey(v);
          keyInput?.setValue(this.key);
        }
      });
      window.setTimeout(() => t.inputEl.focus(), 0);
    });
    new import_obsidian.Setting(contentEl).setName("Property").setDesc("The key written to daily notes. It can't change later, or the history would split in two.").addText((t) => {
      keyInput = t;
      t.setPlaceholder("meditation").onChange((v) => {
        this.key = v.trim();
        this.keyTouched = true;
      });
    });
    new import_obsidian.Setting(contentEl).setName("Done means").addText(
      (t) => t.setPlaceholder("Done").onChange((v) => this.doneLabel = v.trim())
    );
    new import_obsidian.Setting(contentEl).setName("Not done means").addText(
      (t) => t.setPlaceholder("Not done").onChange((v) => this.notDoneLabel = v.trim())
    );
    new import_obsidian.Setting(contentEl).setName("Types").setDesc("Optional, comma-separated. Picked when you log a done day, like strength, aerobic, mobility.").addText((t) => t.onChange((v) => this.types = v));
    new import_obsidian.Setting(contentEl).setName("Headline").setDesc("What each row shows beside its strip.").addDropdown(
      (d) => d.addOptions({ streak: "Current streak", week: "Count this week" }).setValue(this.headline).onChange((v) => this.headline = v === "week" ? "week" : "streak")
    );
    const error = contentEl.createDiv({ cls: "askesis-error" });
    new import_obsidian.Setting(contentEl).addButton(
      (b) => b.setButtonText("Create").setCta().onClick(async () => {
        const problem = await this.create();
        error.setText(problem ?? "");
        if (!problem) this.close();
      })
    );
  }
  /** Creates the challenge note; returns what's wrong instead when it can't. */
  async create() {
    const { app, settings, index } = this.plugin;
    if (!this.name) return "Give the challenge a name.";
    if (BAD_FILE_CHARS.test(this.name)) return `The name can't contain \\ / : * ? " < > | # ^ [ ].`;
    const problem = keyProblem(this.key, index.challenges.map((c) => c.key));
    if (problem) return problem;
    const folder = (0, import_obsidian.normalizePath)(settings.challengesFolder);
    const path = (0, import_obsidian.normalizePath)(`${folder}/${this.name}.md`);
    if (app.vault.getAbstractFileByPath(path)) return `${path} already exists.`;
    const types = [...new Set(this.types.split(",").map((t) => t.trim().toLowerCase()).filter(Boolean))];
    const fm = {
      type: "challenge",
      key: this.key,
      done_label: this.doneLabel || "Done",
      not_done_label: this.notDoneLabel || "Not done"
    };
    if (types.length) fm.types = types;
    Object.assign(fm, { headline: this.headline, start: todayIso(), status: "active" });
    if (!app.vault.getAbstractFileByPath(folder)) await app.vault.createFolder(folder);
    const file = await app.vault.create(path, `---
${(0, import_obsidian.stringifyYaml)(fm)}---

\`\`\`askesis
challenge: ${this.key}
\`\`\`
`);
    new import_obsidian.Notice(`Created ${file.path}`);
    return null;
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ChallengeSuggest = class extends import_obsidian.FuzzySuggestModal {
  constructor(plugin, onPick) {
    super(plugin.app);
    this.plugin = plugin;
    this.onPick = onPick;
    this.setPlaceholder("Log which challenge, for today?");
  }
  getItems() {
    return this.plugin.index.challenges.filter((c) => c.status === "active" && c.start <= todayIso());
  }
  getItemText(c) {
    return c.name;
  }
  onChooseItem(c) {
    this.onPick(c);
  }
};
function openChallengeNote(plugin, c) {
  const file = plugin.app.vault.getAbstractFileByPath(c.path);
  if (file instanceof import_obsidian.TFile) void plugin.app.workspace.getLeaf(false).openFile(file);
}
var ConfirmModal = class extends import_obsidian.Modal {
  constructor(app, title, body, cta, warning, resolve) {
    super(app);
    this.title = title;
    this.body = body;
    this.cta = cta;
    this.warning = warning;
    this.resolve = resolve;
    this.answered = false;
  }
  onOpen() {
    this.titleEl.setText(this.title);
    this.contentEl.createEl("p", { text: this.body });
    new import_obsidian.Setting(this.contentEl).addButton((b) => b.setButtonText("Cancel").onClick(() => this.answer(false))).addButton((b) => {
      b.setButtonText(this.cta).onClick(() => this.answer(true));
      if (this.warning) b.setWarning();
      else b.setCta();
    });
  }
  answer(yes) {
    this.answered = true;
    this.resolve(yes);
    this.close();
  }
  onClose() {
    if (!this.answered) this.resolve(false);
    this.contentEl.empty();
  }
};
function confirm(app, title, body, cta, warning = false) {
  return new Promise((resolve) => new ConfirmModal(app, title, body, cta, warning, resolve).open());
}

// src/daily.ts
var FALLBACK = { folder: "Journal", format: "DD-MM-YY" };
var moment = import_obsidian2.moment;
function dailyConfig(app) {
  const core = app.internalPlugins?.getPluginById?.("daily-notes");
  const o = core?.enabled ? core.instance?.options : void 0;
  const folder = (o ? o.folder ?? "" : FALLBACK.folder).trim().replace(/^\/+|\/+$/g, "");
  return {
    folder: folder ? (0, import_obsidian2.normalizePath)(folder) : "",
    format: o?.format?.trim() || FALLBACK.format,
    template: o?.template?.trim() ?? ""
  };
}
function dailyName(iso, format) {
  return moment(iso, "YYYY-MM-DD").format(format);
}
function isoFromName(name, format) {
  const m = moment(name, format, true);
  return m.isValid() ? m.format("YYYY-MM-DD") : null;
}
function inDailyFolder(file, cfg) {
  return cfg.folder ? file.path.startsWith(cfg.folder + "/") : file.parent?.isRoot() ?? false;
}
function dailyPath(cfg, iso) {
  const name = `${dailyName(iso, cfg.format)}.md`;
  return (0, import_obsidian2.normalizePath)(cfg.folder ? `${cfg.folder}/${name}` : name);
}
async function ensureDaily(app, iso) {
  const cfg = dailyConfig(app);
  const path = dailyPath(cfg, iso);
  const existing = app.vault.getAbstractFileByPath(path);
  if (existing instanceof import_obsidian2.TFile) return existing;
  if (cfg.folder && !app.vault.getAbstractFileByPath(cfg.folder)) await app.vault.createFolder(cfg.folder);
  const folder = cfg.folder ? app.vault.getAbstractFileByPath(cfg.folder) : app.vault.getRoot();
  const template = cfg.template ? app.metadataCache.getFirstLinkpathDest(cfg.template, "") : null;
  const name = dailyName(iso, cfg.format);
  const templater = app.plugins?.plugins?.["templater-obsidian"]?.templater;
  if (template && folder instanceof import_obsidian2.TFolder && templater?.create_new_note_from_template) {
    try {
      const made = await templater.create_new_note_from_template(template, folder, name, false);
      if (made instanceof import_obsidian2.TFile) return made;
    } catch (e) {
      console.warn("Askesis: Templater could not create the daily note", e);
    }
  }
  const raw = template ? await app.vault.read(template) : "";
  const body = raw.replace(/{{\s*(date|title|time)\s*(?::([^}]*))?}}/gi, (_m, kind, fmt) => {
    if (kind.toLowerCase() === "title") return name;
    return moment(iso, "YYYY-MM-DD").format(fmt?.trim() || (kind.toLowerCase() === "date" ? cfg.format : "HH:mm"));
  });
  return app.vault.create(path, body || `---
type: journal
date: ${iso}
---
`);
}
async function openDaily(plugin, iso, pane, ask) {
  const { app } = plugin;
  const cfg = dailyConfig(app);
  let file = plugin.index.file(iso);
  if (!file) {
    const found = app.vault.getAbstractFileByPath(dailyPath(cfg, iso));
    if (found instanceof import_obsidian2.TFile) file = found;
  }
  if (!file) {
    const name = dailyName(iso, cfg.format);
    if (ask && !await confirm(app, `Create ${name}?`, "There's no daily note for this day yet.", "Create")) return;
    file = await ensureDaily(app, iso);
  }
  await app.workspace.getLeaf(pane).openFile(file);
}
function dayMenu(plugin, iso) {
  const menu = new import_obsidian2.Menu();
  menu.addItem((i) => i.setTitle("Open").setIcon("file-text").onClick(() => void openDaily(plugin, iso, false, true)));
  menu.addItem((i) => i.setTitle("Open in new tab").setIcon("file-plus").onClick(() => void openDaily(plugin, iso, "tab", true)));
  menu.addItem((i) => i.setTitle("Open to the right").setIcon("separator-vertical").onClick(() => void openDaily(plugin, iso, "split", true)));
  const file = plugin.index.file(iso);
  if (file) {
    menu.addSeparator();
    menu.addItem(
      (i) => i.setTitle("Delete note").setIcon("trash-2").setWarning(true).onClick(async () => {
        if (await confirm(plugin.app, `Delete ${file.basename}?`, "The note moves to the trash.", "Delete", true)) {
          await plugin.app.fileManager.trashFile(file);
        }
      })
    );
  }
  return menu;
}

// src/journal.ts
var JournalIndex = class extends import_obsidian3.Events {
  constructor(plugin) {
    super();
    this.plugin = plugin;
    this.challenges = [];
    this.byDate = /* @__PURE__ */ new Map();
    this.isoByPath = /* @__PURE__ */ new Map();
    this.known = /* @__PURE__ */ new Set();
    this.typed = /* @__PURE__ */ new Set();
  }
  rebuild() {
    const { app } = this.plugin;
    const cfg = dailyConfig(app);
    const byDate = /* @__PURE__ */ new Map();
    const isoByPath = /* @__PURE__ */ new Map();
    const known = /* @__PURE__ */ new Set();
    const challenges = [];
    for (const file of app.vault.getMarkdownFiles()) {
      const fm = app.metadataCache.getFileCache(file)?.frontmatter;
      const inJournal = inDailyFolder(file, cfg);
      if (fm?.type === "challenge") {
        known.add(file.path);
        const c = parseChallenge(file.path, file.basename, fm);
        if (!c) continue;
        if (challenges.some((x) => x.key === c.key)) {
          console.warn(`Askesis: ${file.path} reuses the property "${c.key}"; ignored.`);
          continue;
        }
        challenges.push(c);
      } else if (fm?.type === "journal" || inJournal) {
        const iso = normalizeIso(fm?.date) ?? isoFromName(file.basename, cfg.format);
        if (!iso) continue;
        known.add(file.path);
        isoByPath.set(file.path, iso);
        const prev = byDate.get(iso);
        if (!prev || !inDailyFolder(prev, cfg) && inJournal) byDate.set(iso, file);
      }
    }
    challenges.sort((a, b) => a.order - b.order || a.start.localeCompare(b.start) || a.name.localeCompare(b.name));
    this.byDate = byDate;
    this.isoByPath = isoByPath;
    this.known = known;
    this.challenges = challenges;
    challenges.forEach((c) => this.registerTypes(c));
    this.trigger("changed");
  }
  /** Should a change to this file trigger a rebuild? */
  concerns(file, fm) {
    if (this.known.has(file.path)) return true;
    if (fm?.type === "journal" || fm?.type === "challenge") return true;
    return inDailyFolder(file, dailyConfig(this.plugin.app));
  }
  knows(path) {
    return this.known.has(path);
  }
  /** The date a daily note stands for. */
  isoOf(path) {
    return this.isoByPath.get(path) ?? null;
  }
  file(iso) {
    return this.byDate.get(iso) ?? null;
  }
  challenge(key) {
    return this.challenges.find((c) => c.key === key) ?? null;
  }
  entry(key, iso) {
    const fresh = this.plugin.writer.peek(key, iso);
    if (fresh !== void 0) return fresh;
    const file = this.byDate.get(iso);
    return file ? readEntry(this.plugin.app.metadataCache.getFileCache(file)?.frontmatter, key) : null;
  }
  lookup(key) {
    return (iso) => this.entry(key, iso)?.done;
  }
  /** Entries carrying a note, newest first. */
  notes(c) {
    const out = [];
    for (const iso of this.byDate.keys()) {
      if (iso < c.start) continue;
      const e = this.entry(c.key, iso);
      if (e?.note) out.push([iso, e]);
    }
    return out.sort((a, b) => b[0].localeCompare(a[0]));
  }
  /** Tell Obsidian the property types, once per name per session. The API is undocumented, so every step is guarded. */
  registerTypes(c) {
    const mtm = this.plugin.app.metadataTypeManager;
    if (!mtm || typeof mtm.setType !== "function") return;
    const want = [
      [c.key, "checkbox"],
      [noteKey(c.key), "text"]
    ];
    if (c.types.length) want.push([typeKey(c.key), "multitext"]);
    for (const [name, type] of want) {
      if (this.typed.has(name)) continue;
      this.typed.add(name);
      try {
        const assigned = mtm.getAssignedType?.(name) ?? mtm.types?.[name]?.type;
        if (!assigned) mtm.setType(name, type);
      } catch (e) {
        console.warn("Askesis: could not set property type", name, e);
      }
    }
  }
};

// src/render/block.ts
var import_obsidian5 = require("obsidian");

// src/stats.ts
function streak(get, anchor, start) {
  let d = get(anchor) === void 0 ? addDays(anchor, -1) : anchor;
  let n = 0;
  while (d >= start && get(d) === true) {
    n++;
    d = addDays(d, -1);
  }
  return n;
}
function best(get, start, end) {
  let top = 0;
  let run = 0;
  for (let d = start; d <= end; d = addDays(d, 1)) {
    if (get(d) === true) top = Math.max(top, ++run);
    else run = 0;
  }
  return top;
}
function countDone(get, from, to) {
  let n = 0;
  for (let d = from; d <= to; d = addDays(d, 1)) if (get(d) === true) n++;
  return n;
}
function weekCount(get, anchor, firstDay) {
  return countDone(get, weekStart(anchor, firstDay), anchor);
}
function window2(anchor, start, days) {
  const from = addDays(anchor, -(days - 1));
  const clipped = from < start ? start : from;
  return { from: clipped, length: Math.max(0, daysBetween(clipped, anchor) + 1) };
}
function headline(c, get, anchor, firstDay) {
  if (c.headline === "week") return `${weekCount(get, anchor, firstDay)} this week`;
  const now = streak(get, anchor, c.start);
  const top = best(get, c.start, anchor);
  if (!top) return "";
  return now ? `${now} ${now === 1 ? "day" : "days"} \xB7 best ${top}` : `best ${top}`;
}

// src/render/cells.ts
var import_obsidian4 = require("obsidian");
function challengeCell(plugin, c, iso, today) {
  if (iso < c.start) return { cls: ["is-before"] };
  if (iso > today) return { cls: ["is-off"] };
  const e = plugin.index.entry(c.key, iso);
  const cls = [e?.done === true ? "is-done" : e?.done === false ? "is-miss" : "is-empty"];
  if (e?.note) cls.push("has-note");
  if (iso === today) cls.push("is-today");
  return {
    cls,
    tip: dayTip(c, iso, e),
    onClick: (el, ev) => {
      const pane = import_obsidian4.Keymap.isModEvent(ev);
      if (pane) void openDaily(plugin, iso, pane, false);
      else void plugin.sheet.open(c, iso, el, iso === today && !e);
    },
    onMenu: (ev) => challengeMenu(plugin, c, iso, e).showAtMouseEvent(ev)
  };
}
function journalCell(plugin, iso, today, openIso) {
  const cls = [];
  const file = plugin.index.file(iso);
  if (file) cls.push("has-file");
  if (iso === today) cls.push("is-today");
  if (iso === openIso) cls.push("is-open");
  return {
    cls,
    tip: shortDate(iso) + (file ? "" : " \xB7 no note"),
    onClick: (_el, ev) => void openDaily(plugin, iso, import_obsidian4.Keymap.isModEvent(ev), true),
    onMenu: (ev) => dayMenu(plugin, iso).showAtMouseEvent(ev)
  };
}
function dayTip(c, iso, e) {
  const types = e?.types?.length ? ` \xB7 ${e.types.join(", ")}` : "";
  return `${shortDate(iso)} \xB7 ${stateLabel(c, e)}${types}${e?.note ? ` \u2014 ${plainText(e.note)}` : ""}`;
}
function challengeMenu(plugin, c, iso, e) {
  const menu = new import_obsidian4.Menu();
  menu.addItem(
    (i) => i.setTitle(c.doneLabel).setIcon("check").setChecked(e?.done === true).onClick(() => void plugin.writer.write(c, iso, { done: true }))
  );
  menu.addItem(
    (i) => i.setTitle(c.notDoneLabel).setIcon("minus").setChecked(e?.done === false).onClick(() => void plugin.writer.write(c, iso, { done: false }))
  );
  if (e) menu.addItem((i) => i.setTitle("Clear").setIcon("eraser").onClick(() => void plugin.writer.clear(c, iso)));
  menu.addSeparator();
  menu.addItem((i) => i.setTitle("Open daily note").setIcon("file-text").onClick(() => void openDaily(plugin, iso, false, false)));
  return menu;
}
function drawCell(parent, d, base, label) {
  const el = d.onClick ? parent.createEl("button", { cls: [base, ...d.cls] }) : parent.createSpan({ cls: [base, ...d.cls] });
  if (label !== void 0) el.createSpan({ cls: `${base}-n`, text: label });
  if (d.tip && d.onClick) (0, import_obsidian4.setTooltip)(el, d.tip, { placement: "top" });
  if (d.onClick) el.addEventListener("click", (ev) => d.onClick?.(el, ev));
  if (d.onMenu) {
    el.addEventListener("contextmenu", (ev) => {
      ev.preventDefault();
      d.onMenu?.(ev);
    });
  }
  return el;
}
var YEAR_WEEKS = 53;
function yearGrid(parent, firstDay, today, day, keep, key) {
  const begin = addDays(weekStart(today, firstDay), -7 * (YEAR_WEEKS - 1));
  const scroll = parent.createDiv({ cls: "askesis-heat-scroll", attr: { "data-key": key } });
  const heat = scroll.createDiv({ cls: "askesis-heat" });
  heat.createSpan();
  for (let i = 0; i < 7; i++) heat.createSpan({ cls: "askesis-heat-day", text: i % 2 ? weekdayName(firstDay + i) : "" });
  for (let w = 0; w < YEAR_WEEKS; w++) {
    const ws = addDays(begin, w * 7);
    heat.createSpan({ cls: "askesis-month", text: +ws.slice(8, 10) <= 7 ? monthName(ws) : "" });
    for (let i = 0; i < 7; i++) drawCell(heat, day(addDays(ws, i)), "askesis-cell");
  }
  const kept = keep.get(key);
  requestAnimationFrame(() => {
    scroll.scrollLeft = kept ?? scroll.scrollWidth;
  });
}
function heatStrip(parent, firstDay, today, weeks, day) {
  const begin = addDays(weekStart(today, firstDay), -7 * (weeks - 1));
  const strip = parent.createDiv({ cls: "askesis-strip" });
  strip.setCssProps({ "--weeks": String(weeks) });
  for (let w = 0; w < weeks; w++) {
    const ws = addDays(begin, w * 7);
    strip.createSpan({ cls: "askesis-month", text: +ws.slice(8, 10) <= 7 ? monthName(ws) : "" });
    for (let i = 0; i < 7; i++) {
      const iso = addDays(ws, i);
      if (iso > today) strip.createSpan();
      else drawCell(strip, day(iso), "askesis-cell");
    }
  }
}
function saveScroll(root, keep) {
  root.querySelectorAll(".askesis-heat-scroll").forEach((s) => {
    if (s.dataset.key) keep.set(s.dataset.key, s.scrollLeft);
  });
}
function legend(parent, c) {
  const el = parent.createDiv({ cls: "askesis-legend" });
  const item = (cls, text2) => {
    const s = el.createSpan();
    s.createSpan({ cls: ["askesis-cell", ...cls] });
    s.appendText(text2);
  };
  item(["is-done"], c.doneLabel);
  item(["is-miss"], c.notDoneLabel);
  item(["is-empty"], "Not logged");
  item(["is-empty", "has-note"], "Has a note");
}

// src/render/block.ts
function parseOptions(source) {
  const m = /^\s*challenge\s*:\s*(.+?)\s*$/m.exec(source);
  return m ? { challenge: m[1] } : {};
}
var AskesisBlock = class extends import_obsidian5.MarkdownRenderChild {
  constructor(el, plugin, opts, sourcePath) {
    super(el);
    this.plugin = plugin;
    this.opts = opts;
    this.sourcePath = sourcePath;
    this.confirmEnd = false;
    this.scroll = /* @__PURE__ */ new Map();
  }
  onload() {
    this.registerEvent(this.plugin.index.on("changed", () => this.render()));
    this.registerDomEvent(this.containerEl, "mousedown", (e) => e.stopPropagation());
    this.render();
  }
  render() {
    const root = this.containerEl;
    saveScroll(root, this.scroll);
    root.empty();
    root.addClass("askesis");
    if (this.opts.challenge) this.renderPage(root, this.opts.challenge);
    else this.renderYears(root);
  }
  renderYears(root) {
    const { index, settings } = this.plugin;
    if (!index.challenges.length) {
      root.createDiv({ cls: "askesis-empty", text: "No challenges yet." });
      return;
    }
    const today = todayIso();
    const ordered = [...index.challenges].sort((a, b) => Number(a.status === "ended") - Number(b.status === "ended"));
    for (const c of ordered) {
      const sec = root.createDiv({ cls: "askesis-row" });
      const head = sec.createDiv({ cls: "askesis-row-head" });
      const link = head.createEl("a", { cls: "internal-link askesis-title", text: c.name, href: c.path, attr: { "data-href": c.path } });
      link.addEventListener("click", (e) => {
        e.preventDefault();
        void this.plugin.app.workspace.openLinkText(c.path, this.sourcePath);
      });
      const stat = c.status === "ended" ? `ended ${shortDate(c.ended ?? today)}` : headline(c, index.lookup(c.key), today, settings.weekStart);
      head.createSpan({ cls: "askesis-stat", text: stat });
      yearGrid(sec, settings.weekStart, today, (iso) => challengeCell(this.plugin, c, iso, today), this.scroll, c.key);
    }
  }
  renderPage(root, key) {
    const { index, settings } = this.plugin;
    const c = index.challenge(key);
    if (!c) {
      root.createDiv({ cls: "askesis-empty", text: `No challenge uses the property \u201C${key}\u201D.` });
      return;
    }
    const today = todayIso();
    const get = index.lookup(c.key);
    const month = window2(today, c.start, 30);
    const stats = [];
    if (c.headline === "week") {
      const by = new Map(c.types.map((t) => [t, 0]));
      for (let d = month.from; d <= today; d = addDays(d, 1)) {
        for (const t of index.entry(c.key, d)?.types ?? []) by.set(t, (by.get(t) ?? 0) + 1);
      }
      stats.push(["This week", String(weekCount(get, today, settings.weekStart))]);
      stats.push(["Last 30 days", String(countDone(get, month.from, today)), `/ ${month.length}`]);
      stats.push(["Best run", String(best(get, c.start, today)), "days"]);
      if (by.size) stats.push(["By type, 30 days", [...by].map(([t, n]) => `${n} ${t}`).join(" \xB7 ")]);
    } else {
      stats.push(["Current", String(streak(get, today, c.start)), "days"]);
      stats.push(["Best", String(best(get, c.start, today)), "days"]);
      stats.push(["Last 30 days", String(countDone(get, month.from, today)), `/ ${month.length}`]);
      stats.push(["Since start", String(countDone(get, c.start, today)), `of ${Math.max(0, daysBetween(c.start, today) + 1)}`]);
    }
    const meta = root.createDiv({ cls: "askesis-meta" });
    meta.setText(`${c.status === "ended" ? `Ended ${shortDate(c.ended ?? today)} \xB7 ` : ""}since ${shortDate(c.start)} ${c.start.slice(0, 4)} \xB7 `);
    meta.createSpan({ cls: "askesis-mono", text: c.key });
    const row = root.createDiv({ cls: "askesis-stats" });
    for (const [label, value, unit] of stats) {
      const s = row.createDiv({ cls: "askesis-stat-box" });
      s.createDiv({ cls: "askesis-label", text: label });
      const v = s.createDiv({ cls: ["askesis-stat-value", value.length > 6 ? "is-text" : ""].filter(Boolean), text: value });
      if (unit) v.createSpan({ cls: "askesis-unit", text: ` ${unit}` });
    }
    const heat = root.createDiv();
    yearGrid(heat, settings.weekStart, today, (iso) => challengeCell(this.plugin, c, iso, today), this.scroll, c.key);
    legend(heat, c);
    const notes = index.notes(c);
    const sec = root.createDiv({ cls: "askesis-notes" });
    sec.createDiv({ cls: "askesis-label", text: "Notes" });
    if (!notes.length) sec.createDiv({ cls: "askesis-empty", text: "No notes yet. Add one from any day." });
    const list = sec.createEl("ol");
    for (const [iso, e] of notes) {
      const li = list.createEl("li");
      const jump = li.createEl("button", { cls: "askesis-jump", text: shortDate(iso) });
      jump.addEventListener("click", () => void this.plugin.sheet.open(c, iso, jump));
      li.createSpan({ cls: "askesis-stat", text: stateLabel(c, e) + (e.types?.length ? ` \xB7 ${e.types.join(", ")}` : "") });
      const p = li.createDiv({ cls: "askesis-note-text" });
      void import_obsidian5.MarkdownRenderer.render(this.plugin.app, e.note ?? "", p, this.sourcePath, this);
    }
    this.renderEnd(root, c);
  }
  renderEnd(root, c) {
    const bar = root.createDiv({ cls: "askesis-end" });
    const button = (text2, cta, onClick) => {
      const b = bar.createEl("button", { text: text2, cls: cta ? "mod-cta" : "" });
      b.addEventListener("click", onClick);
    };
    if (c.status === "ended") {
      button("Resume challenge", false, () => void this.setStatus(c, "active"));
      bar.createSpan({ cls: "askesis-stat", text: "It returns to the calendar. Nothing was deleted." });
    } else if (this.confirmEnd) {
      bar.createSpan({ text: `End ${c.name}? It leaves the calendar, and its history stays in your journal.` });
      button("End challenge", true, () => void this.setStatus(c, "ended"));
      button("Keep it", false, () => {
        this.confirmEnd = false;
        this.render();
      });
    } else {
      button("End challenge", false, () => {
        this.confirmEnd = true;
        this.render();
      });
    }
  }
  async setStatus(c, status) {
    this.confirmEnd = false;
    const file = this.plugin.app.vault.getAbstractFileByPath(c.path);
    if (!(file instanceof import_obsidian5.TFile)) {
      new import_obsidian5.Notice(`Askesis: ${c.path} is gone.`);
      return;
    }
    await this.plugin.app.fileManager.processFrontMatter(file, (fm) => {
      fm.status = status;
      if (status === "ended") fm.ended = todayIso();
      else delete fm.ended;
    });
  }
};

// src/render/calendar.ts
var import_obsidian6 = require("obsidian");
var CALENDAR_VIEW = "askesis-calendar";
var CELL = 12;
var GAP = 3;
var MIN_BELOW = 120;
var CalendarView = class extends import_obsidian6.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.month = monthStart(todayIso());
    this.expanded = false;
    this.openPath = null;
    this.weeks = 0;
    this.restore = null;
  }
  getViewType() {
    return CALENDAR_VIEW;
  }
  getDisplayText() {
    return "Calendar";
  }
  getIcon() {
    return "calendar-days";
  }
  async setState(state, result) {
    const s = state ?? {};
    if (typeof s.expanded === "boolean") this.expanded = s.expanded;
    await super.setState(state, result);
    this.render();
  }
  getState() {
    return { ...super.getState(), expanded: this.expanded };
  }
  async onOpen() {
    this.contentEl.addClass("askesis-cal-view");
    this.openPath = this.app.workspace.getActiveFile()?.path ?? null;
    this.registerEvent(this.plugin.index.on("changed", () => this.render()));
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        if (!file || file.path === this.openPath) return;
        this.openPath = file.path;
        this.render();
      })
    );
    const ro = new ResizeObserver(() => {
      if (this.expanded && this.stripWeeks() !== this.weeks) this.render();
    });
    ro.observe(this.contentEl);
    this.register(() => ro.disconnect());
    this.render();
  }
  stripWeeks() {
    const style = getComputedStyle(this.contentEl);
    const width = this.contentEl.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    if (width <= 0) return 20;
    return Math.max(8, Math.min(53, Math.floor((width + GAP) / (CELL + GAP))));
  }
  render() {
    const root = this.contentEl;
    root.empty();
    const today = todayIso();
    const active = this.plugin.index.challenges.filter((c) => c.status === "active");
    const wrap = root.createDiv({ cls: ["askesis", "askesis-cal"] });
    this.renderMonth(wrap, today);
    this.renderToggle(wrap, active, today);
    if (this.expanded) this.renderChallenges(wrap, active, today);
  }
  renderMonth(wrap, today) {
    const head = wrap.createDiv({ cls: "askesis-cal-head" });
    const title = head.createDiv({ cls: "askesis-cal-title" });
    title.createSpan({ cls: "askesis-cal-month", text: monthLong(this.month) });
    title.createSpan({ cls: "askesis-cal-year", text: this.month.slice(0, 4) });
    const nav = head.createDiv({ cls: "askesis-cal-nav" });
    const current = monthStart(today);
    const step = (icon, tip, to, hidden = false) => {
      const b = nav.createEl("button", { cls: ["clickable-icon", "askesis-cal-arrow", hidden ? "is-hidden" : ""].filter(Boolean) });
      (0, import_obsidian6.setIcon)(b, icon);
      (0, import_obsidian6.setTooltip)(b, tip);
      b.addEventListener("click", () => {
        this.month = to();
        this.render();
      });
    };
    step("chevron-left", "Previous month", () => addMonths(this.month, -1));
    step("dot", "This month", () => current, this.month === current);
    step("chevron-right", "Next month", () => addMonths(this.month, 1));
    const firstDay = this.plugin.settings.weekStart;
    const wds = wrap.createDiv({ cls: "askesis-cal-wds" });
    for (let i = 0; i < 7; i++) {
      const wd = wds.createSpan({ cls: "askesis-cal-wd", text: weekdayName(firstDay + i).toUpperCase() });
      if (this.month === current && weekday(today) === (firstDay + i) % 7) wd.addClass("is-today");
    }
    const grid = wrap.createDiv({ cls: "askesis-cal-grid" });
    const openIso = this.openPath ? this.plugin.index.isoOf(this.openPath) : null;
    const start = weekStart(this.month, firstDay);
    for (let i = 0; i < 42; i++) {
      const iso = addDays(start, i);
      const cell = journalCell(this.plugin, iso, today, openIso);
      if (iso.slice(0, 7) !== this.month.slice(0, 7)) cell.cls.push("is-adjacent");
      drawCell(grid, cell, "askesis-day", String(+iso.slice(8, 10)));
    }
  }
  /** The bar under the month: today's marks, and the switch for the strips. */
  renderToggle(wrap, active, today) {
    const bar = wrap.createEl("button", { cls: ["askesis-toggle", this.expanded ? "is-open" : ""].filter(Boolean) });
    bar.setAttr("aria-expanded", String(this.expanded));
    bar.createSpan({ cls: "askesis-label", text: "Challenges" });
    const marks = bar.createSpan({ cls: "askesis-toggle-marks" });
    for (const c of active) {
      if (c.start > today) continue;
      const e = this.plugin.index.entry(c.key, today);
      const mark = marks.createSpan({ cls: ["askesis-mark", e?.done === true ? "is-done" : e?.done === false ? "is-miss" : "is-empty"] });
      (0, import_obsidian6.setTooltip)(mark, `${c.name} today`);
    }
    (0, import_obsidian6.setIcon)(bar.createSpan({ cls: "askesis-chevron" }), "chevron-down");
    bar.addEventListener("click", () => this.toggle());
  }
  renderChallenges(wrap, active, today) {
    const { index, settings } = this.plugin;
    this.weeks = this.stripWeeks();
    const sec = wrap.createDiv({ cls: "askesis-challenges" });
    for (const c of active) {
      const row = sec.createDiv({ cls: "askesis-row" });
      const head = row.createDiv({ cls: "askesis-row-head" });
      const name = head.createEl("button", { cls: "askesis-name", text: c.name });
      (0, import_obsidian6.setTooltip)(name, "Open the challenge page");
      name.addEventListener("click", () => openChallengeNote(this.plugin, c));
      head.createSpan({ cls: "askesis-stat", text: headline(c, index.lookup(c.key), today, settings.weekStart) });
      heatStrip(row, settings.weekStart, today, this.weeks, (iso) => challengeCell(this.plugin, c, iso, today));
    }
    const add = sec.createEl("button", { cls: "askesis-add" });
    (0, import_obsidian6.setIcon)(add.createSpan(), "plus");
    add.appendText(active.length ? "New challenge" : "Add your first challenge");
    add.addEventListener("click", () => new NewChallengeModal(this.plugin).open());
  }
  toggle() {
    this.expanded = !this.expanded;
    this.render();
    this.app.workspace.requestSaveLayout();
    requestAnimationFrame(() => this.fit());
  }
  /**
   * Opening: grow this pane into the one directly below it (never below
   * MIN_BELOW). Closing: put the panes back as they were. Uses Obsidian's
   * internal setDimension; where that's missing the view simply scrolls.
   */
  fit() {
    const tabs = this.leaf.parent;
    const kids = tabs?.parent?.children;
    if (!tabs || !kids || kids.length < 2 || kids.some((k) => typeof k.setDimension !== "function")) return;
    const save = () => this.app.workspace.requestSaveLayout();
    if (!this.expanded) {
      const r = this.restore;
      this.restore = null;
      if (r && r.items.length === kids.length && r.items.every((k, j) => k === kids[j])) {
        kids.forEach((k, j) => k.setDimension?.(r.dims[j]));
        save();
      }
      return;
    }
    const i = kids.indexOf(tabs);
    const below = kids[i + 1];
    const wrap = this.contentEl.firstElementChild;
    if (!below || !wrap) return;
    const gap = below.containerEl.getBoundingClientRect().top - tabs.containerEl.getBoundingClientRect().bottom;
    if (Math.abs(gap) > 8) return;
    const style = getComputedStyle(this.contentEl);
    const need = wrap.scrollHeight + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) - this.contentEl.clientHeight;
    const heights = kids.map((k) => k.containerEl.getBoundingClientRect().height);
    const total = heights.reduce((a, b) => a + b, 0);
    const grow = Math.min(need, heights[i + 1] - MIN_BELOW);
    if (grow <= 1 || !total) return;
    this.restore = { items: [...kids], dims: heights.map((h) => 100 * h / total) };
    const next = [...heights];
    next[i] += grow;
    next[i + 1] -= grow;
    kids.forEach((k, j) => k.setDimension?.(100 * next[j] / total));
    save();
  }
};

// src/render/sheet.ts
var import_obsidian7 = require("obsidian");
var OPENERS = ".askesis-cell, .askesis-day, .askesis-today-item, .askesis-jump";
var Sheet = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.el = null;
    this.scrim = null;
    this.cur = null;
    this.pendingNote = null;
    this.flushSoon = (0, import_obsidian7.debounce)(() => void this.flush(), 500, true);
    plugin.registerDomEvent(document, "pointerdown", (e) => this.onPress(e), { capture: true });
    plugin.registerDomEvent(document, "keydown", (e) => {
      if (e.key === "Escape" && this.cur) {
        e.preventDefault();
        this.close();
      }
    });
    plugin.registerDomEvent(document, "wheel", (e) => {
      if (this.cur && !import_obsidian7.Platform.isPhone && !this.el?.contains(e.target)) this.close();
    }, { capture: true, passive: true });
    plugin.registerDomEvent(window, "resize", () => this.place());
  }
  /** `target` anchors the popover; `quick` logs an unlogged day as done before opening. */
  async open(c, iso, target, quick = false) {
    await this.flush();
    const rect = target?.isConnected ? target.getBoundingClientRect() : null;
    let entry = this.plugin.index.entry(c.key, iso);
    if (quick && !entry) entry = await this.plugin.writer.write(c, iso, { done: true });
    this.cur = { c, iso, entry, rect };
    this.render();
  }
  close() {
    void this.flush();
    this.el?.remove();
    this.scrim?.remove();
    this.el = this.scrim = null;
    this.cur = null;
  }
  onPress(e) {
    if (!this.cur) return;
    const t = e.target;
    if (!t || this.el?.contains(t) || t.closest(OPENERS)) return;
    this.close();
  }
  async set(patch) {
    if (!this.cur) return;
    const { c, iso } = this.cur;
    const p = patch && this.pendingNote !== null ? { ...patch, note: this.pendingNote } : patch;
    this.pendingNote = null;
    const entry = p ? await this.plugin.writer.write(c, iso, p) : await this.plugin.writer.clear(c, iso);
    if (this.cur?.c === c && this.cur.iso === iso) {
      this.cur.entry = entry;
      this.render();
    }
  }
  async flush() {
    if (!this.cur || this.pendingNote === null) return;
    const { c, iso } = this.cur;
    const note = this.pendingNote;
    this.pendingNote = null;
    const entry = await this.plugin.writer.write(c, iso, { note });
    if (this.cur?.c === c && this.cur.iso === iso) this.cur.entry = entry;
  }
  async step(days) {
    if (!this.cur) return;
    await this.flush();
    if (!this.cur) return;
    this.cur.iso = addDays(this.cur.iso, days);
    this.cur.entry = this.plugin.index.entry(this.cur.c.key, this.cur.iso);
    this.render();
  }
  render() {
    if (!this.cur) return;
    const { c, iso, entry } = this.cur;
    const today = todayIso();
    if (!this.el) {
      if (import_obsidian7.Platform.isPhone) {
        this.scrim = document.body.createDiv({ cls: "askesis-scrim" });
        this.scrim.addEventListener("click", () => this.close());
      }
      this.el = document.body.createDiv({ cls: "askesis-sheet", attr: { role: "dialog" } });
      if (import_obsidian7.Platform.isPhone) this.el.addClass("is-phone");
    }
    const el = this.el;
    el.empty();
    const top = el.createDiv({ cls: "askesis-sheet-top" });
    const title = top.createDiv();
    title.createDiv({ cls: "askesis-label", text: c.name });
    title.createDiv({ cls: "askesis-sheet-date", text: longDate(iso) + (iso === today ? " \xB7 today" : "") });
    const nav = top.createDiv({ cls: "askesis-sheet-nav" });
    this.iconButton(nav, "chevron-left", "Previous day", addDays(iso, -1) < c.start, () => void this.step(-1));
    this.iconButton(nav, "chevron-right", "Next day", addDays(iso, 1) > today, () => void this.step(1));
    this.iconButton(nav, "x", "Close", false, () => this.close());
    const seg = el.createDiv({ cls: "askesis-seg" });
    const option = (label, value) => {
      const on = entry?.done === value;
      const b = seg.createEl("button", {
        cls: ["askesis-opt", on ? value ? "is-done" : "is-miss" : ""].filter(Boolean),
        text: label,
        attr: { "aria-pressed": String(on) }
      });
      b.addEventListener("click", () => void this.set({ done: value }));
    };
    option(c.doneLabel, true);
    option(c.notDoneLabel, false);
    if (c.types.length) {
      const chips = el.createDiv({ cls: "askesis-chips" });
      for (const t of c.types) {
        const on = entry?.types?.includes(t) ?? false;
        const b = chips.createEl("button", { cls: ["askesis-chip", on ? "is-on" : ""].filter(Boolean), text: t, attr: { "aria-pressed": String(on) } });
        b.addEventListener("click", () => {
          const now = entry?.types ?? [];
          void this.set({ done: true, types: on ? now.filter((x) => x !== t) : [...now, t] });
        });
      }
    }
    const area = el.createEl("textarea", {
      cls: "askesis-note",
      attr: { rows: "2", placeholder: "Note, optional", "aria-label": "Note" }
    });
    area.value = entry?.note ?? "";
    area.addEventListener("input", () => {
      this.pendingNote = area.value;
      this.flushSoon();
    });
    const foot = el.createDiv({ cls: "askesis-sheet-foot" });
    const where = foot.createSpan({ text: "Writes to " });
    const link = where.createEl("a", { cls: "askesis-mono askesis-file", text: dailyName(iso, dailyConfig(this.plugin.app).format), href: "#" });
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      this.close();
      void openDaily(this.plugin, iso, false, false);
    });
    if (entry) {
      const clear = foot.createEl("button", { cls: "askesis-link", text: "Clear entry" });
      clear.addEventListener("click", () => void this.set(null));
    }
    this.place();
  }
  iconButton(parent, icon, label, disabled, onClick) {
    const b = parent.createEl("button", { cls: "clickable-icon askesis-icon", attr: { "aria-label": label } });
    (0, import_obsidian7.setIcon)(b, icon);
    b.disabled = disabled;
    b.addEventListener("click", onClick);
  }
  place() {
    const el = this.el;
    if (!el || !this.cur || import_obsidian7.Platform.isPhone) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const r = this.cur.rect;
    let left = (window.innerWidth - w) / 2;
    let top = window.innerHeight * 0.25;
    if (r) {
      left = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), window.innerWidth - w - 8);
      top = r.bottom + 8;
      if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 8);
    }
    el.setCssStyles({ left: `${left}px`, top: `${top}px` });
  }
};

// src/settings.ts
var import_obsidian8 = require("obsidian");
var DEFAULT_SETTINGS = {
  challengesFolder: "Misc/Challenges",
  weekStart: 0,
  calendarPlaced: false
};
var AskesisSettingTab = class extends import_obsidian8.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    const s = this.plugin.settings;
    containerEl.empty();
    containerEl.createEl("p", {
      cls: "setting-item-description",
      text: "Daily notes are opened and created with the folder, name format and template set in the core Daily notes plugin."
    });
    new import_obsidian8.Setting(containerEl).setName("Challenges folder").setDesc("Where new challenge notes are created. Challenges are found by type: challenge anywhere in the vault.").addText(
      (t) => t.setValue(s.challengesFolder).onChange(async (v) => {
        s.challengesFolder = v.trim() || DEFAULT_SETTINGS.challengesFolder;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian8.Setting(containerEl).setName("Week starts on").addDropdown(
      (d) => d.addOptions({ "0": "Sunday", "1": "Monday" }).setValue(String(s.weekStart)).onChange(async (v) => {
        s.weekStart = +v;
        await this.plugin.saveSettings();
        this.plugin.index.trigger("changed");
      })
    );
  }
};

// src/write.ts
var FRESH_MS = 5e3;
var Writer = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.recent = /* @__PURE__ */ new Map();
  }
  /** The entry we last wrote for this day, if that was in the last few seconds. */
  peek(key, iso) {
    const r = this.recent.get(`${key}|${iso}`);
    return r && Date.now() - r.at < FRESH_MS ? r.entry : void 0;
  }
  write(c, iso, patch) {
    return this.apply(c, iso, (prev) => mergeEntry(prev, patch));
  }
  clear(c, iso) {
    return this.apply(c, iso, () => null);
  }
  async apply(c, iso, change) {
    let file = this.plugin.index.file(iso);
    if (!file) {
      if (!change(null)) return null;
      file = await ensureDaily(this.plugin.app, iso);
    }
    let next = null;
    await this.plugin.app.fileManager.processFrontMatter(file, (fm) => {
      next = change(readEntry(fm, c.key));
      applyEntry(fm, c.key, next);
    });
    this.recent.set(`${c.key}|${iso}`, { at: Date.now(), entry: next });
    return next;
  }
};

// src/main.ts
var AskesisPlugin = class extends import_obsidian9.Plugin {
  constructor() {
    super(...arguments);
    this.rebuildSoon = (0, import_obsidian9.debounce)(() => this.index.rebuild(), 150, true);
    this.day = todayIso();
  }
  async onload() {
    const saved = await this.loadData() ?? {};
    this.settings = { ...DEFAULT_SETTINGS };
    for (const key of Object.keys(DEFAULT_SETTINGS)) {
      if (typeof saved[key] === typeof DEFAULT_SETTINGS[key]) this.settings[key] = saved[key];
    }
    this.index = new JournalIndex(this);
    this.writer = new Writer(this);
    this.sheet = new Sheet(this);
    this.registerView(CALENDAR_VIEW, (leaf) => new CalendarView(leaf, this));
    this.registerMarkdownCodeBlockProcessor("askesis", (source, el, ctx) => {
      ctx.addChild(new AskesisBlock(el, this, parseOptions(source), ctx.sourcePath));
    });
    this.addSettingTab(new AskesisSettingTab(this.app, this));
    this.addRibbonIcon("calendar-days", "Open calendar", () => void this.openCalendar());
    this.addCommand({ id: "open-calendar", name: "Open calendar", callback: () => void this.openCalendar() });
    this.addCommand({
      id: "log",
      name: "Log a challenge for today",
      callback: () => new ChallengeSuggest(this, (c) => void this.sheet.open(c, todayIso(), null)).open()
    });
    this.addCommand({ id: "new", name: "New challenge", callback: () => new NewChallengeModal(this).open() });
    this.addCommand({
      id: "open",
      name: "Open a challenge page",
      callback: () => new ChallengeSuggest(this, (c) => openChallengeNote(this, c)).open()
    });
    this.app.workspace.onLayoutReady(async () => {
      this.index.rebuild();
      this.registerEvent(
        this.app.metadataCache.on("changed", (file, _data, cache) => {
          if (this.index.concerns(file, cache.frontmatter)) this.rebuildSoon();
        })
      );
      this.registerEvent(
        this.app.vault.on("delete", (file) => {
          if (this.index.knows(file.path)) this.rebuildSoon();
        })
      );
      this.registerEvent(
        this.app.vault.on("rename", (file, oldPath) => {
          if (this.index.knows(oldPath) || this.index.knows(file.path)) this.rebuildSoon();
        })
      );
      this.registerEvent(
        this.app.vault.on("create", () => this.rebuildSoon())
      );
      if (!this.settings.calendarPlaced) {
        this.settings.calendarPlaced = true;
        await this.saveSettings();
        await this.openCalendar();
      }
    });
    this.registerInterval(
      window.setInterval(() => {
        if (todayIso() !== this.day) {
          this.day = todayIso();
          this.index.trigger("changed");
        }
      }, 6e4)
    );
  }
  onunload() {
    this.sheet.close();
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  /**
   * Shows the calendar, creating it if there is none: as a tab beside the
   * Calendar plugin's panel when that exists, otherwise in the right sidebar.
   */
  async openCalendar() {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(CALENDAR_VIEW)[0] ?? null;
    if (!leaf) {
      const old = workspace.getLeavesOfType("calendar")[0];
      const group = old?.parent;
      if (old && group?.children) {
        try {
          leaf = workspace.createLeafInParent(group, group.children.indexOf(old) + 1);
        } catch {
          leaf = null;
        }
      }
      leaf ?? (leaf = workspace.getRightLeaf(false));
      await leaf?.setViewState({ type: CALENDAR_VIEW, active: true });
    }
    if (leaf) await workspace.revealLeaf(leaf);
  }
};

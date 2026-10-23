/*
 * Vault Fonts
 *
 * Font files live in the font folder (default: <configDir>/Fonts), in any
 * sub-folder layout. Families are named by the fonts themselves, so one
 * folder may hold several families (e.g. Recoleta and Recoleta Alt).
 *
 * The families assigned to a role are packed, as base64 (woff2 when
 * available), into this plugin's styles.css. Obsidian Sync carries a plugin's
 * styles.css to every device along with main.js, but never syncs custom
 * folders inside the config folder, so the pack is what makes the fonts
 * appear on devices that don't have the source files. On the device that has
 * them, faces are also registered live with the FontFace API so changes apply
 * without a reload. Either way the fonts shadow any system font of the same
 * name.
 *
 * Roles (text, headings, interface, code) are applied through Obsidian's own
 * CSS variables, so themes and snippets that use var(--font-text) etc. follow.
 */

const { Plugin, PluginSettingTab, Setting, Notice, normalizePath, arrayBufferToBase64, editorLivePreviewField } = require("obsidian");
const { ViewPlugin, Decoration, WidgetType } = require("@codemirror/view");
const { RangeSetBuilder } = require("@codemirror/state");
const { syntaxTree } = require("@codemirror/language");

// Smallest container first: this is the copy that gets loaded and packed
const DATA_PREFERENCE = ["woff2", "woff", "otf", "ttf"];
const FORMATS = {
  woff2: ["font/woff2", "woff2"],
  woff: ["font/woff", "woff"],
  otf: ["font/otf", "opentype"],
  ttf: ["font/ttf", "truetype"],
};

const ROLES = {
  text: {
    name: "Editor text",
    desc: "Body text in Live Preview, Source mode, Reading view, embeds and canvas cards.",
    fallback: "var(--font-default)",
    sample: "Ideas -> notes => links <-> graph. Office affluent fjord, the act of a strict Thinker; 1234567890.",
  },
  headings: {
    name: "Headings",
    desc: "Headings and the inline title. Leave on “Same as editor text” to follow the text font.",
    fallback: "var(--font-text)",
    sample: "The Shape of a Thought",
  },
  interface: {
    name: "Interface",
    desc: "Sidebars, tabs, menus, the command palette, properties and settings.",
    fallback: "var(--font-default)",
    sample: "Search vault · Open daily note -> Journal · 24 files, 3 folders",
  },
  monospace: {
    name: "Code",
    desc: "Inline code and code blocks.",
    fallback: "var(--font-monospace-default)",
    sample: "const ok = (a, b) => a !== b && a <= b; // -> |> :: ===",
  },
};

const DEFAULT_ROLE = () => ({ family: "", features: {}, axes: {} });

const DEFAULT_SETTINGS = {
  folder: "", // empty = <configDir>/Fonts
  roles: { text: DEFAULT_ROLE(), headings: DEFAULT_ROLE(), interface: DEFAULT_ROLE(), monospace: DEFAULT_ROLE() },
  arrows: true,
  comparisons: false,
  packed: {}, // family -> { features, axes, faces } for families inside styles.css
  packSig: "",
  packBytes: 0,
};

/* ---------- OpenType features worth exposing ---------- */

const FEATURES = {
  liga: "Standard ligatures",
  clig: "Contextual ligatures",
  dlig: "Discretionary ligatures",
  hlig: "Historical ligatures",
  calt: "Contextual alternates",
  salt: "Stylistic alternates",
  swsh: "Swashes",
  cswh: "Contextual swashes",
  hist: "Historical forms",
  smcp: "Small caps",
  c2sc: "Capitals to small caps",
  pcap: "Petite caps",
  onum: "Old-style figures",
  lnum: "Lining figures",
  pnum: "Proportional figures",
  tnum: "Tabular figures",
  zero: "Slashed zero",
  frac: "Fractions",
  case: "Case-sensitive forms",
  ordn: "Ordinals",
  sups: "Superscripts",
  subs: "Subscripts",
  sinf: "Scientific inferiors",
  titl: "Titling",
  ornm: "Ornaments",
  cpsp: "Capital spacing",
};
const ON_BY_DEFAULT = new Set(["liga", "clig", "calt", "kern"]);

/* ---------- Arrow and comparison glyphs ---------- */

const ARROWS = {
  "<-->": "⟷", "<==>": "⟺", "|->": "↦", "-->": "⟶", "<--": "⟵", "==>": "⟹", "<==": "⟸",
  "<->": "↔", "<=>": "⇔", "->": "→", "<-": "←", "=>": "⇒",
};
const COMPARISONS = { ">=": "≥", "<=": "≤", "!=": "≠" };
// Syntax nodes where text must stay literal
const SKIP_NODES = /code|math|comment|frontmatter|html|url|link|tag|formatting/;

/* ---------- Minimal sfnt (TTF/OTF) reader ---------- */

const WEIGHT_WORDS = [["thin", 100], ["hairline", 100], ["extralight", 200], ["ultralight", 200], ["light", 300],
  ["regular", 400], ["book", 400], ["normal", 400], ["medium", 500], ["semibold", 600], ["demibold", 600],
  ["extrabold", 800], ["ultrabold", 800], ["bold", 700], ["black", 900], ["heavy", 900]];
const STYLE_WORDS = /^(italic|oblique|variable|vf)$/i;
const isStyleWord = (w) => STYLE_WORDS.test(w) || WEIGHT_WORDS.some(([k]) => k === w.toLowerCase());

function tag4(dv, o) {
  return String.fromCharCode(dv.getUint8(o), dv.getUint8(o + 1), dv.getUint8(o + 2), dv.getUint8(o + 3));
}

function readNames(dv, t) {
  const out = {};
  if (!t) return out;
  const o = t.off, count = dv.getUint16(o + 2), strings = o + dv.getUint16(o + 4);
  const rank = {};
  for (let i = 0; i < count; i++) {
    const r = o + 6 + i * 12;
    const platform = dv.getUint16(r), lang = dv.getUint16(r + 4), id = dv.getUint16(r + 6);
    const len = dv.getUint16(r + 8), off = strings + dv.getUint16(r + 10);
    const score = platform === 3 ? (lang === 0x409 ? 3 : 2) : platform === 0 || (platform === 1 && lang === 0) ? 1 : -1;
    if (score < 0 || (rank[id] ?? -1) >= score) continue;
    let v = "";
    if (platform === 1) for (let j = 0; j < len; j++) v += String.fromCharCode(dv.getUint8(off + j));
    else for (let j = 0; j + 1 < len; j += 2) v += String.fromCharCode(dv.getUint16(off + j));
    out[id] = v;
    rank[id] = score;
  }
  return out;
}

/** Returns { family, weight, stretch, italic, axes[], features{tag: label} } or null for non-sfnt data. */
function parseFont(buf) {
  try {
    const dv = new DataView(buf);
    const sig = dv.getUint32(0);
    if (sig !== 0x00010000 && sig !== 0x4f54544f && sig !== 0x74727565) return null;
    const tables = {};
    for (let i = 0, n = dv.getUint16(4); i < n; i++) {
      const r = 12 + i * 16;
      tables[tag4(dv, r)] = { off: dv.getUint32(r + 8), len: dv.getUint32(r + 12) };
    }
    const names = readNames(dv, tables.name);
    // Typographic family (16) groups all weights; legacy family (1) may carry the weight in its name
    let family = names[16];
    if (!family && names[1]) {
      const words = names[1].split(" ");
      while (words.length > 1 && isStyleWord(words[words.length - 1])) words.pop();
      family = words.join(" ");
    }
    const info = { family, weight: "400", stretch: "100%", italic: false, axes: [], features: {} };

    if (tables["OS/2"]) {
      const o = tables["OS/2"].off;
      info.weight = String(dv.getUint16(o + 4));
      info.stretch = ["50%", "62.5%", "75%", "87.5%", "100%", "112.5%", "125%", "150%", "200%"][dv.getUint16(o + 6) - 1] || "100%";
      info.italic = (dv.getUint16(o + 62) & 0x201) !== 0; // ITALIC or OBLIQUE bit
    }

    if (tables.fvar) {
      const o = tables.fvar.off;
      const first = o + dv.getUint16(o + 4), count = dv.getUint16(o + 8), size = dv.getUint16(o + 10);
      for (let i = 0; i < count; i++) {
        const a = first + i * size;
        const axis = {
          tag: tag4(dv, a),
          min: dv.getInt32(a + 4) / 65536,
          def: dv.getInt32(a + 8) / 65536,
          max: dv.getInt32(a + 12) / 65536,
          name: names[dv.getUint16(a + 18)] || tag4(dv, a),
        };
        info.axes.push(axis);
        if (axis.tag === "wght") info.weight = `${axis.min} ${axis.max}`;
        if (axis.tag === "wdth") info.stretch = `${axis.min}% ${axis.max}%`;
      }
    }

    for (const t of ["GSUB", "GPOS"]) {
      if (!tables[t]) continue;
      const o = tables[t].off;
      const list = o + dv.getUint16(o + 6);
      for (let i = 0, n = dv.getUint16(list); i < n; i++) {
        const rec = list + 2 + i * 6;
        const tag = tag4(dv, rec);
        const isSet = /^ss\d\d$/.test(tag), isVariant = /^cv\d\d$/.test(tag);
        if (!(tag in FEATURES) && !isSet && !isVariant) continue;
        let label = FEATURES[tag];
        if (isSet || isVariant) {
          // ssXX / cvXX may carry a UI name in their FeatureParams
          const table = list + dv.getUint16(rec + 4);
          const params = dv.getUint16(table);
          const named = params ? names[dv.getUint16(table + params + 2)] : "";
          label = named || `${isSet ? "Stylistic set" : "Character variant"} ${Number(tag.slice(2))}`;
        }
        if (!info.features[tag] || info.features[tag].startsWith("Stylistic set") || info.features[tag].startsWith("Character variant"))
          info.features[tag] = label;
      }
    }
    return info;
  } catch (e) {
    console.warn("Vault Fonts: could not read font metadata", e);
    return null;
  }
}

/** Fallback for WOFF/WOFF2 files without an OTF/TTF twin: guess from the file name. */
function guessFromName(base) {
  const n = base.toLowerCase().replace(/[\s_-]/g, "");
  const variable = /variable|\[/.test(n);
  const hit = WEIGHT_WORDS.filter(([w]) => w !== "regular" && n.includes(w)).sort((a, b) => b[0].length - a[0].length)[0];
  const words = base.replace(/\[.*\]/, "").split(/[\s_-]+/).filter(Boolean);
  while (words.length > 1 && isStyleWord(words[words.length - 1])) words.pop();
  return {
    family: words.join(" "),
    weight: variable ? "100 900" : String(hit ? hit[1] : 400),
    stretch: "100%",
    italic: /italic|oblique/.test(n),
    axes: [],
    features: {},
  };
}

const cssString = (s) => `"${s.replace(/["\\]/g, "\\$&")}"`;
const featureCss = (f) => {
  const parts = Object.entries(f || {}).map(([t, v]) => `"${t}" ${v ? 1 : 0}`);
  return parts.length ? parts.join(", ") : "normal";
};
const axesCss = (a) => {
  const parts = Object.entries(a || {}).map(([t, v]) => `"${t}" ${v}`);
  return parts.length ? parts.join(", ") : "normal";
};
const kb = (bytes) => (bytes > 1e6 ? `${(bytes / 1e6).toFixed(1)} MB` : `${Math.round(bytes / 1e3)} KB`);

/* ---------- Live Preview glyph substitution ---------- */

class GlyphWidget extends WidgetType {
  constructor(glyph) {
    super();
    this.glyph = glyph;
  }
  eq(other) {
    return other.glyph === this.glyph;
  }
  toDOM() {
    const span = document.createElement("span");
    span.className = "vf-glyph";
    span.textContent = this.glyph;
    return span;
  }
  ignoreEvent() {
    return false;
  }
}

function glyphExtension(plugin) {
  return ViewPlugin.fromClass(
    class {
      constructor(view) {
        this.decorations = this.build(view);
      }
      update(u) {
        if (u.docChanged || u.viewportChanged || u.selectionSet || u.transactions.some((t) => t.reconfigured) ||
            syntaxTree(u.startState) !== syntaxTree(u.state))
          this.decorations = this.build(u.view);
      }
      build(view) {
        const re = plugin.glyphRegex();
        if (!re) return Decoration.none;
        let live = true;
        try { live = view.state.field(editorLivePreviewField); } catch (e) { /* field missing: treat as live */ }
        if (!live) return Decoration.none;

        const builder = new RangeSetBuilder();
        const ranges = view.state.selection.ranges;
        const tree = syntaxTree(view.state);
        for (const { from, to } of view.visibleRanges) {
          const text = view.state.doc.sliceString(from, to);
          re.lastIndex = 0;
          let m;
          while ((m = re.exec(text))) {
            const start = from + m.index, end = start + m[0].length;
            // Show the raw characters while the cursor touches them, like other Live Preview markup
            if (ranges.some((r) => r.from <= end && r.to >= start)) continue;
            if (SKIP_NODES.test(tree.resolveInner(start, 1).name)) continue;
            builder.add(start, end, Decoration.replace({ widget: new GlyphWidget(plugin.glyphs[m[0]]) }));
          }
        }
        return builder.finish();
      }
    },
    { decorations: (v) => v.decorations }
  );
}

/* ---------- Plugin ---------- */

module.exports = class VaultFonts extends Plugin {
  async onload() {
    this.sources = {}; // family -> [{ key, meta, dataPath, dataExt }] found in the font folder
    this.info = {}; // family -> { features, axes } merged over its faces
    this.faces = {}; // family -> FontFace[] registered live
    this.styleEl = document.head.createEl("style", { attr: { id: "vault-fonts-css" } });
    await this.loadSettings();
    this.rebuildGlyphs();

    await this.scan();
    await this.loadFamilies(this.usedFamilies());
    this.apply();
    this.pack();

    this.registerEditorExtension(glyphExtension(this));
    this.registerMarkdownPostProcessor((el) => this.replaceGlyphsIn(el));
    this.addSettingTab(new VaultFontsSettingTab(this.app, this));
    this.addCommand({
      id: "reload-fonts",
      name: "Rescan font folder",
      callback: () => this.reload(),
    });
  }

  onunload() {
    document.body.removeClass("vault-fonts");
    this.styleEl?.remove();
    this.unloadFaces();
  }

  async loadSettings() {
    const data = (await this.loadData()) || {};
    this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
    this.settings.roles = Object.assign({}, DEFAULT_SETTINGS.roles, data.roles);
    for (const k of Object.keys(ROLES)) this.settings.roles[k] = Object.assign(DEFAULT_ROLE(), this.settings.roles[k]);
  }

  async save() {
    this.rebuildGlyphs();
    await this.loadFamilies(this.usedFamilies());
    this.apply();
    await this.saveData(this.settings);
    this.pack();
    this.app.workspace.updateOptions(); // refresh editor decorations
  }

  get folder() {
    return normalizePath(this.settings.folder || `${this.app.vault.configDir}/Fonts`);
  }

  /** Families that can be used on this device: local source files, or a copy inside the synced pack. */
  available(family) {
    return !!family && (!!this.sources[family] || !!this.settings.packed[family]);
  }

  familyNames() {
    return [...new Set([...Object.keys(this.sources), ...Object.keys(this.settings.packed)])].sort((a, b) => a.localeCompare(b));
  }

  familyInfo(family) {
    return this.info[family] || this.settings.packed[family] || null;
  }

  usedFamilies() {
    return [...new Set(Object.values(this.settings.roles).map((r) => r.family).filter((f) => this.available(f)))];
  }

  async listFonts(dir) {
    const { files, folders } = await this.app.vault.adapter.list(dir);
    const out = files.filter((f) => FORMATS[f.split(".").pop().toLowerCase()]);
    for (const d of folders) out.push(...(await this.listFonts(d)));
    return out;
  }

  async scan() {
    const adapter = this.app.vault.adapter;
    this.sources = {};
    this.info = {};
    if (!(await adapter.exists(this.folder))) return;

    // Group the formats of one face together: "Recoleta Alt Black.otf" + "RecoletaAlt Black.woff2"
    const groups = {};
    for (const path of await this.listFonts(this.folder)) {
      const file = path.split("/").pop();
      const ext = file.split(".").pop().toLowerCase();
      const base = file.slice(0, -(ext.length + 1));
      const key = path.slice(0, path.length - file.length) + base.toLowerCase().replace(/[^a-z0-9]/g, "");
      (groups[key] ||= { base, files: {} }).files[ext] = path;
    }

    for (const [key, { base, files }] of Object.entries(groups)) {
      const metaPath = files.otf || files.ttf;
      let meta = null;
      if (metaPath) {
        try { meta = parseFont(await adapter.readBinary(metaPath)); } catch (e) { console.warn(`Vault Fonts: cannot read ${metaPath}`, e); }
      }
      meta ||= guessFromName(base);
      if (!meta.family) continue;
      const dataExt = DATA_PREFERENCE.find((e) => files[e]);
      (this.sources[meta.family] ||= []).push({ key, meta, dataPath: files[dataExt], dataExt });

      const info = (this.info[meta.family] ||= { features: {}, axes: {} });
      for (const [t, l] of Object.entries(meta.features)) if (!(t in info.features)) info.features[t] = l;
      for (const a of meta.axes) if (/^[A-Z0-9]{4}$/.test(a.tag)) info.axes[a.tag] = a; // custom axes only
    }
  }

  unloadFaces() {
    for (const list of Object.values(this.faces)) for (const f of list) document.fonts.delete(f);
    this.faces = {};
  }

  async reload() {
    this.unloadFaces();
    await this.scan();
    await this.loadFamilies(this.usedFamilies());
    this.apply();
    await this.pack();
    new Notice(`Vault Fonts: ${Object.keys(this.sources).length} families in ${this.folder}`);
  }

  async loadFamilies(names) {
    await Promise.all(names.map((n) => this.loadFamily(n)));
  }

  /** Registers a family's faces from source files. Families known only from the pack are already loaded by styles.css. */
  async loadFamily(family) {
    if (this.faces[family] || !this.sources[family]) return;
    const list = (this.faces[family] = []);
    for (const face of this.sources[family]) {
      try {
        const buf = await this.app.vault.adapter.readBinary(face.dataPath);
        const ff = new FontFace(family, buf, {
          weight: face.meta.weight,
          stretch: face.meta.stretch,
          style: face.meta.italic ? "italic" : "normal",
          display: "swap",
        });
        await ff.load();
        document.fonts.add(ff);
        list.push(ff);
      } catch (e) {
        console.warn(`Vault Fonts: failed to load ${face.dataPath}`, e);
      }
    }
  }

  /**
   * Writes the families in use into styles.css so Obsidian Sync carries them to other devices.
   * Only runs where every used family has its source files; a device that only has the pack leaves it alone.
   */
  async pack() {
    if (this._packing) return (this._packAgain = true);
    this._packing = true;
    try {
      const used = this.usedFamilies();
      if (!Object.keys(this.sources).length || used.some((f) => !this.sources[f])) return;

      const adapter = this.app.vault.adapter;
      const faces = used.flatMap((f) => this.sources[f].map((face) => ({ family: f, face })));
      const stats = await Promise.all(faces.map(({ face }) => adapter.stat(face.dataPath)));
      const sig = faces.map(({ family, face }, i) => `${family}|${face.dataPath}|${stats[i]?.size}|${stats[i]?.mtime}`).join("\n");
      const target = `${this.manifest.dir}/styles.css`;
      if (sig === this.settings.packSig && (await adapter.exists(target))) return;

      const blocks = [
        "/* Vault Fonts: generated font pack. Do not edit; it is rewritten whenever the fonts in use change.",
        "   It lives in styles.css because Obsidian Sync syncs a plugin's styles.css to every device. */",
      ];
      for (const { family, face } of faces) {
        const [mime, format] = FORMATS[face.dataExt];
        const data = arrayBufferToBase64(await adapter.readBinary(face.dataPath));
        blocks.push(
          `@font-face { font-family: ${cssString(family)}; font-weight: ${face.meta.weight}; ` +
            `font-stretch: ${face.meta.stretch}; font-style: ${face.meta.italic ? "italic" : "normal"}; font-display: swap; ` +
            `src: url(data:${mime};base64,${data}) format("${format}"); }`
        );
      }
      const css = blocks.join("\n") + "\n";
      await adapter.write(target, css);

      this.settings.packed = {};
      for (const f of used) this.settings.packed[f] = { ...this.info[f], faces: this.sources[f].length };
      this.settings.packSig = sig;
      this.settings.packBytes = css.length;
      await this.saveData(this.settings);
    } finally {
      this._packing = false;
      if (this._packAgain) {
        this._packAgain = false;
        this.pack();
      }
    }
  }

  stack(role) {
    const r = this.settings.roles[role];
    return `${cssString(r.family)}, ${ROLES[role].fallback}`;
  }

  apply() {
    const { roles } = this.settings;
    const has = (k) => this.available(roles[k].family);
    const vars = [];
    const rules = [];
    const typo = (sel, r) =>
      rules.push(`${sel} { font-feature-settings: ${featureCss(r.features)}; font-variation-settings: ${axesCss(r.axes)}; }`);

    if (has("interface")) {
      vars.push(`--font-interface: ${this.stack("interface")};`);
      typo("body.vault-fonts", roles.interface);
    }
    if (has("text")) {
      vars.push(`--font-text: ${this.stack("text")};`);
      // Word-Smith sets its own editor font inline on body as --ws-font; only !important outranks that
      vars.push(`--ws-font: ${this.stack("text")} !important;`);
      typo("body.vault-fonts :is(.markdown-source-view, .markdown-rendered)", roles.text);
    }
    if (has("headings")) {
      const s = this.stack("headings");
      for (let i = 1; i <= 6; i++) vars.push(`--h${i}-font: ${s};`);
      vars.push(`--inline-title-font: ${s};`);
      typo("body.vault-fonts :is(.markdown-rendered :is(h1, h2, h3, h4, h5, h6), .HyperMD-header, .inline-title)", roles.headings);
    }
    if (has("monospace")) vars.push(`--font-monospace: ${this.stack("monospace")};`);
    // Always reset in code so text features (e.g. old-style figures) never leak into it
    typo("body.vault-fonts :is(code, pre, kbd, .cm-inline-code, .HyperMD-codeblock)", has("monospace") ? roles.monospace : {});

    this.styleEl.textContent = `${UI_CSS}\nbody.vault-fonts {\n  ${vars.join("\n  ")}\n}\n${rules.join("\n")}\n`;
    document.body.addClass("vault-fonts");
  }

  rebuildGlyphs() {
    this.glyphs = Object.assign({}, this.settings.arrows ? ARROWS : {}, this.settings.comparisons ? COMPARISONS : {});
    const keys = Object.keys(this.glyphs).sort((a, b) => b.length - a.length);
    this._glyphRe = keys.length ? new RegExp(keys.map((k) => k.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")).join("|"), "g") : null;
  }

  glyphRegex() {
    return this._glyphRe;
  }

  replaceGlyphsIn(el) {
    const re = this._glyphRe;
    if (!re) return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) =>
        n.parentElement?.closest("code, pre, kbd, .math, mjx-container, .frontmatter, script, style")
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
      re.lastIndex = 0;
      if (!re.test(n.nodeValue)) continue;
      re.lastIndex = 0;
      n.nodeValue = n.nodeValue.replace(re, (m) => this.glyphs[m]);
    }
  }
};

/* ---------- Settings ---------- */

class VaultFontsSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    this.containerEl.empty();
    this.containerEl.addClass("vault-fonts-settings");
    // Load every local family so previews render in the real font
    this.plugin.loadFamilies(Object.keys(this.plugin.sources)).then(() => this.render());
  }

  render() {
    const { containerEl, plugin } = this;
    const s = plugin.settings;
    const families = plugin.familyNames();
    containerEl.empty();

    for (const [key, role] of Object.entries(ROLES)) this.renderRole(key, role, families);

    new Setting(containerEl).setName("Typographic substitutions").setHeading();
    new Setting(containerEl)
      .setName("Arrows")
      .setDesc("Show -> <- <-> => <=> --> ==> |-> as → ← ↔ ⇒ ⇔ ⟶ ⟹ ↦ in any font. The file keeps the plain characters; Live Preview shows them raw while the cursor is on them. Skipped in code, math, links and comments.")
      .addToggle((t) => t.setValue(s.arrows).onChange(async (v) => { s.arrows = v; await plugin.save(); }));
    new Setting(containerEl)
      .setName("Comparisons")
      .setDesc("Show <= >= != as ≤ ≥ ≠.")
      .addToggle((t) => t.setValue(s.comparisons).onChange(async (v) => { s.comparisons = v; await plugin.save(); }));

    new Setting(containerEl).setName("Font library").setHeading();
    const packed = Object.keys(s.packed);
    new Setting(containerEl)
      .setName("Synced pack")
      .setDesc(
        packed.length
          ? `${packed.join(", ")} · ${kb(s.packBytes)}, stored in this plugin’s styles.css so Obsidian Sync brings it to your other devices.` +
              (s.packBytes > 5e6 ? " Over 5 MB: Obsidian Sync Standard won’t sync a file this large." : "")
          : "Fonts you assign to a role are packed into this plugin’s styles.css so they sync to your other devices."
      );
    new Setting(containerEl)
      .setName("Font folder")
      .setDesc(`Where the source font files live (.otf, .ttf, .woff, .woff2, any sub-folders). Default: ${plugin.app.vault.configDir}/Fonts`)
      .addText((t) =>
        t.setPlaceholder(`${plugin.app.vault.configDir}/Fonts`).setValue(s.folder).onChange(async (v) => {
          s.folder = v.trim();
          await plugin.saveData(s);
        })
      )
      .addButton((b) => b.setButtonText("Rescan").onClick(async () => { await plugin.reload(); this.display(); }));
  }

  renderRole(key, role, families) {
    const { containerEl, plugin } = this;
    const r = plugin.settings.roles[key];
    new Setting(containerEl).setName(role.name).setHeading();

    new Setting(containerEl)
      .setName("Font")
      .setDesc(role.desc)
      .addDropdown((d) => {
        d.addOption("", key === "headings" ? "Same as editor text" : "Obsidian default");
        for (const f of families) d.addOption(f, f);
        d.setValue(plugin.available(r.family) ? r.family : "").onChange(async (v) => {
          plugin.settings.roles[key] = { family: v, features: {}, axes: {} };
          await plugin.save();
          this.render();
        });
      });

    const info = plugin.available(r.family) && plugin.familyInfo(r.family);
    if (!info) return;

    const preview = containerEl.createDiv({ cls: `vf-preview vf-preview-${key}`, text: role.sample });
    const paint = () => {
      preview.style.fontFamily = plugin.stack(key);
      preview.style.fontFeatureSettings = featureCss(r.features);
      preview.style.fontVariationSettings = axesCss(r.axes);
    };
    paint();

    const feats = Object.entries(info.features || {}).sort(([a], [b]) => a.localeCompare(b));
    if (feats.length) {
      const wrap = containerEl.createDiv("vf-features");
      wrap.createDiv({ cls: "vf-label", text: "OpenType features" });
      const chips = wrap.createDiv("vf-chips");
      for (const [tag, label] of feats) {
        const on = () => (tag in r.features ? !!r.features[tag] : ON_BY_DEFAULT.has(tag));
        const short = label.replace(/^(ss|cv)\d+:\s*/i, "").replace(/\s*\[[^\]]*\]\s*/g, " ").trim();
        const chip = chips.createEl("button", { cls: "vf-chip", attr: { "aria-label": `${tag} · ${label}` } });
        chip.createSpan({ cls: "vf-chip-tag", text: tag });
        chip.createSpan({ text: short.length > 36 ? `${short.slice(0, 34)}…` : short });
        chip.toggleClass("is-on", on());
        chip.onclick = async () => {
          const next = !on();
          if (next === ON_BY_DEFAULT.has(tag)) delete r.features[tag];
          else r.features[tag] = next ? 1 : 0;
          chip.toggleClass("is-on", on());
          paint();
          await plugin.save();
        };
      }
    }

    for (const axis of Object.values(info.axes || {})) {
      const step = axis.max - axis.min <= 1 ? 0.05 : 1;
      new Setting(containerEl)
        .setName(`${axis.name} (${axis.tag})`)
        .setClass("vf-axis")
        .addSlider((sl) =>
          sl.setLimits(axis.min, axis.max, step).setValue(r.axes[axis.tag] ?? axis.def).setDynamicTooltip()
            .onChange(async (v) => {
              r.axes[axis.tag] = v;
              paint();
              await plugin.save();
            })
        )
        .addExtraButton((b) =>
          b.setIcon("rotate-ccw").setTooltip("Reset").onClick(async () => {
            delete r.axes[axis.tag];
            await plugin.save();
            this.render();
          })
        );
    }
  }
}

/* ---------- UI styles (styles.css is reserved for the font pack) ---------- */

const UI_CSS = `
.vault-fonts-settings .vf-preview {
  margin: var(--size-4-2) 0 var(--size-4-3);
  padding: var(--size-4-3) var(--size-4-4);
  border: 1px solid var(--background-modifier-border);
  border-radius: var(--radius-m);
  background: var(--background-primary-alt);
  color: var(--text-normal);
  font-size: 1.15em;
  line-height: 1.5;
}
.vault-fonts-settings .vf-preview-headings { font-size: 1.9em; font-weight: 600; line-height: 1.2; }
.vault-fonts-settings .vf-preview-interface { font-size: var(--font-ui-medium); }
.vault-fonts-settings .vf-preview-monospace { font-size: 0.95em; }
.vault-fonts-settings .vf-features { margin-bottom: var(--size-4-3); }
.vault-fonts-settings .vf-label { font-size: var(--font-ui-smaller); color: var(--text-muted); margin-bottom: var(--size-4-2); }
.vault-fonts-settings .vf-chips { display: flex; flex-wrap: wrap; gap: var(--size-4-1); }
.vault-fonts-settings .vf-chip {
  height: auto;
  padding: var(--size-2-1) var(--size-4-2);
  gap: var(--size-2-3);
  font-size: var(--font-ui-smaller);
  border-radius: var(--radius-l);
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--background-modifier-border);
  color: var(--text-muted);
}
.vault-fonts-settings .vf-chip-tag { font-family: var(--font-monospace); opacity: 0.7; }
.vault-fonts-settings .vf-chip.is-on {
  background: var(--interactive-accent);
  border-color: var(--interactive-accent);
  color: var(--text-on-accent);
}
.vault-fonts-settings .vf-axis { padding-top: var(--size-4-1); }
.vf-glyph { font-variant-ligatures: none; }
`;

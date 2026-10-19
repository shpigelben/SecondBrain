const { Plugin, moment } = require("obsidian");

const isTask = (fm) =>
  fm && (fm.type === "task" || (Array.isArray(fm.type) && fm.type.includes("task")));

module.exports = class TaskDoneDate extends Plugin {
  onload() {
    this.registerEvent(
      this.app.metadataCache.on("changed", (file, _data, cache) => this.sync(file, cache))
    );
    // Catch up on toggles made while the plugin wasn't running (e.g. on another device).
    this.app.workspace.onLayoutReady(() => {
      for (const file of this.app.vault.getMarkdownFiles()) {
        this.sync(file, this.app.metadataCache.getFileCache(file));
      }
    });
  }

  sync(file, cache) {
    const fm = cache?.frontmatter;
    if (!isTask(fm)) return;
    const done = fm.done === true;
    const hasDate = fm.done_date != null && fm.done_date !== "";
    if (done === hasDate) return;
    this.app.fileManager.processFrontMatter(file, (f) => {
      if (f.done === true) {
        if (!f.done_date) f.done_date = moment().format("YYYY-MM-DD");
      } else {
        f.done_date = null;
      }
    });
  }
};

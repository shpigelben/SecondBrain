/*
   Minimal Base Embeds
   Bases embedded in notes, and base files opened in their own tab,
   get a minimal header and a "New note" row underneath them.
   - The header shows the base's name on the left.
   - A "..." toggle in the header shows or hides the toolbar (view
     menu, result count, sort, filter, properties, search).
   - The row runs the toolbar's own New action, and its popup opens
     at the row. The toolbar "+" stays in the page but invisible,
     because Obsidian closes the popup when that button isn't shown.
   The hiding and styling live in styles.css.
*/

const { Plugin, setIcon, setTooltip } = require("obsidian");

const EMBED = '.workspace-leaf-content[data-type="markdown"] :is(.bases-embed, .block-language-base)';
const FILE_VIEW = '.workspace-leaf-content[data-type="bases"] .view-content';
const ROOT = `${EMBED}, ${FILE_VIEW}`;
const NEW_ITEM = ".bases-toolbar-new-item-menu";
const TOGGLE = "minimal-embed-toggle";
const TITLE = "minimal-embed-title";
const ROW = "minimal-embed-add-row";
const OPEN = "is-tools-open";

module.exports = class MinimalBaseEmbeds extends Plugin {
    onload() {
        this.app.workspace.onLayoutReady(() => {
            this.enhance();
            const observer = new MutationObserver(() => this.queueEnhance());
            observer.observe(this.app.workspace.containerEl, { childList: true, subtree: true });
            this.register(() => observer.disconnect());
        });
    }

    onunload() {
        document.querySelectorAll(`.${TOGGLE}, .${TITLE}, .${ROW}`).forEach((el) => el.remove());
        document.querySelectorAll(".bases-toolbar." + OPEN).forEach((toolbar) => toolbar.removeClass(OPEN));
        document.querySelectorAll(NEW_ITEM).forEach((menu) => this.unanchor(menu));
    }

    queueEnhance() {
        if (this.queued) return;
        this.queued = true;
        requestAnimationFrame(() => {
            this.queued = false;
            this.enhance();
        });
    }

    enhance() {
        document.querySelectorAll(EMBED).forEach((embed) => this.enhanceBase(embed, this.embedName(embed)));
        this.app.workspace.getLeavesOfType("bases").forEach((leaf) => {
            const root = leaf.view?.contentEl;
            if (root) this.enhanceBase(root, leaf.view.file?.basename ?? null);
        });
    }

    enhanceBase(root, name) {
        const toolbar = root.querySelector(".bases-toolbar");
        if (!toolbar || toolbar.closest(ROOT) !== root) return;
        if (!toolbar.querySelector(":scope > ." + TOGGLE)) {
            toolbar.appendChild(this.createToggle(toolbar));
        }

        let title = toolbar.querySelector(":scope > ." + TITLE);
        if (name && !title) title = toolbar.createDiv(TITLE);
        if (title && title.textContent !== name) title.setText(name ?? "");

        const view = root.querySelector(".bases-view");
        const menu = root.querySelector(NEW_ITEM);
        if (!view || !menu) return;
        let row = view.nextElementSibling;
        if (!row?.classList.contains(ROW)) {
            row = this.createRow();
            view.after(row);
        }
        if (menu.minimalEmbedRow !== row) this.anchor(menu, row);
    }

    // "Misc/Bases/Fleeting%20Notes.base#View" -> "Fleeting Notes".
    // Bases written as ```base code blocks have no file, so no name.
    embedName(embed) {
        const src = embed.getAttribute("src");
        if (!src) return null;
        let path = src.split("#")[0];
        try {
            path = decodeURIComponent(path);
        } catch (e) {}
        return path.split("/").pop().replace(/\.base$/i, "") || null;
    }

    createToggle(toolbar) {
        const item = createDiv("bases-toolbar-item " + TOGGLE);
        const button = item.createDiv({ cls: "text-icon-button", attr: { role: "button", tabindex: "0" } });
        setIcon(button.createSpan("text-button-icon"), "ellipsis");

        const update = () => {
            const open = toolbar.hasClass(OPEN);
            button.toggleClass("is-active", open);
            setTooltip(button, open ? "Hide toolbar" : "Show toolbar");
        };
        const toggle = (evt) => {
            evt.preventDefault();
            toolbar.toggleClass(OPEN, !toolbar.hasClass(OPEN));
            update();
        };

        button.addEventListener("click", toggle);
        button.addEventListener("keydown", (evt) => {
            if (evt.key === "Enter" || evt.key === " ") toggle(evt);
        });
        update();
        return item;
    }

    createRow() {
        const row = createDiv({
            cls: ROW,
            attr: { role: "button", tabindex: "0", "aria-label": "New note" },
        });
        setIcon(row.createSpan(ROW + "-icon"), "plus");
        row.createSpan({ cls: ROW + "-label", text: "New note" });

        const add = (evt) => {
            // Keeps Obsidian's "click outside closes the popup" handler out of it.
            evt.preventDefault();
            row.closest(ROOT)?.querySelector(NEW_ITEM + " .text-icon-button")?.click();
        };
        row.addEventListener("click", add);
        row.addEventListener("keydown", (evt) => {
            if (evt.key === "Enter" || evt.key === " ") add(evt);
        });
        return row;
    }

    // Obsidian places the New popup by measuring the toolbar's New item.
    // Have that item report the row's size and position instead.
    anchor(menu, row) {
        menu.getBoundingClientRect = () => row.getBoundingClientRect();
        Object.defineProperty(menu, "offsetWidth", { configurable: true, get: () => row.offsetWidth });
        Object.defineProperty(menu, "offsetHeight", { configurable: true, get: () => row.offsetHeight });
        menu.minimalEmbedRow = row;
    }

    unanchor(menu) {
        delete menu.getBoundingClientRect;
        delete menu.offsetWidth;
        delete menu.offsetHeight;
        delete menu.minimalEmbedRow;
    }
};

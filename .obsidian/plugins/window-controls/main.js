/*
 * Window Controls
 * Hides the native macOS window buttons and draws DOM buttons in their place,
 * so they can be styled from a CSS snippet (snippets/window-controls.css).
 */
const { Plugin, Platform, setIcon, debounce } = require("obsidian");

const OFFSCREEN = { x: -100, y: -100 };

const BUTTONS = [
	{ name: "close", icon: "x", onClick: (bw) => bw.close() },
	{ name: "minimize", icon: "minus", onClick: (bw) => bw.minimize() },
	{
		// Like macOS: click toggles full screen, ⌥-click zooms
		name: "zoom",
		icon: "maximize-2",
		onClick: (bw, evt) => {
			if (evt.altKey) bw.isMaximized() ? bw.unmaximize() : bw.maximize();
			else bw.setFullScreen(!bw.isFullScreen());
		},
	},
];

module.exports = class WindowControls extends Plugin {
	onload() {
		if (!Platform.isMacOS) return;
		this.windows = new Map();
		this.setupWindow(window);
		this.registerEvent(this.app.workspace.on("window-open", (_, win) => this.setupWindow(win)));
		this.registerEvent(this.app.workspace.on("window-close", (_, win) => this.teardownWindow(win)));
		// Obsidian repositions the native buttons on some layout changes, so hide them again
		const syncAll = debounce(() => this.windows.forEach((state) => state.sync()), 50, true);
		this.registerEvent(this.app.workspace.on("layout-change", syncAll));
	}

	onunload() {
		if (!this.windows) return;
		for (const win of [...this.windows.keys()]) this.teardownWindow(win);
	}

	getBrowserWindow(win) {
		const electron = win === window ? require("electron") : win.require?.("electron");
		return electron?.remote?.getCurrentWindow();
	}

	setNativeVisible(state, visible) {
		const { bw, nativePosition } = state;
		try {
			if (bw.isDestroyed()) return;
			bw.setWindowButtonVisibility(visible);
			bw.setWindowButtonPosition(visible ? nativePosition : OFFSCREEN);
		} catch (e) {
			console.error("Window Controls: could not update native buttons", e);
		}
	}

	setupWindow(win) {
		let bw;
		try {
			bw = this.getBrowserWindow(win);
		} catch (e) {
			console.error("Window Controls: no access to the Electron window", e);
		}
		if (!bw) return;

		const doc = win.document;
		const container = doc.createElement("div");
		container.className = "window-controls";
		for (const { name, icon, onClick } of BUTTONS) {
			const button = doc.createElement("div");
			button.className = `window-control window-control-${name}`;
			button.setAttribute("role", "button");
			setIcon(button, icon);
			button.addEventListener("click", (evt) => onClick(bw, evt));
			container.appendChild(button);
		}
		doc.body.appendChild(container);

		const state = { bw, container, nativePosition: bw.getWindowButtonPosition?.() ?? null };
		state.sync = () => {
			const fullScreen = bw.isFullScreen();
			container.classList.toggle("is-fullscreen", fullScreen);
			// In full screen the native buttons live in the hover-reveal menu bar, so let macOS show them there
			this.setNativeVisible(state, fullScreen);
		};
		const setFocused = (focused) => container.classList.toggle("is-blurred", !focused);

		this.registerDomEvent(win, "resize", debounce(state.sync, 150, true));
		this.registerDomEvent(win, "focus", () => {
			setFocused(true);
			state.sync();
		});
		this.registerDomEvent(win, "blur", () => {
			setFocused(false);
			state.sync();
		});

		setFocused(doc.hasFocus());
		state.sync();
		this.windows.set(win, state);
	}

	teardownWindow(win) {
		const state = this.windows.get(win);
		if (!state) return;
		this.windows.delete(win);
		state.container.remove();
		this.setNativeVisible(state, true);
	}
};

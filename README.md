# CodePen React

A fast, in-browser HTML/CSS/JS playground inspired by [CodePen](https://codepen.io/) — write code in three live editors and see the result update instantly in a sandboxed preview, complete with a captured console panel.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**🔗 [Live demo — codepen.samueljames.dev](https://codepen.samueljames.dev/)**

## ✨ Features

- **🔴 Live preview** — edits are debounced and rendered in a sandboxed `<iframe>` within ~250ms
- **📝 Three editors** — HTML, CSS and JavaScript, powered by CodeMirror 6 with real search/replace (`Ctrl/Cmd+F`), multi-cursor (`Alt`+click, `Ctrl/Cmd+D`), and undo/redo built in
- **🖱️ Resizable panels** — drag any divider to resize (desktop/tablet, ≥760px); layouts persist across reloads, and double-clicking a divider resets it
- **⌘ Command palette** — `Ctrl/Cmd+K` opens a searchable list of every action (reset, format, toggle panels, clear console, open repo) — see the Keyboard Shortcuts section below
- **🪄 Format Document** — one-click Prettier formatting per language or all at once; Prettier itself is only downloaded the first time you use it (code-split, not in the initial bundle)
- **🖥️ Console panel** — `console.log/info/warn/error` calls from your pen are captured and displayed live, without polluting the host page's own console
- **🎉 Seeded demo pen** — first-time visitors see a real, working pen (animated SVG checkbox toggles) instead of a blank screen, and can jump back to it any time with **Reset**
- **💾 Local persistence** — your HTML/CSS/JS is saved to `localStorage` and restored on reload
- **📱 Responsive layout** — resizable panels on desktop/tablet; below 760px, editors and preview/console stack into a normal scrolling page instead
- **🛡️ Sandboxed execution** — the preview iframe runs with `sandbox="allow-scripts"` only (no `allow-same-origin`), so pen code can't reach the parent page, cookies, or local storage
- **♿ Accessible controls** — icon-only buttons carry `aria-label`s, panel expand/collapse state is exposed via `aria-expanded`, and the command palette traps focus and closes on `Escape`
- **🧯 Error boundary** — a rendering crash shows a recoverable error screen instead of a blank app

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| - | - |
| `Ctrl/Cmd+K` | Open the command palette |
| `Ctrl/Cmd+Alt+H` / `+C` / `+J` | Toggle the HTML / CSS / JS panel |
| `Ctrl/Cmd+Alt+F` | Format all three editors |
| `Ctrl/Cmd+F` (editor focused) | Find / replace |
| `Ctrl/Cmd+D` (editor focused) | Select next occurrence (multi-cursor) |
| `Alt`+click (editor focused) | Add a cursor |
| `Ctrl/Cmd+Z` / `Ctrl/Cmd+Shift+Z` | Undo / redo |

## 🛠️ Built With

- **[React 18](https://react.dev/)** — UI layer, rendered via `createRoot`
- **[CodeMirror 6](https://codemirror.net/)** via `@uiw/react-codemirror` — the code editors, with `@codemirror/lang-*` for syntax and `@codemirror/commands`/`@codemirror/search` for editing/search keymaps
- **[react-resizable-panels](https://github.com/bvaughn/react-resizable-panels)** — drag-to-resize layout with persisted sizing
- **[cmdk](https://cmdk.paco.me/)** — the command palette
- **[Prettier](https://prettier.io/)** (standalone, dynamically imported) — Format Document
- **[Font Awesome 6](https://fontawesome.com/)** — icons
- **Create React App / `react-scripts`** — build tooling
- Custom `useLocalStorage` hook for persistence, `useIsDesktop` for the resizable/stacked layout switch, and a `postMessage`-based bridge for the console panel

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/samuel7james/codepen-react.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd codepen-react
   ```

3. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**

   Visit `http://localhost:3000` — you'll immediately see a live animated demo pen running.

## 💡 How It Works

1. **Code input** — write HTML, CSS and JavaScript in three independent CodeMirror editors
2. **Debounced compile** — 250ms after you stop typing, the three sources are assembled into a single HTML document
3. **Sandboxed preview** — that document is rendered in an `<iframe sandbox="allow-scripts">`, isolating pen code from the host page
4. **Console bridge** — a small shim injected into the iframe overrides `console.log/info/warn/error` and forwards calls to the parent via `postMessage`, which renders them in the console panel
5. **Persistence** — every keystroke is mirrored to `localStorage` under the `codepen-react-` prefix, so your pen survives a refresh

## 🎮 Usage

- **HTML / CSS / JS panels** — edit freely; use the corner button (or `Ctrl/Cmd+Alt+H/C/J`) to collapse a panel you're not focused on
- **Drag to resize** — on desktop/tablet, drag any divider between panels; double-click a divider to reset it to its default size
- **Command palette** — `Ctrl/Cmd+K` for reset, format, panel toggles, clearing the console, or jumping to the repo
- **Preview pane** — see your pen rendered live
- **Console pane** — inspect `console.*` output from your pen, or clear it with the trash icon
- **Reset** — restores the original demo pen (with a confirmation, since it overwrites your saved code)

## 🔧 Customization

- Swap the CodeMirror theme in [Editor.js](src/components/Editor.js) (`materialDark` from `@uiw/codemirror-theme-material`)
- Change the seeded first-run pen in [demoPen.js](src/demoPen.js)
- Adjust the debounce delay or captured log limit via `COMPILE_DELAY` / `MAX_LOGS` in [App.js](src/components/App.js)
- Adjust panel min/collapsed sizes on the `<Panel>` elements in [App.js](src/components/App.js), or the resizable/stacked breakpoint via `DESKTOP_BREAKPOINT`
- Add or change command palette actions in [CommandPalette.js](src/components/CommandPalette.js)
- Re-theme accent colors (HTML/CSS/JS) via the CSS custom properties at the top of [index.css](src/index.css)

## 🤝 Contributing

Contributions are welcome — feel free to open an issue or a PR.

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the original [CodePen](https://codepen.io/) platform. The header mark is an original hexagonal wireframe icon in the spirit of CodePen's logo, not a reproduction of their trademarked artwork.
- The seeded demo pen, "Silky smooth checkbox toggles," is by [jdillon](https://codepen.io/jdillon/pen/PoLBVmV) on CodePen, reproduced here with attribution as a real-world example of the playground running third-party code (via [SVG.js](https://svgjs.dev/)).

⭐ **If you found this project helpful, please give it a star!** ⭐

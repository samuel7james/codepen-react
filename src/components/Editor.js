import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { materialDark } from "@uiw/codemirror-theme-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "../icons";

// basicSetup (on by default) already covers line numbers, undo/redo,
// bracket matching, and the search/multi-cursor keymaps (Mod-f, Mod-d,
// Alt+click) -- no custom keymap wiring needed for those.
const LANGUAGE_EXTENSIONS = {
  html: [html()],
  css: [css()],
  javascript: [javascript()],
};

function Editor({ id, language, displayName, value, onChange, accent, collapsed, onToggleCollapse }) {
  return (
    <div className={`editor-container editor-container--${accent} ${collapsed ? "collapsed" : ""}`}>
      <div className="editor-title">
        <span className="editor-title-label">{displayName}</span>
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => onToggleCollapse(id)}
          aria-label={collapsed ? `Expand ${displayName} editor` : `Collapse ${displayName} editor`}
          aria-expanded={!collapsed}
        >
          <FontAwesomeIcon icon={collapsed ? faExpandAlt : faCompressAlt} />
        </button>
      </div>
      <CodeMirror
        value={value}
        onChange={onChange}
        theme={materialDark}
        extensions={LANGUAGE_EXTENSIONS[language]}
        height="100%"
        className="code-mirror-wrapper"
      />
    </div>
  );
}

export default React.memo(Editor);

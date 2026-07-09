import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faGithub, faMagnifyingGlass } from "../icons";

const MOD_KEY = navigator.platform?.toUpperCase().includes("MAC") ? "⌘" : "Ctrl";

function Header({ onReset, onOpenPalette }) {
  return (
    <header className="app-header">
      <div className="brand">
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" className="brand-logo" width="28" height="28" />
        <span className="brand-name">CodePen React</span>
        <span className="live-badge" aria-hidden="true">
          <span className="live-dot" /> live
        </span>
      </div>
      <div className="header-actions">
        <button
          type="button"
          className="header-btn command-palette-trigger"
          onClick={onOpenPalette}
          title={`Command palette (${MOD_KEY}+K)`}
          aria-label="Open command palette"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className="btn-label">Commands</span>
          <kbd className="shortcut-hint">{MOD_KEY}K</kbd>
        </button>
        <button
          type="button"
          className="header-btn"
          onClick={onReset}
          title="Reset to the demo pen"
          aria-label="Reset to the demo pen"
        >
          <FontAwesomeIcon icon={faArrowRotateLeft} /> <span className="btn-label">Reset</span>
        </button>
        <a
          className="header-btn"
          href="https://github.com/samuel7james/codepen-react"
          target="_blank"
          rel="noreferrer"
          title="View source on GitHub"
          aria-label="View source on GitHub"
        >
          <FontAwesomeIcon icon={faGithub} /> <span className="btn-label">GitHub</span>
        </a>
      </div>
    </header>
  );
}

export default React.memo(Header);

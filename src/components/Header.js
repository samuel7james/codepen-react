import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faGithub } from "../icons";

function Header({ onReset }) {
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
        <button type="button" className="header-btn" onClick={onReset} title="Reset to the demo pen">
          <FontAwesomeIcon icon={faArrowRotateLeft} /> Reset
        </button>
        <a
          className="header-btn"
          href="https://github.com/samuel7james/codepen-react"
          target="_blank"
          rel="noreferrer"
          title="View source on GitHub"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>
    </header>
  );
}

export default React.memo(Header);

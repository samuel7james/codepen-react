import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "../icons";

function ConsolePanel({ logs, onClear }) {
  return (
    <div className="console-pane">
      <div className="console-header">
        <span>Console</span>
        <button
          type="button"
          className="console-clear-btn"
          onClick={onClear}
          title="Clear console"
          disabled={logs.length === 0}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="console-body">
        {logs.length === 0 ? (
          <div className="console-empty">console.log() output from your pen will show up here</div>
        ) : (
          logs.map((entry) => (
            <div key={entry.id} className={`console-line console-${entry.level}`}>
              {entry.args.join(" ")}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default React.memo(ConsolePanel);

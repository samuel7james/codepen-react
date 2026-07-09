import React, { useCallback, useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "../icons";

const EDITOR_OPTIONS = {
  lineWrapping: true,
  lint: true,
  theme: "material",
  lineNumbers: true,
};

function Editor({ language, displayName, value, onChange, accent }) {
  const [open, setOpen] = useState(true);

  const handleChange = useCallback(
    (editor, data, newValue) => {
      onChange(newValue);
    },
    [onChange]
  );

  const toggleOpen = useCallback(() => setOpen((prevOpen) => !prevOpen), []);

  return (
    <div className={`editor-container editor-container--${accent} ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={toggleOpen}
          aria-label={open ? `Collapse ${displayName} editor` : `Expand ${displayName} editor`}
          aria-expanded={open}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{ ...EDITOR_OPTIONS, mode: language }}
      />
    </div>
  );
}

export default React.memo(Editor);

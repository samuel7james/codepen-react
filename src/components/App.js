import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Editor from "./Editor";
import Header from "./Header";
import ConsolePanel from "./ConsolePanel";
import useLocalStorage from "../hooks/useLocalStorage";
import consoleShim from "../consoleShim";
import { demoHtml, demoCss, demoJs, demoExternalJs } from "../demoPen";

const COMPILE_DELAY = 250;
const MAX_LOGS = 200;

// Loaded synchronously before the pen's own script, matching CodePen's
// "external script" pen setting (this demo pen depends on SVG.js).
const EXTERNAL_SCRIPT_TAGS = demoExternalJs.map((src) => `<script src="${src}"></script>`).join("\n    ");

function buildDocument(html, css, js) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>${css}</style>
    ${EXTERNAL_SCRIPT_TAGS}
  </head>
  <body>
    ${html}
    ${consoleShim}
    <script>${js}</script>
  </body>
</html>`;
}

function App() {
  const [html, setHtml] = useLocalStorage("html", demoHtml);
  const [css, setCss] = useLocalStorage("css", demoCss);
  const [js, setJs] = useLocalStorage("js", demoJs);
  const [srcDoc, setSrcDoc] = useState("");
  const [logs, setLogs] = useState([]);
  const iframeRef = useRef(null);
  const nextLogId = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogs([]);
      setSrcDoc(buildDocument(html, css, js));
    }, COMPILE_DELAY);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  useEffect(() => {
    function handleMessage(event) {
      if (event.source !== iframeRef.current?.contentWindow) return;
      if (!event.data || event.data.source !== "codepen-react-console") return;

      setLogs((prevLogs) => {
        const next = [...prevLogs, { id: nextLogId.current++, level: event.data.level, args: event.data.args }];
        return next.length > MAX_LOGS ? next.slice(next.length - MAX_LOGS) : next;
      });
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleReset = useCallback(() => {
    if (!window.confirm("Reset the editors to the demo pen? Your current code will be lost.")) return;
    setHtml(demoHtml);
    setCss(demoCss);
    setJs(demoJs);
  }, [setHtml, setCss, setJs]);

  const handleClearLogs = useCallback(() => setLogs([]), []);

  const editors = useMemo(
    () => [
      { language: "xml", displayName: "HTML", value: html, onChange: setHtml, accent: "html" },
      { language: "css", displayName: "CSS", value: css, onChange: setCss, accent: "css" },
      { language: "javascript", displayName: "JS", value: js, onChange: setJs, accent: "js" },
    ],
    [html, css, js, setHtml, setCss, setJs]
  );

  return (
    <>
      <Header onReset={handleReset} />
      <main className="playground">
        <div className="pane top-pane">
          {editors.map((editor) => (
            <Editor key={editor.displayName} {...editor} />
          ))}
        </div>
        <div className="pane bottom-pane">
          <div className="preview-pane">
            <iframe
              ref={iframeRef}
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </div>
          <ConsolePanel logs={logs} onClear={handleClearLogs} />
        </div>
      </main>
    </>
  );
}

export default App;

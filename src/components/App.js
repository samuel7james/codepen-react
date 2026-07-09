import React, { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Group, Panel, Separator, usePanelRef, useDefaultLayout } from "react-resizable-panels";
import Editor from "./Editor";
import Header from "./Header";
import ConsolePanel from "./ConsolePanel";
import useLocalStorage from "../hooks/useLocalStorage";
import useIsDesktop from "../hooks/useIsDesktop";
import consoleShim from "../consoleShim";
import { formatCode } from "../format";
import { demoHtml, demoCss, demoJs, demoExternalJs } from "../demoPen";

// The command palette (and cmdk) is only needed once someone actually
// opens it, so it's code-split out of the main bundle.
const CommandPalette = lazy(() => import("./CommandPalette"));

const COMPILE_DELAY = 250;
const MAX_LOGS = 200;
const DESKTOP_BREAKPOINT = 760;

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
  const [collapsedPanels, setCollapsedPanels] = useState({ html: false, css: false, js: false });
  const [paletteOpen, setPaletteOpen] = useState(false);
  // Stays true once the palette has been opened for the first time, so
  // closing it afterward keeps it mounted -- required for the exit
  // (closing) animation to play instead of the component just vanishing.
  const [paletteMounted, setPaletteMounted] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const iframeRef = useRef(null);
  const nextLogId = useRef(0);
  const isDesktop = useIsDesktop(DESKTOP_BREAKPOINT);

  const htmlPanelRef = usePanelRef();
  const cssPanelRef = usePanelRef();
  const jsPanelRef = usePanelRef();
  const panelRefsByKey = useMemo(
    () => ({ html: htmlPanelRef, css: cssPanelRef, js: jsPanelRef }),
    [htmlPanelRef, cssPanelRef, jsPanelRef]
  );

  const outerLayout = useDefaultLayout({ id: "cpr-outer", panelIds: ["editors", "bottom"] });
  const editorsLayout = useDefaultLayout({ id: "cpr-editors", panelIds: ["html", "css", "js"] });
  const bottomLayout = useDefaultLayout({ id: "cpr-bottom", panelIds: ["preview", "console"] });

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

  const openPalette = useCallback(() => setPaletteOpen(true), []);

  useEffect(() => {
    if (paletteOpen) setPaletteMounted(true);
  }, [paletteOpen]);

  // Panel drag is driven by the library setting flex-grow/flex-basis
  // inline on every pointer move; a CSS transition on those properties
  // gives collapse/expand/reset a nice snap, but if left on during an
  // active drag it fights the pointer with a laggy trailing animation.
  // Suppress it for the duration of any pointer-driven resize.
  const startResizing = useCallback(() => setIsResizing(true), []);

  useEffect(() => {
    if (!isResizing) return undefined;
    const stopResizing = () => setIsResizing(false);
    window.addEventListener("pointerup", stopResizing);
    window.addEventListener("pointercancel", stopResizing);
    return () => {
      window.removeEventListener("pointerup", stopResizing);
      window.removeEventListener("pointercancel", stopResizing);
    };
  }, [isResizing]);

  const toggleCollapse = useCallback(
    (key) => {
      if (isDesktop) {
        const panel = panelRefsByKey[key]?.current;
        if (!panel) return;
        if (panel.isCollapsed()) panel.expand();
        else panel.collapse();
      } else {
        setCollapsedPanels((prev) => ({ ...prev, [key]: !prev[key] }));
      }
    },
    [isDesktop, panelRefsByKey]
  );

  const syncCollapsedFromPanel = useCallback(
    (key) => () => {
      const panel = panelRefsByKey[key]?.current;
      if (!panel) return;
      setCollapsedPanels((prev) =>
        prev[key] === panel.isCollapsed() ? prev : { ...prev, [key]: panel.isCollapsed() }
      );
    },
    [panelRefsByKey]
  );

  const handleFormat = useCallback(
    async (target) => {
      const sources = { html: [html, setHtml], css: [css, setCss], javascript: [js, setJs] };
      const languages = target === "all" ? Object.keys(sources) : [target];

      const results = await Promise.allSettled(languages.map((lang) => formatCode(lang, sources[lang][0])));

      const failures = [];
      results.forEach((result, index) => {
        const lang = languages[index];
        if (result.status === "fulfilled") {
          sources[lang][1](result.value);
        } else {
          failures.push(`${lang}: ${result.reason.message}`);
        }
      });

      if (failures.length) throw new Error(failures.join("; "));
    },
    [html, css, js, setHtml, setCss, setJs]
  );

  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key.toLowerCase();
      const mod = event.metaKey || event.ctrlKey;
      if (!mod) return;

      if (!event.altKey && key === "k") {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
        return;
      }

      if (event.altKey) {
        if (key === "h") {
          event.preventDefault();
          toggleCollapse("html");
        } else if (key === "c") {
          event.preventDefault();
          toggleCollapse("css");
        } else if (key === "j") {
          event.preventDefault();
          toggleCollapse("js");
        } else if (key === "f") {
          event.preventDefault();
          handleFormat("all").catch((err) => window.alert(`Couldn't format: ${err.message}`));
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleCollapse, handleFormat]);

  const editors = useMemo(
    () => [
      { id: "html", language: "html", displayName: "HTML", value: html, onChange: setHtml, accent: "html" },
      { id: "css", language: "css", displayName: "CSS", value: css, onChange: setCss, accent: "css" },
      { id: "js", language: "javascript", displayName: "JS", value: js, onChange: setJs, accent: "js" },
    ],
    [html, css, js, setHtml, setCss, setJs]
  );

  const preview = (
    <iframe
      ref={iframeRef}
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
    />
  );

  return (
    <>
      <Header onReset={handleReset} onOpenPalette={openPalette} />
      <main className={`playground${isResizing ? " is-resizing" : ""}`}>
        {isDesktop ? (
          <Group orientation="vertical" id="cpr-outer" className="resizable-outer-group" {...outerLayout}>
            <Panel id="editors" minSize="20%">
              <Group orientation="horizontal" id="cpr-editors" className="resizable-editor-group" {...editorsLayout}>
                {editors.map((editor, index) => (
                  <React.Fragment key={editor.id}>
                    {index > 0 && (
                      <Separator
                        className="resize-handle resize-handle--vertical"
                        onPointerDown={startResizing}
                      />
                    )}
                    <Panel
                      id={editor.id}
                      panelRef={panelRefsByKey[editor.id]}
                      collapsible
                      collapsedSize="88px"
                      minSize="15%"
                      onResize={syncCollapsedFromPanel(editor.id)}
                      className="resizable-panel"
                    >
                      <Editor {...editor} collapsed={collapsedPanels[editor.id]} onToggleCollapse={toggleCollapse} />
                    </Panel>
                  </React.Fragment>
                ))}
              </Group>
            </Panel>
            <Separator className="resize-handle resize-handle--horizontal" onPointerDown={startResizing} />
            <Panel id="bottom" minSize="20%">
              <Group orientation="horizontal" id="cpr-bottom" className="resizable-bottom-group" {...bottomLayout}>
                <Panel id="preview" minSize="30%" className="resizable-panel">
                  <div className="preview-pane">{preview}</div>
                </Panel>
                <Separator className="resize-handle resize-handle--vertical" onPointerDown={startResizing} />
                <Panel id="console" minSize="15%" className="resizable-panel">
                  <ConsolePanel logs={logs} onClear={handleClearLogs} />
                </Panel>
              </Group>
            </Panel>
          </Group>
        ) : (
          <>
            <div className="pane top-pane">
              {editors.map((editor) => (
                <Editor
                  key={editor.id}
                  {...editor}
                  collapsed={collapsedPanels[editor.id]}
                  onToggleCollapse={toggleCollapse}
                />
              ))}
            </div>
            <div className="pane bottom-pane">
              <div className="preview-pane">{preview}</div>
              <ConsolePanel logs={logs} onClear={handleClearLogs} />
            </div>
          </>
        )}
      </main>
      {paletteMounted && (
        <Suspense fallback={null}>
          <CommandPalette
            open={paletteOpen}
            onOpenChange={setPaletteOpen}
            onReset={handleReset}
            collapsedPanels={collapsedPanels}
            onToggleCollapse={toggleCollapse}
            onClearLogs={handleClearLogs}
            onFormat={handleFormat}
          />
        </Suspense>
      )}
    </>
  );
}

export default App;

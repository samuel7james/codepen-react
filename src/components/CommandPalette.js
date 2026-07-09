import React, { useCallback, useState } from "react";
import { CommandDialog, Command } from "cmdk";

const GITHUB_URL = "https://github.com/samuel7james/codepen-react";

function collapseLabel(displayName, collapsed) {
  return collapsed ? `Expand ${displayName} Panel` : `Collapse ${displayName} Panel`;
}

function CommandPalette({ open, onOpenChange, onReset, collapsedPanels, onToggleCollapse, onClearLogs, onFormat }) {
  const [formatting, setFormatting] = useState(false);

  const runFormat = useCallback(
    async (language) => {
      setFormatting(true);
      try {
        await onFormat(language);
      } catch (err) {
        window.alert(`Couldn't format: ${err.message}`);
      } finally {
        setFormatting(false);
      }
    },
    [onFormat]
  );

  const run = useCallback(
    (action) => {
      onOpenChange(false);
      action();
    },
    [onOpenChange]
  );

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      className="command-palette"
      overlayClassName="command-palette-overlay"
      contentClassName="command-palette-content"
    >
      <Command.Input autoFocus placeholder="Type a command..." className="command-palette-input" />
      <Command.List className="command-palette-list">
        <Command.Empty className="command-palette-empty">No matching commands.</Command.Empty>

        <Command.Group heading="Pen">
          <Command.Item className="command-palette-item" onSelect={() => run(onReset)}>
            Reset to Demo Pen
          </Command.Item>
          <Command.Item className="command-palette-item" onSelect={() => run(onClearLogs)}>
            Clear Console
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Panels">
          <Command.Item className="command-palette-item" onSelect={() => run(() => onToggleCollapse("html"))}>
            {collapseLabel("HTML", collapsedPanels.html)}
          </Command.Item>
          <Command.Item className="command-palette-item" onSelect={() => run(() => onToggleCollapse("css"))}>
            {collapseLabel("CSS", collapsedPanels.css)}
          </Command.Item>
          <Command.Item className="command-palette-item" onSelect={() => run(() => onToggleCollapse("js"))}>
            {collapseLabel("JS", collapsedPanels.js)}
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Format">
          <Command.Item
            className="command-palette-item"
            disabled={formatting}
            onSelect={() => run(() => runFormat("all"))}
          >
            Format All
          </Command.Item>
          <Command.Item
            className="command-palette-item"
            disabled={formatting}
            onSelect={() => run(() => runFormat("html"))}
          >
            Format HTML
          </Command.Item>
          <Command.Item
            className="command-palette-item"
            disabled={formatting}
            onSelect={() => run(() => runFormat("css"))}
          >
            Format CSS
          </Command.Item>
          <Command.Item
            className="command-palette-item"
            disabled={formatting}
            onSelect={() => run(() => runFormat("javascript"))}
          >
            Format JavaScript
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Links">
          <Command.Item
            className="command-palette-item"
            onSelect={() => run(() => window.open(GITHUB_URL, "_blank", "noreferrer"))}
          >
            Open GitHub Repository
          </Command.Item>
        </Command.Group>
      </Command.List>
    </CommandDialog>
  );
}

export default React.memo(CommandPalette);

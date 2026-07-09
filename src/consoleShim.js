// Injected into the preview iframe to forward console output to the parent
// window via postMessage, since the sandboxed iframe has no shared origin.
const consoleShim = `<script>(function () {
  function serialize(arg) {
    if (arg instanceof Error) return arg.message;
    if (typeof arg === "object" && arg !== null) {
      try {
        return JSON.stringify(arg);
      } catch (err) {
        return String(arg);
      }
    }
    return String(arg);
  }

  function forward(level, args) {
    try {
      window.parent.postMessage(
        { source: "codepen-react-console", level: level, args: args.map(serialize) },
        "*"
      );
    } catch (err) {
      /* ignore */
    }
  }

  ["log", "info", "warn", "error"].forEach(function (level) {
    var original = console[level];
    console[level] = function () {
      forward(level, Array.prototype.slice.call(arguments));
      original.apply(console, arguments);
    };
  });

  window.addEventListener("error", function (event) {
    forward("error", [event.message]);
  });
})();</script>`;

export default consoleShim;

// Prettier's standalone build and language plugins are dynamically
// imported here (not at module top-level) so they land in their own
// code-split chunk and are only fetched the first time someone actually
// runs "Format Document" -- not on initial page load.
const PARSER_BY_LANGUAGE = {
  html: "html",
  css: "css",
  javascript: "babel",
};

async function loadPlugins(language) {
  switch (language) {
    case "html":
      return [(await import("prettier/plugins/html")).default];
    case "css":
      return [(await import("prettier/plugins/postcss")).default];
    case "javascript": {
      const [babel, estree] = await Promise.all([
        import("prettier/plugins/babel"),
        import("prettier/plugins/estree"),
      ]);
      return [babel.default, estree.default];
    }
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
}

export async function formatCode(language, source) {
  const parser = PARSER_BY_LANGUAGE[language];
  if (!parser) throw new Error(`Unsupported language: ${language}`);

  const [{ format }, plugins] = await Promise.all([import("prettier/standalone"), loadPlugins(language)]);

  return format(source, { parser, plugins });
}

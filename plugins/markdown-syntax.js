function _visit(children, fn) {
  children.forEach((ch) => {
    fn(ch);
    if (ch.children) _visit(ch.children, fn);
  });
}

export function customMarkupPlugin() {
  return function (ast) {
    _visit(ast.children, (node) => {
      if (typeof node.value === "string") {
        node.value = node.value.replace(/(&lt;|<)\#\#.*?\#\#(&gt;|>)/g, "");
      }
    });
  };
}

export function customRenderedMarkupPlugin() {
  return function (ast) {
    _visit(ast.children, (node) => {
      if (node.type === "element" && node.tagName === "p") {
        const hasContent = node.children.find((child) => Boolean(child.value));

        if (!hasContent) node.properties.class = "is-hidden";
      }
    });
  };
}

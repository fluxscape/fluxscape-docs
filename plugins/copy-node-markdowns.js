import fs from "node:fs";
import path from "node:path";

function resolveImports(content, dir) {
  const includeMatch = content.matchAll(/@include\s\"(.*)\"/g);
  for (const _s of includeMatch) {
    const includePath = _s[1];
    const absPath = path.join(dir, includePath);

    const include = fs.readFileSync(absPath);
    content = content.replace(_s[0], include);
  }

  return content;
}

function copyNodeMarkdowns(dir, asFolderName) {
  console.log(" - Processing path: " + dir);
  fs.readdirSync(dir).forEach(function (file) {
    const filePath = (dir.endsWith("/") ? dir : dir + "/") + file;
    if (fs.lstatSync(filePath).isDirectory()) {
      copyNodeMarkdowns(filePath, asFolderName);
    } else if (file.endsWith(".md")) {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath);
      const resolved = resolveImports(content.toString(), dir);

      let outputFilePath = "build/" + filePath;
      if (asFolderName) {
        // HACK: Resolve the new nodes folder structure
        outputFilePath =
          "build/" + filePath.split(/\\|\//).slice(0, -1).join("/") + ".md";
      }

      fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
      fs.writeFileSync(outputFilePath, resolved);
    }
  });
}

export function copyNodeMarkdownPlugin(_context, options) {
  return {
    name: "docusaurus-copy-node-markdowns-plugin",
    configureWebpack(_config, isServer, _utils) {
      return isServer
        ? {
            plugins: [
              {
                apply: (compiler) => {
                  compiler.hooks.afterEmit.tap(
                    "AfterEmitPlugin",
                    (_compilation) => {
                      console.log("Copying node markdown files");

                      options.paths.forEach((filePath) => {
                        copyNodeMarkdowns(filePath.path, !!filePath.folderName);
                      });
                    }
                  );
                },
              },
            ],
          }
        : {};
    },
  };
}

/* eslint-disable import/prefer-default-export */
import { join, extname } from "path";
import { readdirSync, lstatSync } from "fs";

const extensions = [".js", ".ts", ".jsx", ".tsx"];

export const getFiles = (entry, excludeExtensions = []) => {
  const fileNames = [];
  const extensionSet = new Set(extensions);
  const excludeSet = new Set(excludeExtensions);

  const traverseDirectory = dirPath => {
    const entries = readdirSync(dirPath);

    entries.forEach(entry => {
      const fullPath = join(dirPath, entry);
      const stats = lstatSync(fullPath);

      if (stats.isDirectory()) {
        traverseDirectory(fullPath);
      } else {
        const ext = extname(entry);

        if (!excludeSet.has(ext) && extensionSet.has(ext)) {
          fileNames.push(fullPath);
        }
      }
    });
  };

  traverseDirectory(entry);

  return fileNames;
};

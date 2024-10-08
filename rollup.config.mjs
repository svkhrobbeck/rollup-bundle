// import { glob } from "glob";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";
import image from "@rollup/plugin-image";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import tsconfigPaths from "rollup-plugin-tsconfig-paths";

// yarn add -D glob @rollup/plugin-json rollup-plugin-delete @rollup/plugin-image @rollup/plugin-terser @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-typescript2 rollup-plugin-tsconfig-paths

export default {
  input: "src/index.ts", // glob.sync("src/**/*.ts"),
  output: [
    { file: "dist/index.js", format: "cjs" },
    // { file: "dist/index.mjs", format: "es" },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    resolve(),
    commonjs(),
    json(),
    image(),
    tsconfigPaths(),
    typescript(),
    terser(),
  ],
};
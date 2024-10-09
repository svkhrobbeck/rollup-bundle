import ts from "typescript";
import { defineConfig } from "rollup";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";
import image from "@rollup/plugin-image";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import tsconfigPaths from "rollup-plugin-tsconfig-paths";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// import { getFiles } from "./scripts/build-utils.mjs";

// yarn add -D rollup typescript @rollup/plugin-json rollup-plugin-delete @rollup/plugin-image @rollup/plugin-terser @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-typescript2 rollup-plugin-tsconfig-paths @rollup/plugin-typescript rollup-plugin-peer-deps-external

export default defineConfig({
  input: "src/index.ts", // getFiles("./src", []),
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    peerDepsExternal(),
    del({ targets: "dist/*" }),
    resolve(),
    commonjs(),
    json(),
    image(),
    tsconfigPaths(),
    typescript({
      typescript: ts,
      tsconfig: "./tsconfig.json",
      exclude: ["**/*.spec.ts", "**/*.test.ts", "**/*.spec.tsx", "**/*.test.tsx", "node_modules", "dist"]
    }),
    terser()
  ]
});

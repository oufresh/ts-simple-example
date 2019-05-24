import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import html from 'rollup-plugin-fill-html';
import clean from "rollup-plugin-clean";
import serve from 'rollup-plugin-serve';
import globals from 'rollup-plugin-node-globals';
import multiEntry from "rollup-plugin-multi-entry";

export default {
  input: ["demo/src/index.tsx", "src/index.ts"],
  output: [
    {
      file: "demo/dist/index.js",
      format: "iife",
      name: "demo",
      sourcemap: true
    }
  ],
  entry: 'demo/src/index.tsx',
  dest: 'demo/dist/bundle.js',
  plugins: [
    multiEntry(),
    serve("demo/dist"),
    clean(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      browser: true,
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    }),
    html({
      template: 'demo/src/index.html',
      filename: 'dist/index.html'
    }),
    globals()
  ]
};

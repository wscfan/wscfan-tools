import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import tenser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import path from "path";

export default {
  input: "src/index.ts",
  output: [
    // {
    //   file: "./dist/index.min.js",
    //   format: "iife",
    //   name: "WscfanTools",
    // },
    // {
    //   file: "./dist/index.amd.js",
    //   format: "amd",
    // },
    // {
    //   file: "./dist/index.cjs.js",
    //   format: "cjs",
    //   Element: "auto",
    // },
    {
      file: "./dist/index.js",
      format: "esm",
    },
    // {
    //   file: "./dist/index.js",
    //   format: "umd",
    //   name: "WscfanTools",
    // },
    // {
    //   file: './dist/index.system.js',
    //   format: 'system'
    // }
  ],
  plugins: [
    scss({
      fileName: "index.min.css",
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        path.join(__dirname, "../../node_modules/"),
        "node_modules/",
      ],
      outputStyle: "compressed",
    }),
    babel({
      exclude: "node_modules/**",
    }),
    typescript({
      target: "es2015",
    }),
    tenser(),
  ],
};

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/body.scss",
          dest: "build",
          rename: "body.scss"
        },
        {
          src: "src/classes.scss",
          dest: "build",
          rename: "classes.scss"
        },
        {
          src: "src/colors.scss",
          dest: "build",
          rename: "colors.scss"
        },
        {
          src: "src/header.scss",
          dest: "build",
          rename: "header.scss"
        },
        {
          src: "src/padding.scss",
          dest: "build",
          rename: "padding.scss"
        },
        {
          src: "src/tags.scss",
          dest: "build",
          rename: "tags.scss"
        },
        {
          src: "src/typography.scss",
          dest: "build",
          rename: "typography.scss"
        }
      ]
    })
  ]
};

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');

export default {
  input: 'src/Components/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    svgr(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: 'src/Styles/Fonts/*',
          dest: 'src/Componets/build/Styles/Fonts/',
        },
        {
          src: 'src/Styles/Icons/*',
          dest: 'src/Componets/build/Styles/Icons/',
        },
        {
          src: 'src/Styles/theme.css',
          dest: 'src/Componets/build/Styles/',
        },
        {
          src: 'src/Styles/theme.scss',
          dest: 'src/Componets/build/Styles/',
        },
      ],
    }),
  ],
};

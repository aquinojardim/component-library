import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/Components/index.ts',
  output: [
    {
      file: 'src/Components/build/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'src/Components/build/index.esm.js',
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
          dest: 'src/Components/build/Styles/Fonts/',
        },
        {
          src: 'src/Styles/Icons/*',
          dest: 'src/Components/build/Styles/Icons/',
        },
        {
          src: 'src/Styles/theme.css',
          dest: 'src/Components/build/Styles/',
        },
        {
          src: 'src/Styles/theme.scss',
          dest: 'src/Components/build/Styles/',
        },
      ],
    }),
  ],
};

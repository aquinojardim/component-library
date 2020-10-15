import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
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
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: 'src/Icon/icon-57x57-precomposed.png',
          dest: 'build/Icon',
          rename: 'icon-57x57-precomposed.png',
        },
        {
          src: 'src/Icon/icon-57x57.png',
          dest: 'build/Icon',
          rename: 'icon-57x57.png',
        },
        {
          src: 'src/Icon/icon-72x72-precomposed.png',
          dest: 'build/Icon',
          rename: 'icon-72x72-precomposed.png',
        },
        {
          src: 'src/Ocon/icon-72x72.png',
          dest: 'build/Icon',
          rename: 'icon-72x72.png',
        },
        {
          src: 'src/Icon/icon-76x76-precomposed.png',
          dest: 'build/Icon',
          rename: 'icon-76x76-precomposed.png',
        },
        {
          src: 'src/Icon/icon-76x76.png',
          dest: 'build/Icon',
          rename: 'icon-76x76.png',
        },
        {
          src: 'src/Icon/icon-114x114-precomposed.png',
          dest: 'build/Icon',
          rename: 'icon-114x114-precomposed.png',
        },
        {
          src: 'src/Icon/icon-114x114.png',
          dest: 'build/Icon',
          rename: 'icon-114x114.png',
        },
        {
          src: 'src/Icon/icon-120x120-precomposed.png',
          dest: 'build/Icon',
          rename: 'icon-120x120-precomposed.png',
        },
        {
          src: 'src/Icon/icon-120x120.png',
          dest: 'build/Icon',
          rename: 'icon-120x120.png',
        },
        {
          src: 'src/Icon/icon-144x144-precomposed.png',
          dest: 'build/Icon',
          rename: 'icon-144x144-precomposed.png',
        },
        {
          src: 'src/Icon/icon-144x144.png',
          dest: 'build/Icon',
          rename: 'icon-144x144.png',
        },
        {
          src: 'src/Icon/icon-152x152-precomposed.png',
          dest: 'build/Icon',
          rename: 'icon-152x152-precomposed.png',
        },
        {
          src: 'src/Icon/icon-152x152.png',
          dest: 'build/Icon',
          rename: 'icon-152x152.png',
        },
        {
          src: 'src/Icon/icon-180x180-precomposed.png',
          dest: 'build/Icon',
          rename: 'icon-180x180-precomposed.png',
        },
        {
          src: 'src/Icon/icon-180x180.png',
          dest: 'build/Icon',
          rename: 'icon-180x180.png',
        },
        {
          src: 'src/Icon/favicon.ico',
          dest: 'build/Icon',
          rename: 'favicon.ico',
        },
      ],
    }),
  ],
};

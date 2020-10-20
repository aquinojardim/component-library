import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import svgr from '@svgr/rollup';

export default {
  input: [
    'src/index.ts',
    'src/Button/index.ts',
    'src/Icon/index.ts',
    'src/Styles/theme.scss',
  ],
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  preserveModules: true,
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
          src: 'src/Icon/favicon/*',
          dest: 'build/Icon',
        },
        {
          src: 'src/Icon/png/*',
          dest: 'build/Icon',
        },
        {
          src: 'src/Icon/svg/*',
          dest: 'build/Icon',
        },
        {
          src: 'src/Styles/Fonts/*',
          dest: 'build/Styles/Fonts',
        },
      ],
    }),
  ],
};

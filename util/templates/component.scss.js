/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@import '~@gabrielajardimaquino/global-styles/build/theme.scss';
@import "~fontsource-metropolis/all.css";

.${componentName} {
  color: $color-black;
}
`,
  extension: '.scss',
});

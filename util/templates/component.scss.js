/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@import './../Styles/theme.scss';
@import './../Styles/Fonts/metropolis.css';

.${componentName} {
  color: $color-black;
}
`,
  extension: '.scss',
});

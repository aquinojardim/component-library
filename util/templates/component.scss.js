module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@import '~@gabrielajardimaquino/global-styles/theme.scss';
@import "~fontsource-metropolis/all.css";

.foo-bar {
  @include font-defaults;

  color: $harvey-green;
}
`,
  extension: `.scss`
});

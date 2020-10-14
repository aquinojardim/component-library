module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from "./${componentName}";
import './../storybook.scss';

export default {
    title: "${componentName}"
};

export const WithBar = () => <div className="style-guide"><${componentName} foo="bar"/></div>;

export const WithBaz = () => <div className="style-guide"><${componentName} foo="baz"/></div>;
`,
  extension: '.stories.tsx',
});

module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { ${componentName}Props } from "./${componentName}.types";
import '../Styles/Fonts/metropolis.css';
import "./${componentName}.scss";

const ${componentName}: React.FC<${componentName}Props> = ({ aria="${componentName}" }) => (
    <div data-testid="${componentName}" className="${componentName}">{foo}</div>
);

export default ${componentName};

`,
  extension: '.tsx',
});

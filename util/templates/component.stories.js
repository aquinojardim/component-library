module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from "./${componentName}";
import './../storybook.scss';

export default {
  title: "Components/${componentName}",
  componet: ${componentName},
  decorators: [
    (Story) => (
      <div className="style-guide">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    aria: {
      name: 'aria',
      type: { name: 'string', required: false },
      defaultValue: "${componentName}",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "${componentName}" },
      },
      control: 'text',
    },
  }
};

const Template = (args) => <${componentName} {...args} />;

export const ${componentName}s = Template.bind({});

export const ${componentName}Options = () => (
  <div>
    <h1>${componentName}</h1>
    <hr />
    <${componentName} aria="${componentName}"/>
  </div>;
);

${componentName}Options.parameters = {
  controls: { hideNoControlsWarning: true },
};

`,
  extension: '.stories.tsx',
});

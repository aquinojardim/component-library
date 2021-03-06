const path = require("path");

module.exports = {
  stories: ["../src/Components/**/*.stories.tsx", "../src/Styles/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [    
    {name: "@storybook/addon-essentials",
    options: {
      actions: false,
    }},
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};

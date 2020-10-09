# Component Library

## Description
This project features:

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## First time setup
- #### Clone the repo
```bash
git clone https://github.com/fashionphile/ComponentLibrary.git
```

- #### Install NVM 
```bash
curl -o- 
https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

###### To test if nvm is install
```bash
command -v nvm
# Should answer: nvm
```

###### Switch your node version to 14.13.0
```bash
nvm install 14.13.0
```

- #### Install Dependences 
```bash
npm install
```

## Running
- #### Change node to v14.13.0
```bash
nvm use 14.13.0
# Should answer: Now using node v14.13.0 (npm v6.14.8)
```

- #### Building

```
npm run build
```

- #### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```
- #### Testing

```
npm run test
```
### Generating New Components

This project included a handy NodeJS util file under `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Installing Component Library Locally

```
npm i --save ../@gabrielajardimaquino/component-library
```
Should show:

```JSON
  ...
  "dependencies": {
    ...
    "component-library": "file:../@gabrielajardimaquino/component-library",
    ...
  },
  ...
```

## Publishing

### Hosting via NPM

```
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `build/` directory and the compiled component library exist.

## Usage

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { Button } from "@gabrielajardimaquino/component-library";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <Button theme="primary" />
  </div>
);

export default App;
```

### Using Component Library SASS Variables

It's helpful to export SASS variables to projects consuming the library. As such, I've added the `rollup-plugin-copy` NPM package and used it to copy the `typography.scss` and `variables.scss` into the `build` directory as part of the Rollup bundle process. This allows you to use these variables in your projects consuming the component library.

For example, let's say you installed `component-library` into your project. To use the exported variables/mixins, in a SASS file you would do the following:

```Sass
@import '~@gabrielajardimaquino/component-library/build/typography';

.example-container {
    @include MetropolisBold;
    color: $color-white;
}
```

## Additional Help

### Using Alternatives to Sass

#### Less or Stylus

The Rollup plugin `rollup-plugin-postcss` supports Sass, Less and Stylus:

- For Stylus, install stylus: `yarn add stylus --dev`
- For Less, install less: `yarn add less --dev`

You can then remove `node-sass` from your dependencies.

#### CSS Modules

If you want to use CSS Modules, update `postcss` in `rollup-config.js` to:

```
postcss({
  modules: true
})
```

### Component Code Splitting

Code splitting of your components is not supported by default.

[Read this section of my blog post](https://blog.harveydelaney.com/creating-your-own-react-component-library/#introducing-code-splitting-optional-) to find out how and why you would enable code splitting of your components. In summary, code splitting enables users to import components in isolation like:

```
import Button from '~@gabrielajardimaquino/component-library/build/Button';
```

This can reduce the bundle size for projects using older (CJS) module formats.

You can check out [this branch](https://github.com/HarveyD/react-component-library/tree/code-splitting) or [this commit](https://github.com/HarveyD/react-component-library/commit/94631be5a871f3b39dbc3e9bd3e75a8ae5b3b759) to see what changes are neccesary to implement it.

Please note, there's an issue with code splitting and using `rollup-plugin-postcss`. I recommend using `rollup-plugin-sass` instead alongside code splitting.

### Supporting Image Imports

Add the following library to your component library [@rollup/plugin-image](https://github.com/rollup/plugins/tree/master/packages/image):

```
npm i -D @rollup/plugin-image
```

Then add it to `rollup-config.js`:

```
...
plugins:[
  ...,
  image(),
  ...
]
...
```

You can then import and render images in your components like:

```tsx
import logo from "./rollup.png";

export const ImageComponent = () => (
  <div>
    <img src={logo} />
  </div>
);
```

### Supporting JSON Imports

Add the following library to your component library [@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json):

```
npm i -D @rollup/plugin-json
```

Then add it to `rollup-config.js`:

```
...
plugins:[
  ...,
  json(),
  ...
]
...
```

You can then import and use JSON as ES6 Modules:

```tsx
import data from "./some-data.json";

export const JsonDataComponent = () => <div>{data.description}</div>;
```

Checkout the [official Rollup plugin list](https://github.com/rollup/plugins) for additional helpful plugins.

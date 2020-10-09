# Component Library
## Components
- Button
###### Optional Props
- ######   aria="any string"
- ######   content="any string"
- ######   onPress="any function" (for performance: useCallback)
- ######   size= 'lg' | 'sm'
- ######   status= 'on' | 'off'
- ######   theme='primary' | 'secondary' | 'pink' | 'ghost-black' | 'ghost-white'
- ######   width="unit in string format"
- Icon
###### Optional Props
- ######   size= 57 | 72 | 76 | 114 | 120 | 144 | 152 | 180
- ######   theme= 'primary' | 'secondary' | 'pink' | 'black'
- ######   precomposed= boolean (true | false)
###### favicon.ico (also avaliable in the icon package)
- Logo
###### Optional Props
- ######   theme= 'primary' | 'secondary' | 'pink' | 'black'
- ######   width="unit in string format"

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

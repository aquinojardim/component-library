# Component Library
## Usage

On your project install the component-library:

```
npm install @gabrielajardimaquino/component-library
```

Using a component (after the library installed as a dependency):

```TSX
import React from "react";
import { Button } from "@gabrielajardimaquino/component-library";

const App = () => (
  <div>
    <h1>Hello I'm consuming the component library</h1>
    <Button variant="primary" />
  </div>
);

export default App;
```

## Components
- ## Button
###### Optional Props:
######   aria = 'any string'
######   content = 'any string'
######   onClick = any function ( for best performance: useCallback )
######   size = 'lg' | 'sm'
######   status = 'on' | 'off'
######   type = 'button' | 'submit' | 'reset'
######   variant = 'primary' | 'secondary' | 'pink' | 'ghost-black' | 'ghost-white'
######   width = 'any unit in string format'
- ## Icon
###### Optional Props:
######   aria = 'any string'
######   name?: ' any string from [icon names](https://github.com/fashionphile/ComponentLibrary/blob/master/README.iconnames.md)'
######   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
######   variant?: 'primary' | 'secondary' | 'pink' | 'grey';
###### ( png, svg and favicon.ico icons are also avaliable in the icon folder )

# Global Styles
```bash
import '@gabrielajardimaquino/component-library/build/Styles/Fonts/metropolis.css';
import '@gabrielajardimaquino/component-library/build/Styles/theme.scss';
# or for just tags and classes
import '@gabrielajardimaquino/component-library/build/Styles/theme.css';
```
# Colors
The colors and their Sass variable names are provided below.
## Colors
- ![#F0F1F4](https://placehold.it/15/F0F1F4/000000?text=+) #F0F1F4: `$color-blue`
- ![#F3DCE6](https://placehold.it/15/F3DCE6/000000?text=+) #F3DCE6: `$color-pink-light`
- ![#EB0C8F](https://placehold.it/15/EB0C8F/000000?text=+) #EB0C8F: `$color-pink`
- ![#F58720](https://placehold.it/15/F58720/000000?text=+) #F58720: `$color-orange`
- ![#ECB904](https://placehold.it/15/ECB904/000000?text=+) #ECB904: `$color-yellow`
- ![#008300](https://placehold.it/15/008300/000000?text=+) #008300: `$color-green`

## Greys
- ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) #ffffff: `$color-white`
- ![#F8F8F8](https://placehold.it/15/F8F8F8/000000?text=+) #F8F8F8: `$color-grey-1`
- ![#E8E8E8](https://placehold.it/15/E8E8E8/000000?text=+) #E8E8E8: `$color-grey-2`
- ![#D8D8D8](https://placehold.it/15/D8D8D8/000000?text=+) #D8D8D8: `$color-grey-3`
- ![#C8C8C8](https://placehold.it/15/C8C8C8/000000?text=+) #C8C8C8: `$color-grey-4`
- ![#ADADAD](https://placehold.it/15/ADADAD/000000?text=+) #ADADAD: `$color-grey-5`
- ![#7D7D7D](https://placehold.it/15/7D7D7D/000000?text=+) #7D7D7D: `$color-grey-6`
- ![#595959](https://placehold.it/15/595959/000000?text=+) #595959: `$color-grey-7`
- ![#35383A](https://placehold.it/15/35383A/000000?text=+) #35383A: `$color-grey-8`
- ![#191C1F](https://placehold.it/15/191C1F/000000?text=+) #191C1F: `$color-black`

The padding/margin also can be usd by the classes
```bash
# border
className="border-color-white"
className="border-color-grey-1"
className="border-color-grey-2"
className="border-color-grey-3"
className="border-color-grey-4"
className="border-color-grey-5"
className="border-color-grey-6"
className="border-color-grey-7"
className="border-color-grey-8"
className="border-color-black"
className="border-color-blue"
className="border-color-pink"
className="border-color-pink-light"
className="border-color-yellow"
className="border-color-orange"
className="border-color-green"

# background
className="background-color-white"
className="background-color-grey-1"
className="background-color-grey-2"
className="background-color-grey-3"
className="background-color-grey-4"
className="background-color-grey-5"
className="background-color-grey-6"
className="background-color-grey-7"
className="background-color-grey-8"
className="background-color-black"
className="background-color-blue"
className="background-color-pink"
className="background-color-pink-light"
className="background-color-yellow"
className="background-color-orange"
className="background-color-green"

# text
className="text-color-white"
className="text-color-grey-1"
className="text-color-grey-2"
className="text-color-grey-3"
className="text-color-grey-4"
className="text-color-grey-5"
className="text-color-grey-6"
className="text-color-grey-7"
className="text-color-grey-8"
className="text-color-black"
className="text-color-blue"
className="text-color-pink"
className="text-color-pink-light"
className="text-color-yellow"
className="text-color-orange"
className="text-color-green"
```

# Padding/Magin
The padding/margin and their Sass variable names are provided below.
- ![#FF0099](https://placehold.it/4x4/FF0099/000000?text=+) `$padding-xxs`: 0.25rem
- ![#FF0099](https://placehold.it/8x4/FF0099/000000?text=+) `$padding-xs`: 0.5rem
- ![#FF0099](https://placehold.it/16x4/FF0099/000000?text=+) `$padding-sm`: 1rem
- ![#FF0099](https://placehold.it/24x4/FF0099/000000?text=+) `$padding-md`: 1.5rem
- ![#FF0099](https://placehold.it/32x4/FF0099/000000?text=+) `$padding-lg`: 2rem
- ![#FF0099](https://placehold.it/48x4/FF0099/000000?text=+) `$padding-xl`: 3rem
- ![#FF0099](https://placehold.it/64x4/FF0099/000000?text=+) `$padding-xxl`: 4rem
- ![#FF0099](https://placehold.it/96x4/FF0099/000000?text=+) `$padding-max`: 6rem

The padding/margin also can be usd by the classes
```bash
# padding
className="padding-xxs"
className="padding-xs"
className="padding-sm"
className="padding-md"
className="padding-lg"
className="padding-xl"
className="padding-xxl"
className="padding-max"

# padding-left
className="padding-left-xxs"
className="padding-left-xs"
className="padding-left-sm"
className="padding-left-md"
className="padding-left-lg"
className="padding-left-xl"
className="padding-left-xxl"
className="padding-left-max"

# padding-right
className="padding-right-xxs"
className="padding-right-xs"
className="padding-right-sm"
className="padding-right-md"
className="padding-right-lg"
className="padding-right-xl"
className="padding-right-xxl"
className="padding-right-max"

# padding-top
className="padding-top-xxs"
className="padding-top-xs"
className="padding-top-sm"
className="padding-top-md"
className="padding-top-lg"
className="padding-top-xl"
className="padding-top-xxl"
className="padding-top-max"

# padding-bottom
className="padding-bottom-xxs"
className="padding-bottom-xs"
className="padding-bottom-sm"
className="padding-bottom-md"
className="padding-bottom-lg"
className="padding-bottom-xl"
className="padding-bottom-xxl"
className="padding-bottom-max"

# margin
className="margin-xxs"
className="margin-xs"
className="margin-sm"
className="margin-md"
className="margin-lg"
className="margin-xl"
className="margin-xxl"
className="margin-max"

# margin-left
className="margin-left-xxs"
className="margin-left-xs"
className="margin-left-sm"
className="margin-left-md"
className="margin-left-lg"
className="margin-left-xl"
className="margin-left-xxl"
className="margin-left-max"

# margin-right
className="margin-right-xxs"
className="margin-right-xs"
className="margin-right-sm"
className="margin-right-md"
className="margin-right-lg"
className="margin-right-xl"
className="margin-right-xxl"
className="margin-right-max"

# margin-top
className="margin-top-xxs"
className="margin-top-xs"
className="margin-top-sm"
className="margin-top-md"
className="margin-top-lg"
className="margin-top-xl"
className="margin-top-xxl"
className="margin-top-max"

# margin-bottom
className="margin-bottom-xxs"
className="margin-bottom-xs"
className="margin-bottom-sm"
className="margin-bottom-md"
className="margin-bottom-lg"
className="margin-bottom-xl"
className="margin-bottom-xxl"
className="margin-bottom-max"
```

# Breakpoint
The breakpoint Sass variable names are provided below:
- $media-breakpoint-xs: 576px;
- $media-breakpoint-sm: 768px;
- $media-breakpoint-md: 992px;
- $media-breakpoint-lg: 1200px;
- $media-breakpoint-xl: 1599px;

# Typography
- #### Tags: 
You can use the styles by applying tag, h1 to h6 tags are pre defined as well as the htm, body and a tags.
- #### Mixin:
You can use the styles include a mixin to yous Sass files.
Rememenber to import the theme at the top of the file
```bash
@import '~@gabrielajardimaquino/component-library/build/Styles/theme.scss';
```
- Classes:
you also can use one of thepreset class names to style any tag
```TSX
import React from 'react';

const Test = () => {
  return (
    <>
      <h1 className="h1-lastest">Your content</h1>
    </>
  );
};

export default Test;
```

## Font
Import the font at the top of the app file
```bash
import '@gabrielajardimaquino/component-library/build/Styles/Fonts/metropolis.css'
```

Use the font by family:
```bash
font-family: 'Metropolis'
```

or use a preset Mixin:
```bash
# Semi Bold (weight: 600)
@include MetropolisSemiBold;
@include MetropolisSemiBoldItalic;

# Medium (weight: 500)
@include MetropolisMedium;
@include MetropolisMediumItalic;

# Normal (weight: 400)
@include Metropolis;
@include MetropolisItalic;

# Light (weight: 200)
@include MetropolisLight;
@include MetropolisLightItalic;
```

### Header
```bash
className="h1-largest"
# or
@include h1-largest;
```
```bash
<h1></h1>
#or
@include h1-desktop;
```
```bash
<h2></h2>
# or
@include h2-desktop;
@include h1-mobile;
# same values
```
```bash
<h3></h3>
# or
@include h3-desktop;
@include h2-mobile;
# same values
```
```bash
<h4></h4>
# or
@include h4-desktop;
@include h3-mobile;
# same values
```
```bash
<h5></h5>
# or
@include h5-desktop;
@include h4-mobile;
# same values
```
```bash
<h6></h6>
# or
@include h6-desktop;
@include h5-mobile;
# same values
```
```bash
className="h6-smallest"
# or
@include h6-mobile;
```

### Body
```bash
className="body-xxl"
# or
@include body-xxl;
```
```bash
className="body-xl"
# or
@include body-xl;
```
```bash
className="body-lg"
# or
@include body-lg;
```
```bash
className="body-md"
# or
@include body-md;
```
```bash
className="body-sm"
# or
@include body-sm;
```
```bash
className="body-xs"
# or
@include body-xs;
```

### Link
Inline links can be used just by the a tag `<a>Inline Link</a>` and in block links can be use by the classes:
```bash
className="h1-largest-link"
className="h1-link"
className="h2-link"
className="h3-link"
className="h4-link"
className="h5-link"
className="h6-link"
className="h6-smallest-link"
# or
className="standalone-link"
```
For standalone link with icon use `className="standalone-link"`, `className="tooltip"` and `className="tooltip-icon"` as example below:
```TSX
import React from 'react';
import { Icon } from "@gabrielajardimaquino/component-library";

const LinkWithIcon = () => {
  return (
    <>
      <a className="standalone-link">
        Your link
        <div className="tooltip">
          <span className="tooltip-icon">
            <Icon name="fa-icon-info-circle-solid" size="xs" />
          </span>
      </a>
    </>
  );
};

export default LinkWithIcon;
```

# Grid
The grid is build in 12 column. To use the `className="container"`, `className="row"` and one off the column classes with max sum of 12:
- column classes
```bash
className="col-12"
className="col-11"
className="col-10"
className="col-9"
className="col-8"
className="col-7"
className="col-6"
className="col-5"
className="col-4"
className="col-3"
className="col-2"
className="col-1"
```

```TSX
import React from 'react';

const Test = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">content</div>
        <div className="col-8">content</div>
        <div className="col-3">content</div>
      </div>
    </div>
  );
};

export default Test;
```

Also avaliable with screen sensitive classes:
```TSX
import React from 'react';

const Test = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-1 col-md-2 col-sm-4 col-xs-12">content</div>
        <div className="col-lg-8 col-md-6 col-sm-4 col-xs-12">content</div>
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">content</div>
      </div>
    </div>
  );
};

export default Test;
```
- col-xs
```bash
className="col-xs-12"
className="col-xs-11"
className="col-xs-10"
className="col-xs-9"
className="col-xs-8"
className="col-xs-7"
className="col-xs-6"
className="col-xs-5"
className="col-xs-4"
className="col-xs-3"
className="col-xs-2"
className="col-xs-1"
```
- col-sm
```bash
className="col-sm-12"
className="col-sm-11"
className="col-sm-10"
className="col-sm-9"
className="col-sm-8"
className="col-sm-7"
className="col-sm-6"
className="col-sm-5"
className="col-sm-4"
className="col-sm-3"
className="col-sm-2"
className="col-sm-1"
```
- col-md
```bash
className="col-md-12"
className="col-md-11"
className="col-md-10"
className="col-md-9"
className="col-md-8"
className="col-md-7"
className="col-md-6"
className="col-md-5"
className="col-md-4"
className="col-md-3"
className="col-md-2"
className="col-md-1"
```
- col-lg
```bash
className="col-lg-12"
className="col-lg-11"
className="col-lg-10"
className="col-lg-9"
className="col-lg-8"
className="col-lg-7"
className="col-lg-6"
className="col-lg-5"
className="col-lg-4"
className="col-lg-3"
className="col-lg-2"
className="col-lg-1"
```

# Tooltip
Tooltip on hover can be used by passing the classes className="tooltip-label", className="tooltip", className="tooltip-icon" and className="tooltip-text".
```TSX
import React from 'react';
import { Icon } from "@gabrielajardimaquino/component-library";

const Tooltip = () => {
  return (
    <>
      <p className="tooltip-label">
        Your content
        <div className="tooltip">
          <span className="tooltip-icon">
            <Icon name="fa-icon-info-circle-solid" size="xs" />
          </span>
          <span className="tooltip-text">
            This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead.
          </span>
        </div>
      </p>
    </>
  );
};

export default Tooltip;
```
Tooltip on click can be used by passing the classes className="tooltip", className="tooltiptext" and className="tooltip-active"
```TSX
import React, { useState } from 'react';
import { Icon } from "@gabrielajardimaquino/component-library";

const Tooltip = () => {
  const [active, setActive] = useState(false);
  const handleOnClick = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <>
      <p className="tooltip-label">
        Your content
        <div 
          className={`tooltip ${active ? 'tooltip-active' : ''}`}
          onClick={handleOnClick}
          onKeyPress={handleOnClick}
          tabIndex={0}
          role="button"
          aria-label="tooltip">
          <span className="tooltip-icon">
            <Icon name="fa-icon-info-circle-solid" size="xs" />
          </span>
          <span className="tooltip-text">
            This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead.
          </span>
        </div>
      </p>
    </>
  );
};

export default Tooltip;
```

# Development
## Description
This project features:

- [Rollup](https://github.com/rollup/rollup)
- [Gulp](https://gulpjs.com/)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
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
nvm use 14.13.0
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
Build all
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

To deploy storybook to staging 

```
npm run deploy-storybook
```
It will be staging at: https://fashionphile.github.io/ComponentLibrary 

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

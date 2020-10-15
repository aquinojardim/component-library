import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/fontawesome-free-solid';
import 'fontsource-metropolis/all.css';
import '@gabrielajardimaquino/global-styles/theme.scss';

export default {
  title: 'Global Styles',
};

export const typographyFont = () => (
  <div className="style-guide">
    <h1>Font</h1>
    <hr />
    <p className="metropolisBold">
      Metropolis Bold: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp
      Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolisBoldItalic">
      Metropolis Bold Italic: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
      Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolisSemiBold">
      Metropolis Semi Bold: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn
      Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolisSemiBoldItalic">
      Metropolis Semi Bold Italic: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll
      Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolisMedium">
      Metropolis Medium: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo
      Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolisMediumItalic">
      Metropolis Medium Italic: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
      Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolis">
      Metropolis: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq
      Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolisItalic">
      Metropolis Italic: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo
      Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolisLight">
      Metropolis Light: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo
      Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
    <p className="metropolisLightItalic">
      Metropolis Light Italic: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
      Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
    </p>
  </div>
);

export const typographyHeader = () => (
  <div className="style-guide">
    <h1>Header</h1>
    <hr />
    <p className="h1-largest">metropolis semibold - h1-largest</p>
    <h1>metropolis semibold - h1-desktop</h1>
    <h2>metropolis semibold - h2-desktop and h1-mobile</h2>
    <h3>metropolis semibold - base - h3-desktop and h2-mobile</h3>
    <h4>metrolpolis semibold - h4-desktop and h3-mobile</h4>
    <h5>metropolis semibold - h5-desktop and h4-mobile</h5>
    <h6>metropolis semibold - h6-desktop and h5-mobile</h6>
    <p className="h6-smallest">
      metropolis - h6-mobile and h6-smallest
    </p>
  </div>
);

export const typographyBody = () => (
  <div className="style-guide">
    <h1>Body</h1>
    <hr />
    <p className="body-xxl">
      This is body-xxl. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Varius vel pharetra vel turpis. Felis donec
      et odio pellentesque diam. Maecenas pharetra convallis posuere
      morbi. At consectetur lorem donec massa sapien faucibus. Leo in
      vitae turpis massa sed. Lobortis feugiat vivamus at augue eget
      arcu dictum varius duis.
    </p>
    <p className="body-xl">
      This is body-xl. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Varius vel pharetra vel turpis. Felis donec
      et odio pellentesque diam. Maecenas pharetra convallis posuere
      morbi. At consectetur lorem donec massa sapien faucibus. Leo in
      vitae turpis massa sed. Lobortis feugiat vivamus at augue eget
      arcu dictum varius duis.
    </p>
    <p className="body-lg">
      This is body-lg. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Varius vel pharetra vel turpis. Felis donec
      et odio pellentesque diam. Maecenas pharetra convallis posuere
      morbi. At consectetur lorem donec massa sapien faucibus. Leo in
      vitae turpis massa sed. Lobortis feugiat vivamus at augue eget
      arcu dictum varius duis. <strong>default</strong>
    </p>
    <p className="body-md">
      This is body-md. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Varius vel pharetra vel turpis. Felis donec
      et odio pellentesque diam. Maecenas pharetra convallis posuere
      morbi. At consectetur lorem donec massa sapien faucibus. Leo in
      vitae turpis massa sed. Lobortis feugiat vivamus at augue eget
      arcu dictum varius duis.
    </p>
    <p className="body-sm">
      This is body-sm. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Varius vel pharetra vel turpis. Felis donec
      et odio pellentesque diam. Maecenas pharetra convallis posuere
      morbi. At consectetur lorem donec massa sapien faucibus. Leo in
      vitae turpis massa sed. Lobortis feugiat vivamus at augue eget
      arcu dictum varius duis.
    </p>
    <p className="body-xs">
      This is body-xs.Use this for extreme fine print copy only. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Varius vel pharetra vel turpis. Felis donec et odio pellentesque
      diam. Maecenas pharetra convallis posuere morbi. At consectetur
      lorem donec massa sapien faucibus. Leo in vitae turpis massa
      sed. Lobortis feugiat vivamus at augue eget arcu dictum varius
      duis.
    </p>
  </div>
);

export const LinksAndTooltip = () => (
  <div className="style-guide">
    <h1>Links and Tooltip</h1>
    <hr />
    <p>
      The <a>inline link</a> are used by the a tag with no class
    </p>
    <hr />
    <p>
      <a className="h1-largest-link">h1-largest-link</a>
      <a className="h1-link">h1-link</a>
      <a className="h2-link">h2-link</a>
      <a className="h3-link">h3-link</a>
      <a className="h4-link">h4-link</a>
      <a className="h5-link">h5-link</a>
      <a className="h6-link">h6-link</a>
      <a className="h6-smallest-link">h6-smallest-link</a>
    </p>
    <hr />
    <p>
      <a className="standalone-link">Standalone link</a>
      <a className="standalone-link">
        Standalone link
        <div className="tooltip">
          <span className="vertical-center">
            <FontAwesomeIcon icon={faInfoCircle} />
          </span>
        </div>
      </a>
    </p>
    <hr />
    <p className="tooltip-label">
      Tooltip Label
      <div className="tooltip">
        <span className="vertical-center">
          <FontAwesomeIcon icon={faInfoCircle} />
        </span>
        <span className="tooltip-text">
          This is some tooltip text. This box shows the maximum amount
          of text that should appear inside. If more room is needed
          please use a modal instead.
        </span>
      </div>
    </p>
  </div>
);

export const Colors = () => (
  <div className="style-guide">
    <h1>Color</h1>
    <hr />
    <div className="color-story color-white">color-white</div>
    <div className="color-story color-grey-1">color-grey-1</div>
    <div className="color-story color-grey-2">color-grey-2</div>
    <div className="color-story color-grey-3">color-grey-3</div>
    <div className="color-story color-grey-4">color-grey-4</div>
    <div className="color-story color-grey-5">color-grey-5</div>
    <div className="color-story color-grey-6">color-grey-6</div>
    <div className="color-story color-grey-7">color-grey-7</div>
    <div className="color-story color-grey-8">color-grey-8</div>
    <div className="color-story color-black">color-black</div>
    <div className="color-story color-blue">color-blue</div>
    <div className="color-story color-pink">color-pink</div>
    <div className="color-story color-pink-light">
      color-pink-light
    </div>
    <div className="color-story color-yellow">color-yellow</div>
    <div className="color-story color-orange">color-orange</div>
    <div className="color-story color-green">color-green</div>
  </div>
);

export const Padding = () => (
  <div className="style-guide">
    <h1>Padding</h1>
    <hr />
    <div className="color-pink padding-max">.</div>
    <p>6rem</p>
    <div className="color-pink padding-xxl">.</div>
    <p>4rem</p>
    <div className="color-pink padding-xl">.</div>
    <p>3rem</p>
    <div className="color-pink padding-lg">.</div>
    <p>2rem</p>
    <div className="color-pink padding-md">.</div>
    <p>1.5rem</p>
    <div className="color-pink padding-sm">.</div>
    <p>1rem</p>
    <div className="color-pink padding-xs">.</div>
    <p>0.5rem</p>
    <div className="color-pink padding-xxs">.</div>
    <p>0.25rem</p>
  </div>
);

export const Grid = () => (
  <div className="style-guide">
    <h1>Grid</h1>
    <hr />
    <div className="container">
      The grid has a total of 12 column...
      <div className="row">
        <div className="col-12 color-pink-light">col-12</div>
      </div>
      ...divided by a 2rem gutter...
      <div className="row">
        <div className="col-1 color-pink-light">col-1</div>
        <div className="col-8 color-pink-light">col-8</div>
        <div className="col-3 color-pink-light">col-3</div>
      </div>
      ...and can be used for responsive design.
      <div className="row">
        <div className="col-lg-1 col-md-2 col-sm-4 col-xs-12 color-pink-light">
          col-lg-1 col-md-2 col-sm-4 col-xs-12
        </div>
        <div className="col-lg-8 col-md-6 col-sm-4 col-xs-12 color-pink-light">
          col-lg-8 col-md-6 col-sm-4 col-xs-12
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 color-pink-light">
          col-lg-3 col-md-4 col-sm-4 col-xs-12
        </div>
      </div>
    </div>
  </div>
);

export const MeadiaBreakpoints = () => (
  <div className="style-guide">
    <h1>Media Breakpoints</h1>
    <hr />
    <div className="media-breakpoint-xl">
      <h4>media-breakpoint-xl:</h4>
      This screen is 1599px or smaller
    </div>
    <div className="media-breakpoint-lg">
      <h4>media-breakpoint-lg:</h4>
      This screen is 1200px or smaller
    </div>
    <div className="media-breakpoint-md">
      <h4>media-breakpoint-md:</h4>
      This screen is 992px or smaller
    </div>
    <div className="media-breakpoint-sm">
      <h4>media-breakpoint-sm:</h4>
      This screen is 768px or smaller
    </div>
    <div className="media-breakpoint-xs">
      <h4>media-breakpoint-xs:</h4>
      This screen is 576px or smaller
    </div>
  </div>
);

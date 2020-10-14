import React from 'react';
import Logo from './Logo';
import '../storybook.scss';

export default {
  title: 'Logo',
};

export const LogoPrimary = () => (
  <div className="style-guide">
    <Logo theme="primary" />
  </div>
);

export const LogoSecondary = () => (
  <div className="style-guide">
    <Logo theme="secondary" />
  </div>
);

export const LogoPink = () => (
  <div className="style-guide">
    <Logo theme="pink" />
  </div>
);

export const LogoBlack = () => (
  <div className="style-guide">
    <Logo theme="black" />
  </div>
);

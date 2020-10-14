import React from 'react';
import { LogoProps } from './Logo.types';

const Logo = (props: LogoProps) => {
  const { theme = 'primary', width = '280.088px' } = props;

  return (
    <div>
      <img
        src={require(`./${theme}Logo.svg`)}
        alt="Fashionphile Icon"
        width={width}
      />
    </div>
  );
};

export default Logo;

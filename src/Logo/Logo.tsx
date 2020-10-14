import React from 'react';
import { LogoProps } from './Logo.types';

const Logo = (props: LogoProps) => {
  const { variant = 'primary', width = '280.088px' } = props;

  return (
    <div>
      <img
        src={require(`./${variant}Logo.svg`)}
        alt="Fashionphile Icon"
        width={width}
      />
    </div>
  );
};

export default Logo;

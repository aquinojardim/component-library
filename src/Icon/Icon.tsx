import React from 'react';
import { IconProps } from './Icon.types';

const Icon = (props: IconProps) => {
  const {
    variant = 'primary',
    size = 57,
    precomposed = false,
  } = props;

  return (
    <div>
      {variant === 'primary' && precomposed ? (
        <img
          src={require(`./icon-${size}x${size}-precomposed.png`)}
          alt="Fashionphile Icon"
        />
      ) : variant === 'primary' && !precomposed ? (
        <img
          src={require(`./icon-${size}x${size}.png`)}
          alt="Fashionphile Icon"
        />
      ) : (
        <img
          width={`${size}`}
          src={require(`./icon-${variant}.svg`)}
          alt="Fashionphile Icon"
        />
      )}
    </div>
  );
};

export default Icon;

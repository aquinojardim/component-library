import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';
import "fontsource-metropolis/all.css";

const Button = (props: ButtonProps) => {
  const {
    aria = 'button',
    status = 'on',
    size = 'lg',
    theme = 'primary',
    content = 'ok',
    onPress = () => {},
    width = '8.25rem',
  } = props;

  const handleOnClick = () => {
    if (onPress && status === 'on') {
      onPress();
    }
  };

  return (
    <div
      onClick={handleOnClick}
      onKeyPress={handleOnClick}
      tabIndex={0}
      role="button"
      aria-disabled={status !== 'on'}
      aria-label={aria}
      data-testid="button"
      className={`button ${size} ${theme}-${status}`}
      style={{ width: `${width}` }}
    >
      {content}
    </div>
  );
};

export default Button;

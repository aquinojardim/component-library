/* eslint-disable react/button-has-type */
import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';
import 'fontsource-metropolis/all.css';

const Button = (props: ButtonProps) => {
  const {
    aria = 'button',
    status = 'on',
    size = 'lg',
    variant = 'primary',
    type = 'button',
    content = 'ok',
    onPress = () => {},
    width = '13.438rem',
  } = props;

  const handleOnClick = () => {
    if (onPress && status === 'on') {
      onPress();
    }
  };

  return (
    <>
      <button
        onClick={handleOnClick}
        onKeyPress={handleOnClick}
        tabIndex={0}
        aria-disabled={status !== 'on'}
        aria-label={aria}
        type={type}
        data-testid="button"
        className={`button ${size} ${variant}-${status}`}
        style={{ width: `${width}` }}
      >
        {content}
      </button>
    </>
  );
};

export default Button;

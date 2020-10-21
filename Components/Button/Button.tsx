/* eslint-disable react/button-has-type */
import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';
import '../../Styles/Fonts/metropolis.css';
import '../../Styles/theme.scss';

const Button = (props: ButtonProps) => {
  const {
    aria = 'button',
    status = 'on',
    size = 'lg',
    variant = 'primary',
    type = 'button',
    content = 'ok',
    onClick = () => {},
    width = '',
  } = props;

  const handleOnClick = () => {
    if (onClick && status === 'on') {
      onClick();
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
        className={`btn btn-${size} btn-${variant}-${status}`}
        style={{ width: `${width}` }}
      >
        {content}
      </button>
    </>
  );
};

export default Button;

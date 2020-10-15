import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

describe('Button test content', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      content: 'test',
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should display content', () => {
    const { getByTestId } = renderComponent();
    const ButtonContaint = getByTestId('button');
    expect(ButtonContaint.innerHTML).toBe('test');
  });

  it('should display ok if no content', () => {
    props = {};
    const { getByTestId } = renderComponent();
    const ButtonContaint = getByTestId('button');
    expect(ButtonContaint.innerHTML).toBe('ok');
  });
});

describe('Button test variant', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      size: 'sm',
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should work with primary variant by default props', () => {
    const { getByTestId } = renderComponent();
    const ButtonPrimary = getByTestId('button');
    expect(ButtonPrimary).toBeTruthy();
    expect(ButtonPrimary.attributes).toHaveProperty('aria-label');
  });

  it('should work with secondary variant', () => {
    props.variant = 'secondary';
    const { getByTestId } = renderComponent();
    const ButtonSecondary = getByTestId('button');
    expect(ButtonSecondary).toBeTruthy();
  });

  it('should work with pink variant', () => {
    props.variant = 'pink';
    const { getByTestId } = renderComponent();
    const ButtonPink = getByTestId('button');
    expect(ButtonPink).toBeTruthy();
  });

  it('should work with ghost-white variant', () => {
    props.variant = 'ghost-white';
    const { getByTestId } = renderComponent();
    const ButtonGhostWhite = getByTestId('button');
    expect(ButtonGhostWhite).toBeTruthy();
  });

  it('should work with ghost-black variant', () => {
    props.variant = 'ghost-black';
    const { getByTestId } = renderComponent();
    const ButtonGhostBlack = getByTestId('button');
    expect(ButtonGhostBlack).toBeTruthy();
  });
});

describe('Button test onClick', () => {
  let props: ButtonProps;
  let changeonClick = 'off';

  beforeEach(() => {
    props = {
      onClick: () => {
        changeonClick = 'on';
      },
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should accept a function', () => {
    const { getByTestId } = renderComponent();
    const ButtonWithFunc = getByTestId('button');
    expect(ButtonWithFunc).toBeTruthy();
  });

  it('should call function on click', () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('button'), new MouseEvent('click'));
    expect(changeonClick).toEqual('on');
  });

  it('should call function on click 1 time', () => {
    props.onClick = jest.fn();
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('button'));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should call function on key down', () => {
    const { getByTestId } = renderComponent();
    fireEvent.keyDown(getByTestId('button'), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(changeonClick).toEqual('on');
  });

  it('should work with no function', () => {
    changeonClick = 'off';
    props = {};
    const { getByTestId } = renderComponent();
    const ButtonWithNoFunc = getByTestId('button');
    expect(ButtonWithNoFunc).toBeTruthy();
    expect(changeonClick).toEqual('off');
  });
});

describe('Button test Disable', () => {
  let props: ButtonProps;
  let changeonClick = 'off';

  beforeEach(() => {
    props = {
      status: 'off',
      onClick: () => {
        changeonClick = 'on';
      },
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should not call function on click', () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('button'), new MouseEvent('click'));
    expect(changeonClick).toEqual('off');
  });

  it('should not call function on click 0 time', () => {
    props.onClick = jest.fn();
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('button'));
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });

  it('should not call function on key down', () => {
    const { getByTestId } = renderComponent();
    fireEvent.keyDown(getByTestId('button'), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(changeonClick).toEqual('off');
  });
});

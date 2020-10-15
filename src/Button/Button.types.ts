/* eslint-disable prettier/prettier */
export interface ButtonProps {
  aria?: string;
  content?: string;
  onClick?: (arg0?: any) => void;
  size?: 'lg' | 'sm';
  status?: 'on' | 'off';
  variant?:'primary' | 'secondary' | 'pink' | 'ghost-black' | 'ghost-white';
  width?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonProps {
  aria?: string;
  content?: string;
  onPress?: (arg0?: any) => void;
  size?: 'lg' | 'sm';
  status?: 'on' | 'off';
  // eslint-disable-next-line prettier/prettier
  theme?:'primary' | 'secondary' | 'pink' | 'ghost-black' | 'ghost-white';
  width?: string;
}

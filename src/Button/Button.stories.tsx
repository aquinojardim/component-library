import React from 'react';
import Button from './Button';
import '../storybook.scss';

export default {
  title: 'Button',
};

export const PrimaryLarge = () => (
  <div className="style-guide">
    <Button variant="primary" />
  </div>
);

export const PrimaryLargeDisable = () => (
  <div className="style-guide">
    <Button variant="primary" status="off" />
  </div>
);

export const PrimarySmall = () => (
  <div className="style-guide">
    <Button variant="primary" size="sm" />
  </div>
);

export const PrimarySmallDisable = () => (
  <div className="style-guide">
    <Button variant="primary" size="sm" status="off" />
  </div>
);

export const SecondaryLarge = () => (
  <div className="style-guide">
    <Button variant="secondary" />
  </div>
);

export const SecondaryLargeDisable = () => (
  <div className="style-guide">
    <Button variant="secondary" status="off" />
  </div>
);

export const SecondarySmall = () => (
  <div className="style-guide">
    <Button variant="secondary" size="sm" />
  </div>
);

export const SecondarySmallDisable = () => (
  <div className="style-guide">
    <Button variant="secondary" size="sm" status="off" />
  </div>
);

export const PinkLarge = () => (
  <div className="style-guide">
    <Button variant="pink" />
  </div>
);

export const PinkLargeDisable = () => (
  <div className="style-guide">
    <Button variant="pink" status="off" />
  </div>
);

export const PinkSmall = () => (
  <div className="style-guide">
    <Button variant="pink" size="sm" />
  </div>
);

export const PinkSmallDisable = () => (
  <div className="style-guide">
    <Button variant="pink" size="sm" status="off" />
  </div>
);

export const GhostBlackLarge = () => (
  <div className="style-guide">
    <Button variant="ghost-black" />
  </div>
);

export const GhostBlackLargeDisable = () => (
  <div className="style-guide">
    <Button variant="ghost-black" status="off" />
  </div>
);

export const GhostBlackSmall = () => (
  <div className="style-guide">
    <Button variant="ghost-black" size="sm" />
  </div>
);

export const GhostBlackSmallDisable = () => (
  <div className="style-guide">
    <Button variant="ghost-black" size="sm" status="off" />
  </div>
);

export const GhostWhiteLarge = () => (
  <div className="style-guide">
    <Button variant="ghost-white" />
  </div>
);

export const GhostWhiteLargeDisable = () => (
  <div className="style-guide">
    <Button variant="ghost-white" status="off" />
  </div>
);

export const GhostWhiteSmall = () => (
  <div className="style-guide">
    <Button variant="ghost-white" size="sm" />
  </div>
);

export const GhostWhiteSmallDisable = () => (
  <div className="style-guide">
    <Button variant="ghost-white" size="sm" status="off" />
  </div>
);

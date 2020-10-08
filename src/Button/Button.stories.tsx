import React from "react";
import Button from "./Button";

export default {
  title: "Button"
};

export const PrimaryLarge = () => <Button theme="primary" />;

export const PrimaryLargeDisable = () => <Button theme="primary" status="off" />;

export const PrimarySmall = () => <Button theme="primary" size="sm"/>;

export const PrimarySmallDisable = () => <Button theme="primary" size="sm" status="off"/>;

export const SecondaryLarge = () => <Button theme="secondary" />;

export const SecondaryLargeDisable = () => <Button theme="secondary" status="off"/>;

export const SecondarySmall = () => <Button theme="secondary" size="sm"/>;

export const SecondarySmallDisable = () => <Button theme="secondary" size="sm" status="off"/>;

export const PinkLarge = () => <Button theme="pink" />;

export const PinkLargeDisable = () => <Button theme="pink" status="off"/>;

export const PinkSmall = () => <Button theme="pink" size="sm"/>;

export const PinkSmallDisable = () => <Button theme="pink" size="sm" status="off"/>;

export const GhostBlackLarge = () => <Button theme="ghost-black" />;

export const GhostBlackLargeDisable = () => <Button theme="ghost-black" status="off"/>;

export const GhostBlackSmall = () => <Button theme="ghost-black" size="sm"/>;

export const GhostBlackSmallDisable = () => <Button theme="ghost-black" size="sm" status="off"/>;

export const GhostWhiteLarge = () => <Button theme="ghost-white" />;

export const GhostWhiteLargeDisable = () => <Button theme="ghost-white" status="off"/>;

export const GhostWhiteSmall = () => <Button theme="ghost-white" size="sm"/>;

export const GhostWhiteSmallDisable = () => <Button theme="ghost-white" size="sm" status="off"/>;

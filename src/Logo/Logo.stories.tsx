import React from "react";
import Logo from "./Logo";

export default {
  title: "Logo"
};

export const LogoPrimary = () => <Logo theme="primary"/>;

export const LogoSecondary = () => <div style={{backgroundColor:"black", height:"1000px", margin:'-10px', padding:'10px'}} ><Logo theme="secondary"/></div>;

export const LogoPink = () => <Logo theme="pink"/>;

export const LogoBlack = () => <Logo theme="black"/>;
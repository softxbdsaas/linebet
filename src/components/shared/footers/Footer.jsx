import React from "react";
import FooterMenu from "./FooterMenu";
import Partners from "./Partners";
import LineBetOwned from "./LinebetOwned";
const Footer = () => {
  return (
    <div className="mx-2">
      <FooterMenu />     
      <Partners />     
      <LineBetOwned />     
    </div>
  );
};

export default Footer;

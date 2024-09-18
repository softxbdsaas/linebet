import React from "react";
import FooterMenu from "./FooterMenu";
import Partners from "./Partners";
import LineBetOwned from "./LinebetOwned";
import FooterCopyRight from "./FooterCopyRight";
const Footer = () => {
  return (
    <div className="mx-2 pb-14">
      <FooterMenu />     
      <Partners />     
      <LineBetOwned />     
      <FooterCopyRight />     
    </div>
  );
};

export default Footer;

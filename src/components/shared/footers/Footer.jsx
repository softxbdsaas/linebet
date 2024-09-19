import React from "react";
import FooterMenu from "./FooterMenu";
import Partners from "./Partners";
import FooterCopyRight from "./FooterCopyRight";
import LineBetOwned from "./LineBetOwned";
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

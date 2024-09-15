import React from "react";
import logo from "../../../../public/assets/logo.png";
import subLogo from "../../../../public/assets/sub-logo.png";
import Image from "next/image";
import NavFeatureItems from "./NavFeatureItems";
import NavbarRightSite from "./NavbarRightSite";
const Navbar = () => {
  return (
    <div className=" py-2 sticky top-0 w-full px-1 md:px-2 bg-[#2D5822]">
      <div className=" flex justify-between items-center gap-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-8">
            <Image src={logo} width={102} height={32} alt="image" />
            <Image src={subLogo} width={60} height={28} alt="image" />
          </div>
          {/* NavFeatureItems  */}
          <div>
            <NavFeatureItems />
          </div>
        </div>
        <div>
          <div>
          
            <NavbarRightSite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

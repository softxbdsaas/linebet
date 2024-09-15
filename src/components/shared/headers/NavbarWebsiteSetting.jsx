import React from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavbarWebsiteSetting = () => {
  return (
    <div>
      <div className=" px-1 cursor-pointer  flex items-center rounded">
        <IoMdSettings className="text-[16px] hover:animate-spin duration-150 text-white" />
        <MdOutlineKeyboardArrowDown className="text-[20px] text-white" />
      </div>
    </div>
  );
};

export default NavbarWebsiteSetting;

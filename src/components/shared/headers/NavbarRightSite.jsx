import React from "react";
import { FaGift } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import NavbarWebsiteSetting from "./NavbarWebsiteSetting";
import TimeZone from "./TimeZone";
import LanguageSetting from "./languageSetting";
import { MdPhone } from "react-icons/md";

const NavbarRightSite = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="bg-button-base p-1 uppercase font-medium rounded md:p-2 text-[12px] sm:text-[14px]">
        make a deposit
      </button>
      <div className="flex items-center gap-4">
        {/* gift box  */}
        <div className="bg-light-base  p-2 rounded relative">
          <FaGift className="text-[16px] text-white " />
          <span className="  absolute top-1 right-1 w-[15px] flex justify-center items-center h-[15px] bg-button-base p-[2px] rounded-full text-white text-[12px]">
            1
          </span>
        </div>
        {/* email box  */}
        <div className="bg-light-base pr-1 pl-2 cursor-pointer py-[6px] flex items-center rounded">
          <MdEmail className="text-[20px] text-white" />
          <MdOutlineKeyboardArrowDown className="text-[20px] text-white" />
        </div>
        {/* users box  */}
        <div className="bg-light-base pr-1 pl-2 cursor-pointer py-[6px] flex items-center rounded">
          <FaRegUser className="text-[16px] text-white" />
          <MdOutlineKeyboardArrowDown className="text-[20px] text-white" />
        </div>
        {/* setting  options  */}

        <NavbarWebsiteSetting />
        <TimeZone />
        <LanguageSetting />
         {/* call  */}
         <div className="bg-light-base pr-1 pl-2 cursor-pointer py-[6px] flex items-center rounded">
          <MdPhone className="text-[18px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default NavbarRightSite;
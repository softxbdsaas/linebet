import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const HomeMobileForTab = () => {
  return (
    <div className=" pt-3">
      <div className=" flex justify-between gap-1 ">
        <div className=" w-full flex items-center justify-center  cursor-pointer  bg-primary-base rounded relative px-3 py-1">
          <p className=" w-full text-center uppercase text-[14px]">Live</p>
          <span className=" relative flex h-2 w-2  -mt-3  -ml-2">
            <span className="animate-ping absolute inline-flex h-full w-full   rounded-full bg-active-base opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-active-base "></span>
          </span>
        </div>
        <div className="w-full flex cursor-pointer items-center justify-center bg-primary-base rounded px-3 py-1">
          <p className=" uppercase  text-center text-[14px]">Sports</p>
        </div>
        <div className="w-full flex items-center cursor-pointer justify-center bg-primary-base rounded px-3 py-1">
          <IoIosStar className="text-[14px] font-medium  text-white-base" />
        </div>
        <div className="w-full flex items-center cursor-pointer justify-center bg-primary-base rounded px-3 py-1">
          <FaSearch className="text-[14px] font-medium text-white-base" />
        </div>
      </div>
    </div>
  );
};

export default HomeMobileForTab;

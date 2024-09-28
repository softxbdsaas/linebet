import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchMenu = () => {
  return (
    <div className=" bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-[#000] mx-2 py-2 rounded px-2">
      <div className={` flex items-center gap-2`}>
        <div>
          <IoSearchSharp className="text-[14px] font-medium" />
        </div>
        <div className=" w-[1px] h-[15px] bg-light-base"></div>
        <div  className=" w-full">
          <input
            className=" outline-0 border-0 w-full placeholder:text-[12px] placeholder:text-[#000] text-[12px] text-[#000] "
            type="search"
            placeholder="Search menu"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;

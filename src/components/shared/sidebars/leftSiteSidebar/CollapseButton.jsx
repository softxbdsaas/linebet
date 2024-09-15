import React from "react";
import { BiChevronsLeft } from "react-icons/bi";

const CollapseButton = () => {
  return (
    <div>
      <div className="  cursor-pointer flex items-center justify-center  hover:bg-primary-base bg-primary-base duration-150 gap-2 rounded py-2 px-1">
        <BiChevronsLeft className="text-[14px] md:text-[16px]" />
        <p className={`text-[14px] md:text-[16px] font-medium`}>
          Collapse Block
        </p>{" "}
      </div>
    </div>
  );
};

export default CollapseButton;

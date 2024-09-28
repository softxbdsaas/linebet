import React from "react";
import { BiChevronsLeft } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";

const CollapseButton = ({ toggleActionClick, status }) => {
  return (
    <>
      {status ? (
        <div
          onClick={toggleActionClick}
          className="  cursor-pointer flex items-center justify-center  hover:bg-primary-base bg-primary-base duration-150 gap-2 rounded py-2 px-1"
        >
          <p className={`text-[14px] md:text-[16px] font-medium`}>Pin block</p>{" "}
          <BiChevronsRight className="text-[14px] md:text-[16px]" />
        </div>
      ) : (
        <div
          onClick={toggleActionClick}
          className="  cursor-pointer flex items-center justify-center  hover:bg-primary-base bg-primary-base duration-150 gap-2 rounded py-2 px-1"
        >
          <BiChevronsLeft className="text-[14px] md:text-[16px]" />
          <p className={`text-[14px] md:text-[16px] font-medium`}>
            Collapse Block
          </p>{" "}
        </div>
      )}
    </>
  );
};

export default CollapseButton;

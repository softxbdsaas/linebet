"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdSportsEsports } from "react-icons/md";

const ESports = () => {
  return (
    <div className="flex group items-center cursor-pointer rounded hover:bg-white hover:text-black-base p-1  duration-500 gap-1">
      <MdSportsEsports className="text-[18px]" />
      <div className="h-full cursor-pointer">
        <div className={`h-full `}>
          <IoIosArrowDown
            className={` group-hover:rotate-180 duration-500 text-[16px] block `}
          />
        </div>
      </div>
    </div>
  );
};

export default ESports;

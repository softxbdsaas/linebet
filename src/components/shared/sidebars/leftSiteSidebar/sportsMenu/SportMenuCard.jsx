"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";

const SportMenuCard = ({ item }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="flex items-center text-black-base w-full">
        <div className="w-full px-2 border-b border-shape-base/70 flex justify-start items-center py-[6px] gap-2 cursor-pointer ">
          <MdSportsCricket className="text-[16px]" />
          <p className={`text-[12px] md:text-[14px] font-medium`}>
            {item?.name}
          </p>
        </div>
        <div
          onClick={() => setActive(!active)}
          className="h-full cursor-pointer border-b border-l  px-2 py-[8.5px] border-shape-base/70"
        >
          <div className={`h-full  `}>
            <IoIosArrowDown
              className={` ${
                active ? "rotate-180" : ""
              } duration-500 text-[16px] block text-black-base`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportMenuCard;

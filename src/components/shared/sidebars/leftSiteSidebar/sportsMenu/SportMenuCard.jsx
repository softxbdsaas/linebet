"use client";
import React, { act, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import TournamentsCard from "./TournamentsCard";
import { tournamentsData } from "../../../../../../public/database/tournamentsDB";

const SportMenuCard = ({ item }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-7  items-center text-black-base w-full">
        <div className="w-full col-span-6  hover:bg-light-muted duration-300 px-2 border-b border-shape-base/70 flex justify-start items-center py-[6px] gap-2 cursor-pointer ">
          <MdSportsCricket className="text-[16px]" />
          <p className={`text-[12px] md:text-[14px] font-medium`}>
            {item?.name}
          </p>
        </div>
        <div
          onClick={() => setActive(!active)}
          className={`h-full ${active ? "bg-light-muted" : ""} col-span-1 hover:bg-light-muted duration-300  cursor-pointer border-b border-l  px-2 py-[8.5px] border-shape-base/70`}
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
      {active ? (
        <>
          {" "}
          {tournamentsData?.map((item, index) => (
            <TournamentsCard item={item} key={index} />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default SportMenuCard;

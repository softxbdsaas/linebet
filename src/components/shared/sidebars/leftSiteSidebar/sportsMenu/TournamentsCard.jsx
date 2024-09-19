"use client";
import MatchCard from "@/components/cards/MatchCard";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const TournamentsCard = ({ item }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-7 items-center text-black-base w-full h-auto">
        <div className="w-full col-span-6 bg-light-muted hover:bg-light-muted duration-300 px-2 border-b border-white flex justify-start items-center py-[6px] gap-2 cursor-pointer ">
          <Image
            src={item?.image}
            width={15}
            height={15}
            className="w-[15px] h-[15px] rounded-full"
            alt="image"
          ></Image>
          <p className={`text-[12px] md:text-[14px] font-medium`}>
            {item?.name}
          </p>
        </div>
        <div className="col-span-1 h-full">
          <div
            onClick={() => setActive(!active)}
            className="!h-full flex justify-center items-center bg-light-muted duration-300  cursor-pointer border-b border-l  px-2 py-[8.5px] border-white"
          >
            <div className={`h-auto  `}>
              <IoIosArrowDown
                className={` ${
                  active ? "rotate-180" : ""
                } duration-500 text-[16px] block text-black-base`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* map match card  */}
      { active && Array.from({ length: 2 }, (_, i) => i + 1).map((item, index) => (
        <MatchCard key={index} />
      ))}
    </div>
  );
};

export default TournamentsCard;

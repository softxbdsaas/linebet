import LiveGameShortCard from "@/components/cards/LiveGameShortCard";
import React from "react";
import { FaOctopusDeploy } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const TopGames = () => {
  return (
    <div>
      <div className="flex items-center bg-primary-base justify-between gap-1 w-full px-2 py-[6px]">
        <div className="w-full flex justify-start items-center gap-1 ">
          <FaOctopusDeploy className="text-[16px]" />
          <p className={`text-[12px] md:text-[16px] font-medium`}>
            Recommended
          </p>
        </div>
        <div className="flex items-center gap-1">
          <FaAngleLeft className="text-[12px] opacity-75 hover:opacity-100 cursor-pointer duration-500" />
          <p className="text-sm font-normal">1/5</p>
          <FaAngleRight className="text-[12px] cursor-pointer  opacity-75 hover:opacity-0100 duration-500" />
        </div>
      </div>
      <div className="py-1">
        <LiveGameShortCard />
      </div>
    </div>
  );
};

export default TopGames;

import React from "react";
import SportMenuCard from "./SportMenuCard";
import { sportsMenuData } from "../../../../../../public/database/SportsMenu";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

const LiveSports = () => {
  return (
    <>
      {" "}
      <div className="flex items-center px-2 justify-between gap-2 py-2">
        <div className="flex items-center  gap-3  cursor-pointer text-[#000]">
          <h1 className="text-[14px] font-normal text-[#000]">
            {" "}
            <span className=" font-semibold">ALL</span> 980
          </h1>
          <div className="flex items-center gap-1">
            <MdOutlineLaptopChromebook className="text-[14px] font-normal" />
            <p className="text-[12px]">255</p>
          </div>
        </div>
        <TiWorld className="text-[18px] cursor-pointer text-[#000]" />
      </div>
      <div>
        <h1 className="text-black-base px-2 text-[14px] font-semibold py-1">
          {" "}
          Top{" "}
        </h1>
        {sportsMenuData?.top_sports?.map((item, index) => (
          <SportMenuCard item={item} key={index} />
        ))}
      </div>
      <div>
        <h1 className="text-black-base px-2 text-[14px] font-semibold py-1">
          Categories a to z
        </h1>
        {sportsMenuData?.categories_from_a_to_z?.map((item, index) => (
          <SportMenuCard item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default LiveSports;

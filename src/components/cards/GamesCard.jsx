import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const GamesCard = ({ item }) => {
  return (
    <div className=" group relative w-full border border-black-base cursor-pointer">
      <div className=" w-full">
        <Image
          width={250}
          height={250}
          className=" w-full"
          src={item?.image}
          alt="image"
        />
      </div>
      <div className="  group-hover:opacity-100 opacity-0 duration-500 ">
        <div className="bg-[#0000007a]  absolute  top-0 flex justify-center items-center w-full  h-full">
          <div className=" flex items-center gap-2">
            <div>
              <div className=" border-transparent h-[60px] w-[60px] animate-spin rounded-full border-[3px] border-t-shape-base border-b-shape-base"></div>
            </div>
          </div>
          <div className="absolute flex justify-center items-center h-full w-full">
            <FaPlay className="text-[12px] z-40 md:text-[20px]  text-slot_active-base" />
          </div>
        </div>
        <div className=" absolute top-0 flex justify-center items-center h-full    w-full">
          <div className=" border-transparent h-[74px] w-[74px] animate-spin  rotate-180  rounded-full border-[3px] border-t-white border-b-white"></div>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;

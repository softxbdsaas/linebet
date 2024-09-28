import Link from "next/link";
import React from "react";

const GamesHeader = () => {
  return (
    <div>
      <div className=" flex items-center overflow-x-auto gap-2 sm:gap-4 md:gap-6  py-1 md:py-4">
        <div>
          <Link
            href={"/"}
            className={`text-[10px] w-full sm:text-[15px]  xl:text-[18px]  text-slot_active-base uppercase`}
          >
            Slots
          </Link>
        </div>
        <div>
          <Link
            className={`w-full text-[10px] sm:text-[15px]  xl:text-[18px]  hover:text-slot_active-base duration-200 uppercase`}
            href={"/"}
          >
            live casino
          </Link>
        </div>
        <Link
          className={`text-[10px] sm:text-[15px]  xl:text-[18px]  hover:text-slot_active-base duration-200 uppercase`}
          href={"/"}
        >
          Promotions
        </Link>
        <Link
          className={`text-[10px] sm:text-[15px]  xl:text-[18px]  hover:text-slot_active-base duration-200 uppercase`}
          href={"/"}
        >
          Jetx
        </Link>
        <Link
          className={`text-[10px] sm:text-[15px]  xl:text-[18px]  hover:text-slot_active-base duration-200 uppercase`}
          href={"/"}
        >
          Aviatrix
        </Link>
      </div>
    </div>
  );
};

export default GamesHeader;

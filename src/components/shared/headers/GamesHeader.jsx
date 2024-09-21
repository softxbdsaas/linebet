import Link from "next/link";
import React from "react";

const GamesHeader = () => {
  return (
    <div>
      <div className=" flex items-center gap-4 md:gap-6 py-4">
        <Link
          href={"/"}
          className={`text-[15px] md:text-[18px]  text-slot_active-base uppercase`}
        >
          Slots
        </Link>
        <Link
          className={`text-[15px] md:text-[18px]  hover:text-slot_active-base duration-200 uppercase`}
          href={"/"}
        >
          live casino
        </Link>
        <Link
          className={`text-[15px] md:text-[18px]  hover:text-slot_active-base duration-200 uppercase`}
          href={"/"}
        >
          Promotions
        </Link>
        <Link
          className={`text-[15px] md:text-[18px]  hover:text-slot_active-base duration-200 uppercase`}
          href={"/"}
        >
          Jetx
        </Link>
        <Link
          className={`text-[15px] md:text-[18px]  hover:text-slot_active-base duration-200 uppercase`}
          href={"/"}
        >
          Aviatrix
        </Link>
      </div>
    </div>
  );
};

export default GamesHeader;

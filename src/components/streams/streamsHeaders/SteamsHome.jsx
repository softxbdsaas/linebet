import React from "react";
import { FaHome } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { FaFutbol } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";
import Link from "next/link";

const SteamsHome = () => {
  return (
    <div className=" bg-primary-base p-[9.5px] rounded-tl">
      <div className="flex items-center gap-1">
        <Link href={"/"}>
          <FaHome className="text-[16px]" />
        </Link>
        <MdChevronRight className="text-[16px] opacity-60" />
        <FaFutbol className="text-[16px] opacity-60" />
        <MdChevronRight className="text-[16px] opacity-60" />
        <BsFillTrophyFill className="text-[16px] opacity-60" />
      </div>
    </div>
  );
};

export default SteamsHome;

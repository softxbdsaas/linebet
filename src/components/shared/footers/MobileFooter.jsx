"use client";
import React from "react";
import { IoTrophySharp } from "react-icons/io5";
import { FaFutbol } from "react-icons/fa";
import { GiStickSplitting } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { mobileMenuToggle } from "@/redux/features/mobileMenuSlice";

const MobileFooter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="block lg:hidden   sticky  w-full bottom-0 bg-white text-black-base px-2 py-1 z-50">
        <div className=" text-black-base flex justify-between items-center">
          <Link
            href={"/"}
            className=" flex  flex-col justify-center items-center"
          >
            <IoTrophySharp className="text-[14px]" />
            <span className="text-[11px] font-normal">Sports</span>
          </Link>
          <Link
            href={"/"}
            className=" flex  flex-col justify-center items-center "
          >
            <FaFutbol className="text-[14px]" />
            <span className="text-[11px] font-normal">Casino</span>
          </Link>
          <Link
            href={"/"}
            className=" flex  flex-col justify-between  items-center gap-1"
          >
            <div className=" bg-light-muted p-2 rounded-full">
              <GiStickSplitting className="text-[14px] " />
            </div>
            <span className="text-[11px] text-[#000] font-medium">
              Bet slip
            </span>
          </Link>
          <div className=" flex  flex-col justify-center items-center ">
            <FaUser className="text-[14px]" />
            <span className="text-[11px] font-normal">Log in</span>
          </div>
          <div  onClick={()=>dispatch(mobileMenuToggle())} className=" flex cursor-pointer  flex-col justify-center items-center ">
            <IoMenu className="text-[14px]" />
            <span className="text-[11px] font-normal">Menu</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;

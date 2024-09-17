"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosSettings } from "react-icons/io";

const YourBet = () => {
  const [activeBet, setActiveBet] = useState("live");

  return (
    <div className="py-2 w-full">
      <div className="flex items-center w-full">
        <div
          onClick={() => setActiveBet("live")}
          className={`${
            activeBet == "live" ? " bg-light-base" : "bg-[#2D5822]"
          } cursor-pointer flex justify-center items-center  rounded-l-sm w-full py-2 `}
        >
          <span className="text-[14px] font-medium">Bet slip</span>{" "}
        </div>
        <div
          onClick={() => setActiveBet("sports")}
          className={`${
            activeBet == "sports" ? " bg-light-base" : " bg-[#2D5822]"
          } cursor-pointer  flex justify-center items-center w-full rounded-r-sm  py-2 `}
        >
          <span className="text-[14px] font-medium">My bets</span>{" "}
        </div>
      </div>

      {/* bet items  */}

      <div className=" bg-[#EBF2E9] text-black-base p-2 rounded-b">
        <div className="flex  items-center justify-between gap-2">
          <h1 className="text-[12px]  uppercase">Your bets</h1>
          <IoIosSettings className="text-[24px]  bg-white-base  rounded-full" />
        </div>
        {/* content  */}
        <div className=" px-2 sm:px-6 py-12 bg-white rounded mt-5 mb-2">
          <p className="text-center text-[10px]  sm:text-[12px]">
            Add events to the bet slip or enter a code to load events
          </p>
        </div>
        <div className=" border-t border-dashed  border-black-base py-2 my-2"></div>
        <div className=" grid grid-cols-2 items-center gap-1 py-3">
          <div>
            <div className=" border border-shape-base bg-white flex justify-evenly rounded">
              <button className="text-[20px]">-</button>
              <button className=" border-x border-shape-base px-5 text-[10px]  sm:text-[12px]">
                250
              </button>
              <button className="text-[20px]">+</button>
            </div>
          </div>
          <div>
            <div className="flex  items-center  justify-center  gap-3 w-full">
              <label class="relative inline-flex cursor-pointer items-center ">
                <input id="switch" type="checkbox" class="peer sr-only" />
                <label for="switch" class="hidden"></label>
                <div
                  class="peer h-[14px] w-[26px] rounded-full  bg-slate-200 after:absolute
                  after:left-[0px]  after:top-0 after:h-[14px] after:w-[14px] after:rounded-full after:border after:border-[#fff] after:bg-[#646464] 
                  peer-checked:after:bg-[#33cf2d]   peer-checked:right-1  after:transition-all after:content-[''] peer-checked:bg-[#32eb9556] peer-checked:after:translate-x-full peer-checked:after:border-[#268b40] peer-focus:ring-green-300"
                ></div>
              </label>
              <p className="text-[10px] md:text-[12px] font-normal">
                One-click
              </p>
            </div>
          </div>
        </div>
        {/* Save/load  events  */}
        <div className="py-1 text-center text-[12px]  underline sm:text-[14px] border-t   border-shape-base">
          <Link
            className="border-dotted border-2 border-sky-50 mt-1"
            href={"/Save/load events"}
          >
            Save/load events{" "}
          </Link>
        </div>
      </div>

      <div className="pt-2">
        <button className=" w-full cursor-pointer flex items-center justify-center uppercase hover:bg-primary-base bg-light-base duration-150 gap-2 rounded py-2 px-1">
          bet slip sale
        </button>
      </div>
    </div>
  );
};

export default YourBet;

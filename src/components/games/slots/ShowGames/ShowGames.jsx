"use client";
import React, { useState } from "react";
import AllGames from "../../gamesSections/AllGames";
import CategoryByGames from "../../gamesSections/CategoryByGames";
import { allGamesData } from "../../../../../public/database/allGamesDB";
import { IoMdSearch } from "react-icons/io";
import LeftSiteBar from "../LeftSiteBar/LeftSiteBar";
import { IoClose } from "react-icons/io5";

const ShowGames = () => {
  const [activeCategory, setActiveCategory] = useState(false);
  return (
    <>
      <div className=" w-full space-y-2 text-white">
        <div className=" flex items-center  justify-between gap-1">
          <fieldset className="w-full space-y-1 dark:text-gray-800 pb-3">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <IoMdSearch className=" text-[14px] md:text-[18px] text-black-muted" />
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-full py-2 pl-8 md:pl-10 text-sm border text-white  placeholder:text-black-muted border-black-muted outline-none  rounded bg-transparent sm:w-auto focus:outline-none "
              />
            </div>
          </fieldset>
          <button
            onClick={() => setActiveCategory(!activeCategory)}
            className="text-[12px] w-full text-end uppercase"
          >
            Category
          </button>
        </div>
        <CategoryByGames
          title={"New"}
          data={allGamesData}
          prev={"prev_new"}
          next={"next_new"}
        />
        <CategoryByGames
          title={"Popular"}
          data={allGamesData}
          prev={"prev_popular"}
          next={"next_popular"}
        />
        <CategoryByGames
          title={"Line Jackpot"}
          data={allGamesData}
          prev={"prev_jeckpot"}
          next={"next_jeckpot"}
        />
        <div className="pt-2">
          <AllGames />
        </div>
      </div>
      <div
        className={`fixed bg-slot_dark-base  top-14  pt-2 pb-6  left-0 h-screen border-r  overflow-y-auto  w-[95%]  transition-transform transform ${
          activeCategory
            ? "translate-x-0 z-[500] duration-500"
            : "-translate-x-full z-[500] duration-500"
        }`}
      >
        <div>
          <div
            onClick={() => setActiveCategory(!activeCategory)}
            className=" text-white hover:text-red-400  cursor-pointer duration-300 absolute right-2 top-2"
          >
            <IoClose className="text-[20px]" />
          </div>
        </div>
        <div className=" pt-3">
          <LeftSiteBar />
        </div>
      </div>
    </>
  );
};

export default ShowGames;

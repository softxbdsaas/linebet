import React from "react";
import AllGames from "../../gamesSections/AllGames";
import CategoryByGames from "../../gamesSections/CategoryByGames";
import { allGamesData } from "../../../../../public/database/allGamesDB";
import { IoMdSearch } from "react-icons/io";

const ShowGames = () => {
  return (
    <div className=" w-full space-y-2 text-white">
      <div>
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
                <IoMdSearch className="text-[18px] text-black-muted"/>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm border text-white  placeholder:text-black-muted border-black-muted outline-none  rounded bg-transparent sm:w-auto focus:outline-none "
            />
          </div>
        </fieldset>
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
  );
};

export default ShowGames;

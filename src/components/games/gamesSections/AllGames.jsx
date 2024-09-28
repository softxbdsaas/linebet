import React from "react";
import { allGamesData } from "../../../../public/database/allGamesDB";
import GamesCard from "@/components/cards/GamesCard";

const AllGames = () => {
  return (
    <div>
      <div>
        <h1 className="border-l-[2px] pl-2 border-slot_active-base py-1 text-white uppercase text-[14px] md:text-[22px]">
          All{" "}
        </h1>
      </div>

      <div className="grid grid-cols-3 w-full md:grid-cols-5 gap-2 mt-6">
        {allGamesData?.map((item, index) => (
          <GamesCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllGames;

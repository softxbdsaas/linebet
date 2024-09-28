import LeftSiteBar from "@/components/games/slots/LeftSiteBar/LeftSiteBar";
import ShowGames from "@/components/games/slots/ShowGames/ShowGames";
import SlotHero from "@/components/games/slots/SlotHero/SlotHero";
import GamesHeader from "@/components/shared/headers/GamesHeader";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" bg-slot_dark-base w-full px-1 md:px-2">
        <GamesHeader />
        <SlotHero />
        {/* games sections  */}
        <div className=" flex  items-start gap-4">
          <div className=" hidden  md:block w-[450px]">
            <LeftSiteBar />
          </div>
          <div className=" md:my-3 flex-1 w-full md:min-w-[500px]  mx-auto">
            <ShowGames />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

import React from "react";
import CollapseButton from "./CollapseButton";
import RecommendedSports from "./recommended/RecommendedSports";
import TopCompetitions from "./recommended/TopCompetitions";
import TopGames from "./recommended/TopGames";
import SportsMenu from "./sportsMenu/SportsMenu";

const  LeftSiteSidebar = () => {
  return (
    <div className={`w-[250px]`}>
      <CollapseButton />
      <div className="space-y-1 mt-2">
        <RecommendedSports />
        <TopCompetitions />
        <TopGames />
        <SportsMenu />
      </div>
     
    </div>
  );
};

export default LeftSiteSidebar;

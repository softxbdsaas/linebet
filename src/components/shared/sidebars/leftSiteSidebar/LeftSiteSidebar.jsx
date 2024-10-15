"use client";
import React from "react";
import CollapseButton from "./CollapseButton";
import RecommendedSports from "./recommended/RecommendedSports";
import TopCompetitions from "./recommended/TopCompetitions";
import TopGames from "./recommended/TopGames";
import SportsMenu from "./sportsMenu/SportsMenu";
import { useDispatch, useSelector } from "react-redux";
import { desktopLeftToggle } from "@/redux/features/LeftRightToggleSlice";
import LeftCollapseMenu from "./LeftCollapseMenu";

const LeftSiteSidebar = () => {
  const dispatch = useDispatch();
  const toggleActionClick = () => {
    dispatch(desktopLeftToggle());
  };
  const { desktopLeft } = useSelector((state) => state.leftRightToggle);
  return (
    <div
      className={`${
        desktopLeft ? "w-[65px]" : "w-[250px]"
      } max-h-screen overflow-y-auto selectBarScroll  hidden lg:block `}
    >
      {desktopLeft ? (
        <div className="cursor-pointer group">
          <div className="group-hover:hidden">
            <LeftCollapseMenu />
          </div>
          <div className="group-hover:block selectBarScroll   h-[95vh] overflow-y-auto bg-primary-muted hidden absolute  z-50">
            <CollapseButton
              status={true}
              toggleActionClick={toggleActionClick}
            />
            <div className="space-y-1 mt-2 ">
              <RecommendedSports />
              <TopCompetitions />
              <TopGames />
              <SportsMenu />
            </div>
          </div>
        </div>    
      ) : (
        <>
          <CollapseButton status={desktopLeft} toggleActionClick={toggleActionClick} />
          <div className="space-y-1 mt-2 ">
            <RecommendedSports />
            <TopCompetitions />
            <TopGames />
            <SportsMenu />
          </div>
        </>
      )}
    </div>
  );
};

export default LeftSiteSidebar;

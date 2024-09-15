"use client";
import React, { useState } from "react";
import LiveSports from "./LiveSports";
import Sports from "./Sports";

const SportsMenu = () => {
  const [activeSportMenu, setActiveSportMenu] = useState("live");
  return (
    <div>
      <div className="flex items-center w-full">
        <div
          onClick={() => setActiveSportMenu("live")}
          className={`${
            activeSportMenu == "live" ? " bg-light-base" : "bg-[#2D5822]"
          } cursor-pointer flex justify-center items-center gap-2 rounded-l-sm w-full py-2 `}
        >
          <span className="w-[8px] h-[8px] rounded-full bg-shape-base"></span>{" "}
          <span className="text-[14px] font-medium">LIVE</span>{" "}
        </div>
        <div
          onClick={() => setActiveSportMenu("sports")}
          className={`${
            activeSportMenu == "sports" ? " bg-light-base" : " bg-[#2D5822]"
          } cursor-pointer  flex justify-center items-center w-full rounded-r-sm  py-2 `}
        >
          <span className="text-[14px] font-medium">SPORTS</span>{" "}
        </div>
      </div>
      <div className="py-2 bg-white ">
       
        <div>
          {activeSportMenu == "live" ? <LiveSports /> : <Sports />}

          {/* top sports  */}
        </div>
      </div>
    </div>
  );
};

export default SportsMenu;

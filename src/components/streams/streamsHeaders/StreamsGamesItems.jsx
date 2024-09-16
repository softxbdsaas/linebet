"use client";
import React, { useState } from "react";
import { gamesItems } from "../../../../public/database/gamesItems";
import OthersSports from "./OthersSports";
import ESports from "./Esports";

const StreamsGamesItems = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-primary-base p-2 rounded-tr w-full">
      <div className="flex items-center gap-4">
        {gamesItems?.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(item?.id)}
            className={` ${active == item?.id  ? " text-white" : " text-white/80 "} relative cursor-pointer`}
          >
            <p className="text-[12px] font-normal">{item?.name}</p>
            {active == item?.id ? (
              <p
                className={`w-full  -bottom-3  p-[1px] bg-shape-base absolute`}
              ></p>
            ) : null}
          </div>
        ))}
         <div className="flex items-center gap-4">
         <OthersSports />
         <div className="w-[1px] h-[20px] bg-white/50"></div>
         <ESports />
         <div className="w-[1px] h-[20px] bg-white/50"></div>
         </div>
      </div>
    </div>
  );
};

export default StreamsGamesItems;

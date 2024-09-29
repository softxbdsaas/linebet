"use client";
import React, { useState } from "react";
const BetSelector = () => {
  const betAmount = [40, 323, 202, 300, 400, 250, 64, 23, 64, 23, 500];
  const [activeBet, setActiveBet] = useState(500);
  return (
    <div className=" bg-[#151937]  rounded-[20px] h-full p-2 md:p-4">
      <div className="flex   items-center  justify-around">
        <button className={` text-[18px] uppercase text-white `}>
          Stake selector
        </button>
        <button className={` text-[18px] uppercase text-white `}>
          Autobet
        </button>
      </div>
      <div>
        <div className="py-2">
          <h1 className="text-[16px] font-medium ">Bet</h1>
          <input
            type="number"
            className=" w-full  py-1 rounded mt-1 placeholder:text-black-base text-black-base px-2"
            placeholder="20"
          ></input>
        </div>
        {/* bet amount  */}
        <div className="flex items-center flex-wrap gap-2 pt-2">
          {betAmount?.map((item, index) => (
            <button
              onClick={() => setActiveBet(item)}
              className={`${
                activeBet == item ? "bg-[#f06514] " : "bg-black-muted"
              }  cursor-pointer px-4 py-1 rounded`}
              key={index}
            >
              {" "}
              {item}{" "}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetSelector;

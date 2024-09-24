import React from "react";
const BetSelector = () => {
  return (
    <div className=" bg-[#151937]  rounded-[20px] h-full">
      <div className="flex   items-center  justify-around">
        <button className={` text-[18px] uppercase text-white `}>Stake selector</button>
        <button className={` text-[18px] uppercase text-white `}>Autobet</button>
      </div>
    </div>
  );
};

export default BetSelector;

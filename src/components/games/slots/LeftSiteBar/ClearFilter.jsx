import React from "react";
import { CiClock1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

const ClearFilter = () => {
  return (
    <div>
      <h1 className=" text-[16px] text-black-muted text-end"> Clear Filter </h1>

      <div className=" flex justify-around gap-8 py-5 ">
        <div className="flex justify-center cursor-pointer flex-col gap-8 duration-300">
          <CiClock1 className="text-[60px] text-white/50" />
          <h1 className="text-[14px] text-center  uppercase"> Recent</h1>
        </div>
        <div className="flex justify-center text-black-muted hover:text-white cursor-pointer duration-300 flex-col gap-8">
          <CiStar className="text-[60px] " />
          <h1 className="text-[14px] text-center  uppercase"> Recent</h1>
        </div>
      </div>
     
    </div>
  );
};

export default ClearFilter;

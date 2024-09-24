"use client";
import React, { useState } from "react";
import { streamsEventData } from "../../../../public/database/eventData";
import { FaSearch } from "react-icons/fa";

const StreamsEvenItems = () => {
  const [active, setActive] = useState(1);
  return (
    <div className=" bg-primary-base p-[5px]  flex justify-between items-center  rounded-tr w-full">
      <div className="flex items-center gap-3">
        {streamsEventData?.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(item?.id)}
            className={`relative cursor-pointer`}
          >
            <p className="text-[12px] font-normal">{item?.name}</p>
            {active == item?.id ? (
              <p
                className={`w-full  -bottom-2  p-[1px] bg-shape-base absolute`}
              ></p>
            ) : null}
          </div>
        ))}
      </div>
      <div>
        <div className="relative ">
          <input
            type="search"
            name="search"
            placeholder="Search by match"
            className=" h-[23px] px-5 bg-primary-base  rounded text-[12px] focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-[8px] mr-4">
            <FaSearch className=" text-[12px] text-white"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreamsEvenItems;

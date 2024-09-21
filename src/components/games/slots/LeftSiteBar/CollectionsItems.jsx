"use client";
import React, { useState } from "react";
import { CollectionData } from "../../../../../public/database/collectionsDB";

const CollectionsItems = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className=" grid grid-cols-2 gap-3 md:gap-5 py-3">
        {CollectionData?.map((item, index) => (
          <div
            onClick={() => setActive(index)}
            key={index}
            className=" flex cursor-pointer items-center gap-2"
          >
            <div
              className={` ${
                active == index ? " bg-slot_active-base" : "bg-slot_dark-muted"
              } w-[12px]  h-[12px] rounded-full  `}
            ></div>
            <h1
              className={`${
                active == index ? " text-slot_active-base" : " text-white/60"
              } text-[14px] font-normal`}
            >
              {" "}
              {item?.name}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollectionsItems;

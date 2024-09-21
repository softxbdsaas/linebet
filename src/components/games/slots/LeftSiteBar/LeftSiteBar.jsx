import React from "react";
import ClearFilter from "./ClearFilter";
import CollectionsItems from "./CollectionsItems";
import Providers from "./Providers";

const LeftSiteBar = () => {
  return (
    <>
      <div className=" border border-black-base  my-3 rounded w-full">
        <div className="p-3">
          <ClearFilter />
        </div>
        <div className=" bg-slot_dark-muted text-white text-center py-[6px] border-y border-black-base">
          <p className="text-[16px] uppercase ">Collections</p>
        </div>
        <div className="p-3">
          <CollectionsItems />
        </div>
        <div className=" bg-slot_dark-muted text-white text-center py-[6px] border-y border-black-base">
          <p className="text-[16px] uppercase ">Providers</p>
        </div>
        <div className="">
          <Providers />
        </div>
      </div>
    </>
  );
};

export default LeftSiteBar;

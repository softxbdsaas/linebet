import React from "react";
import { FeatureData } from "../../../../public/database/FeatureDB";

const NavFeatureItems = () => {
  return (
    <>
      <div className="flex items-center gap-2 md:gap-3">
        {FeatureData?.slice(1,7)?.map((item, index) => (
          <div key={index} className=" cursor-pointer">
            <p className="text-[21px] md:text-[14px] font-medium">{item?.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavFeatureItems;

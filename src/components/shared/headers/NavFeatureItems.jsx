import React from "react";
import { FeatureData } from "../../../../public/database/FeatureDB";
import Link from "next/link";

const NavFeatureItems = () => {
  return (
    <>
      <div className=" hidden xl:flex items-center gap-2 md:gap-3">
        {FeatureData?.slice(1,15)?.map((item, index) => (
          <Link href={`${item?.url}`} key={index} className=" cursor-pointer">
            <p className="text-[12px] md:text-[14px] font-medium">{item?.name}</p>
          </Link>
        ))}
      </div>
      <div className="flex xl:hidden items-center gap-2 md:gap-3">
        {FeatureData?.slice(1,5)?.map((item, index) => (
          <Link href={`${item?.url}`} key={index} className=" cursor-pointer">
            <p className="text-[12px] md:text-[14px] font-medium">{item?.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavFeatureItems;

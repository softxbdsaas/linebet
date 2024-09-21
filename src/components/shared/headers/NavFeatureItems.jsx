import React from "react";
import { FeatureData } from "../../../../public/database/FeatureDB";
import Link from "next/link";

const NavFeatureItems = () => {
  return (
    <>
      <div className="flex items-center gap-2 md:gap-3">
        {FeatureData?.slice(1,10)?.map((item, index) => (
          <Link href={`${item?.url}`} key={index} className=" cursor-pointer">
            <p className="text-[21px] md:text-[14px] font-medium">{item?.name}</p>
          </Link>
        ))}
      </div>

    </>
  );
};

export default NavFeatureItems;

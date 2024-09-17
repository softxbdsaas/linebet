import Link from "next/link";
import React from "react";

const FooterItems = ({ title, data }) => {
  return (
    <div className=" ">
      <h1 className="text-[12px]  sm:text-[14px] font-medium uppercase">
        {title}
      </h1>
      {/* data info  */}
      <ul className="space-y-[3px] mt-3">
        {data?.map((item) => (
          <li key={item?.id}>
            <Link
              href={`/${item?.slug}`}
              className=" text-[10px] sm:text-[12px] font-normal capitalize"
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItems;

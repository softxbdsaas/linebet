import Link from "next/link";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";

const ExtraMenu = () => {
  return (
    <div className="text-white mt-2">
      <h1 className="text-[14px] px-2 uppercase font-medium"> Extra</h1>
      <div className="pt-2">
        <ul className="space-y-1">
          <Link
            href={"/office/account"}
            className="py-[6px] border-l-[2px] bg-light-base  px-2 border-active-base  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Invite friends</p>
            </div>
          </Link>
          <Link
            href={"/office/account"}
            className="py-[6px] px-2 hover:bg-light-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Casino VIP Cashback</p>
            </div>
          </Link>
          <Link
            href={"/office/account"}
            className="py-[6px] px-2 hover:bg-light-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Bonuses and gifts</p>
            </div>
          </Link>
          <Link
            href={"/office/account"}
            className="py-[6px] px-2 hover:bg-light-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Customer Support</p>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ExtraMenu;

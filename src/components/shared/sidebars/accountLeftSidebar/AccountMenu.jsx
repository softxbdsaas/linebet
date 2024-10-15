import Link from "next/link";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";

const AccountMenu = () => {
  return (
    <div className="text-white">
      <h1 className="text-[14px] px-2 uppercase font-medium"> account</h1>
      <div className="pt-2">
        <ul className="space-y-1">
          <Link
            href={"/office/recharge"}
            className="py-[6px] border-l-[2px] bg-light-base px-2 border-active-base  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Deposit</p>
            </div>
            <RiErrorWarningFill className="text-danger-base" />
          </Link>
          <Link
            href={"/office/recharge"}
            className="py-[6px] px-2 hover:bg-light-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Withdraw funds</p>
            </div>
          </Link>
          <Link
            href={"/office/account"}
            className="py-[6px] px-2 hover:bg-light-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Withdraw funds</p>
            </div>
          </Link>
          <Link
            href={"/office/account"}
            className="py-[6px] px-2 hover:bg-light-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Bet history</p>
            </div>
          </Link>
          <Link
            href={"/office/transaction-history"}
            className="py-[6px] px-2 hover:bg-light-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Transaction history</p>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AccountMenu;

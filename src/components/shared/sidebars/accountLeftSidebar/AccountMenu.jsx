"use client";
import { mobileAccountMenuToggle } from "@/redux/features/mobileMenuSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { useDispatch } from "react-redux";

const AccountMenu = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  return (
    <div className="text-white">
      <h1 className="text-[14px] px-2 uppercase font-medium"> account</h1>
      <div className="pt-2">
        <ul className="space-y-1">
          <Link
            onClick={() => dispatch(mobileAccountMenuToggle())}
            href={`/office/recharge`}
            className={` ${
              pathName == "/office/recharge"
                ? "bg-button-base border-danger-base  border-l-[2px]"
                : ""
            } py-[6px] hover:bg-button-base hover:border-danger-base  hover:border-l-[2px]  px-2   flex justify-between duration-200 items-center gap-1`}
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Deposit</p>
            </div>
            <RiErrorWarningFill className="text-danger-base" />
          </Link>
          <Link
            onClick={() => dispatch(mobileAccountMenuToggle())}
            href={"/office/withdrawals"}
            className={` ${
              pathName == "/office/withdrawals"
                ? "bg-button-base border-danger-base  border-l-[2px]"
                : "border-l-[2px] border-transparent"
            } py-[6px] hover:bg-button-base hover:border-danger-base  hover:border-l-[2px]  px-2   flex justify-between duration-200 items-center gap-1`}
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Withdraw funds</p>
            </div>
          </Link>

          <Link
            onClick={() => dispatch(mobileAccountMenuToggle())}
            href={"/office/transaction-history"}
            className={` ${
              pathName == "/office/transaction-history"
                ? "bg-button-base border-danger-base  border-l-[2px]"
                : "border-l-[2px] border-transparent"
            } py-[6px] hover:bg-button-base hover:border-danger-base  hover:border-l-[2px]  px-2   flex justify-between duration-200 items-center gap-1`}
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

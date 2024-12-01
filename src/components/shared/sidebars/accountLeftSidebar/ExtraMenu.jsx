"use client";
import { mobileAccountMenuToggle } from "@/redux/features/mobileMenuSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { useDispatch } from "react-redux";

const ExtraMenu = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  return (
    <div className="text-white mt-2">
      <h1 className="text-[14px] px-2 uppercase font-medium"> Extra</h1>
      <div className="pt-2">
        <ul className="space-y-1">
          <Link
            onClick={() => dispatch(mobileAccountMenuToggle())}
            href={"/office/account"}
            className="py-[6px]  px-2   flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Invite friends</p>
            </div>
          </Link>
          <Link
            onClick={() => dispatch(mobileAccountMenuToggle())}
            href={"/office/account"}
            className="py-[6px] px-2 hover:bg-button-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Casino VIP Cashback</p>
            </div>
          </Link>

          <Link
            onClick={() => dispatch(mobileAccountMenuToggle())}
            href={"/office/account"}
            className="py-[6px] px-2 hover:bg-button-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Bonuses and gifts</p>
            </div>
          </Link>
          <Link
            onClick={() => dispatch(mobileAccountMenuToggle())}
            href={"/office/account"}
            className="py-[6px] px-2 hover:bg-button-base duration-200  flex justify-between items-center gap-1"
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

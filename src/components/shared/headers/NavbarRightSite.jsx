"use client";
import React from "react";
import { FaGift } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import NavbarWebsiteSetting from "./NavbarWebsiteSetting";
import TimeZone from "./TimeZone";
import { MdPhone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { registerToggle } from "@/redux/features/registerSlice";
import Link from "next/link";
import LanguageSetting from "./LanguageSetting";
import { loginToggle } from "@/redux/features/loginSlice";
import LoginModal from "@/components/login/LoginModal";
import { mobileAccountMenuToggle } from "@/redux/features/mobileMenuSlice";
import { useGetBetterBalanceQuery } from "@/redux/api/authApi";


const NavbarRightSite = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetBetterBalanceQuery();
  return (
    <div className="flex items-center gap-2 relative">
      {user?.user_name ? (
        <>
          <div className="  flex   md:hidden items-center gap-2  ">
            <button className="px-3 py-[5px] bg-light-base rounded text-[14px]">
              {" "}
              {data?.data?.balance?.split(".")?.[0]} BDT{" "}
            </button>
            <button
              onClick={() => dispatch(mobileAccountMenuToggle())}
              className="bg-light-base pr-1 pl-2 cursor-pointer py-[6px] flex items-center rounded"
            >
              <FaRegUser className="text-[16px] text-white" />
              <MdOutlineKeyboardArrowDown className="text-[20px] text-white" />
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => dispatch(registerToggle())}
            className="bg-button-base  px-3 py-[6px] uppercase font-normal sm:font-medium rounded md:py-2 md:px-3 text-[12px] sm:text-[14px]"
          >
            Registration
          </button>
          <button
            onClick={() => dispatch(loginToggle())}
            className="bg-light-base  px-3 py-[6px] uppercase font-normal sm:font-medium rounded md:py-2 md:px-3 text-[12px] sm:text-[14px]"
          >
            Login
          </button>
        </>
      )}
      <LoginModal />
      <div className="  hidden lg:block">
        <div className="flex items-center gap-4">
          {user?.user_name && (
            <div className="bg-light-base text-center  px-2 py-[1px]  rounded relative">
              <p className="text-[10px] leading-[15px]">Main Balance </p>
              <p className="text-[11px] text-start -translate-y-1">
                {" "}
                {data?.data?.balance}{" "}
              </p>
            </div>
          )}

          {/* gift box  */}
          <div className="bg-light-base  p-2 rounded relative">
            <FaGift className="text-[16px] text-white " />
            <span className="  absolute top-1 right-1 w-[15px] flex justify-center items-center h-[15px] bg-button-base p-[2px] rounded-full text-white text-[12px]">
              1
            </span>
          </div>
          {/* email box  */}
          <div className="bg-light-base pr-1 pl-2 cursor-pointer py-[6px] flex items-center rounded">
            <MdEmail className="text-[20px] text-white" />
            <MdOutlineKeyboardArrowDown className="text-[20px] text-white" />
          </div>
          {/* users box  */}
          {user ? (
            <Link
              href={"/office/account"}
              className="bg-light-base hidden md:flex pr-1 pl-2 cursor-pointer py-[6px]  items-center rounded"
            >
              <FaRegUser className="text-[16px] text-white" />
              <MdOutlineKeyboardArrowDown className="text-[20px] text-white" />
            </Link>
          ) : null}

          {/* setting  options  */}

          <NavbarWebsiteSetting />
          <TimeZone />
          <LanguageSetting />
          {/* call  */}
          <div className="bg-light-base pr-1 pl-2 cursor-pointer py-[6px] flex items-center rounded">
            <MdPhone className="text-[18px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarRightSite;

"use client";
import React, { useState } from "react";
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
import { TbCurrencyDollar } from "react-icons/tb";
import { RiUpload2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoCaretUp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { MySwal } from "@/components/ui/toast/SweetAlert";
import Swal from "sweetalert2";
import { authKey } from "@/constants/authKey";
import Cookies from "js-cookie";
import { Sign_in_out } from "@/redux/features/authSlice";

const NavbarRightSite = () => {
  const dispatch = useDispatch();
  const { betterInfo } = useSelector((state) => state.auth);
  const { data } = useGetBetterBalanceQuery();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  
    const logoutUser = async () => {
      // Trigger a SweetAlert confirmation before logging out
      const result = await MySwal.fire({
        title: "Are you sure?",
        text: "You will be logged out.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!",
      });
  
      if (result.isConfirmed) {
        try {
          // Remove the cookie
  
          // Clear the user information from Redux
          Cookies.remove(authKey);
          dispatch(Sign_in_out());
          // Notify success using SweetAlert
          await Swal.fire({
            title: "Success",
            text: "Logout success",
            icon: "success",
            confirmButtonText: "Ok",
          });
  
          // Ensure everything is cleared before redirecting
          window.location.replace("/");
        } catch (error) {
          // Handle error if logout fails
          await Swal.fire({
            title: "Error",
            text: "Something went wrong during logout.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }
    };
  

  return (
    <div className="flex items-center gap-2 relative">
      {betterInfo?.user_name ? (
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
              <MdOutlineKeyboardArrowDown
                className={`duration-300 text-[20px] text-white `}
              />
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
          {betterInfo?.user_name && (
            <div className="bg-light-base text-center  px-2 py-[1px]  rounded relative">
              <p className="text-[10px] leading-[15px]">Main Balance </p>
              <p className="text-[11px] text-start -translate-y-1">
                {" "}
                {data?.data?.balance ? data?.data?.balance : "00:00" }{" "}
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
          {betterInfo ? (
            <div
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
              className="bg-light-base relative hidden md:flex pr-1 pl-2 cursor-pointer py-[6px]  items-center rounded"
            >
              <FaRegUser className="text-[16px] text-white" />
              <MdOutlineKeyboardArrowDown
                className={` ${
                  tooltipVisible == true ? "rotate-180" : ""
                } duration-500 text-[20px] text-white `}
              />

              {tooltipVisible && (
                <div className="absolute right-0 top-6 w-48  py-1  bg-transparent z-50 rounded shadow-lg">
                  <div className="bg-white text-black-base  mt-4  relative">
                    <div className="down absolute right-3">
                      <IoCaretUp className="text-[20px] w-full   text-white -mt-[13px]   -pr-10 " />
                    </div>

                    <div className=" border-b border-light hover:bg-light-muted duration-200 flex items-center justify-center gap-1  p-2 ">
                      <span className="h-5 w-5 flex-shrink-0 text-metal-500 transition duration-75">
                        <TbCurrencyDollar className="text-base" />
                      </span>
                      <Link
                        className=" flex-1 capitalize whitespace-nowrap text-[12px] md:text-sm font-medium"
                        href={"/office/recharge"}
                      >
                        Deposit
                      </Link>
                    </div>
                    <div className=" border-b border-light hover:bg-light-muted duration-200 flex items-center justify-center gap-1  p-2 ">
                      <span className="h-5 w-5 flex-shrink-0 text-metal-500 transition duration-75">
                        <RiUpload2Line className="text-base" />
                      </span>
                      <Link
                        className=" flex-1 capitalize whitespace-nowrap text-[12px] md:text-sm font-medium"
                        href={"/office/withdrawals"}
                      >
                        withdraw
                      </Link>
                    </div>
                    <div className=" border-b border-light hover:bg-light-muted duration-200 flex items-center justify-center gap-1  p-2 ">
                      <span className="h-5 w-5 flex-shrink-0 text-metal-500 transition duration-75">
                        <FaUser className="text-base" />
                      </span>
                      <Link
                        className=" flex-1 capitalize whitespace-nowrap text-[12px] md:text-sm font-medium"
                        href={"/office/account"}
                      >
                        personal profile
                      </Link>
                    </div>

                    <div className=" border-b border-light hover:bg-light-muted duration-200 flex items-center justify-center gap-1  p-2 ">
                      <span className="h-5 w-5 flex-shrink-0 text-metal-500 transition duration-75">
                        <CiSettings className="text-base" />
                      </span>
                      <Link
                        className=" flex-1 capitalize whitespace-nowrap text-[12px] md:text-sm font-medium"
                        href={"/"}
                      >
                        Setting account
                      </Link>
                    </div>
                    <div onClick={logoutUser} className=" border-b border-light hover:bg-light-muted duration-200 flex items-center  gap-1  p-2 ">
                      <span className="h-5 w-5 flex-shrink-0 text-metal-500 transition duration-75">
                        <IoMdLogOut className="text-base" />
                      </span>
                      <button className="capitalize whitespace-nowrap text-[12px] md:text-sm font-medium">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* setting  options  */}

          <NavbarWebsiteSetting />
          <TimeZone />
          <LanguageSetting />
          
        </div>
      </div>
    </div>
  );
};

export default NavbarRightSite;

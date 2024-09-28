"use client";
import moment from "moment";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import SearchMenu from "./SearchMenu";
import { MobileMenuData } from "@/utils/menu/MobileMenuData";
import MobileMenuCard from "@/components/menus/MobileMenuCard";
import { useDispatch, useSelector } from "react-redux";
import { mobileMenuToggle } from "@/redux/features/mobileMenuSlice";

const MobileMenu = () => {
  const { mobileMenuStatus } = useSelector((state) => state.mobileMenuToggle);
  const dispatch = useDispatch();
  return (
    <>
      {mobileMenuStatus ? (
        <div className=" fixed left-0 top-0 w-full h-full grid text-[#000] overflow-y-auto selectBarScroll  bg-light-muted backdrop-blur-sm z-[500]">
          <div className=" w-full">
            <div className="bg-white  w-full gap-2 px-2 py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {/* time zone  */}
                  <div className="  flex items-center gap-1">
                    <p className=" text-[] text-[14px]">
                      {moment().format("hh:mm")}
                    </p>
                    <MdOutlineKeyboardArrowDown className="text-[20px]" />
                  </div>
                  <div className="bg-light-base h-[15px] w-[1px]"></div>
                  <div className="flex items-center gap-1">
                    <p>En</p>
                    <MdOutlineKeyboardArrowDown className="text-[20px]" />
                  </div>
                </div>
                <div className=" flex items-center gap-2">
                  <div className=" w-[25px] cursor-pointer h-[25px] bg-light-muted flex justify-center items-center  rounded">
                    <IoIosSettings className="text-[14px]" />
                  </div>
                  <div
                    onClick={() => dispatch(mobileMenuToggle())}
                    className="cursor-pointer"
                  >
                    <IoClose className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <SearchMenu />
            </div>
            {/* top menu  */}
            <div className=" bg-white mt-2">
              {MobileMenuData?.tops?.map((item, index) => (
                <MobileMenuCard item={item} key={index} />
              ))}
            </div>

            <div>
              {/* Games menu  */}
              <p className="uppercase text-[12px] font-medium  py-[2px] px-2">
                Games
              </p>
              <div className=" bg-white ">
                {MobileMenuData?.games?.map((item, index) => (
                  <MobileMenuCard item={item} key={index} />
                ))}
              </div>
            </div>
            <div>
              {/* extra menu  */}
              <p className="uppercase text-[12px] font-medium  py-[2px] px-2">
                Extra
              </p>
              <div className=" bg-white ">
                {MobileMenuData?.extra?.map((item, index) => (
                  <MobileMenuCard item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MobileMenu;

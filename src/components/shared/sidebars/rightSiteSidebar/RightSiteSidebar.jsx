"use client";
import React from "react";
import YourBet from "./YourBet";
import BonusAccount from "./BonusAccount";
import DownloadSystems from "./DownloadSystems";
import DesktopRightCollapseMenu from "./DesktopRightCollapseMenu";
import { useDispatch, useSelector } from "react-redux";
import { BiChevronsLeft } from "react-icons/bi";
import { desktopRightToggle } from "@/redux/features/LeftRightToggleSlice";

const RightSiteSidebar = () => {
  const { desktopRight } = useSelector((state) => state.leftRightToggle);
  const dispatch = useDispatch();
  return (
    <div
      className={`${desktopRight ? "w-[50px]" : "w-[250px]"} hidden lg:block `}
    >
      {desktopRight ? (
        <div className="w-full mx-auto">
          <DesktopRightCollapseMenu dispatch={dispatch} />
        </div>
      ) : (
        <>
          <div>
            <div
              onClick={() => dispatch(desktopRightToggle())}
              className="  cursor-pointer flex items-center justify-center  hover:bg-primary-base bg-primary-base duration-150 gap-2 rounded py-2 px-1"
            >
              <BiChevronsLeft className="text-[14px] md:text-[16px]" />
              <p className={`text-[14px] md:text-[16px] font-medium`}>
                Collapse Block
              </p>{" "}
            </div>
          </div>
          <YourBet />
          <BonusAccount />
          <DownloadSystems />
        </>
      )}
    </div>
  );
};

export default RightSiteSidebar;

"use client";
import Profile from "@/components/accountCommonLayout/recharge/profile/Profile";
import React from "react";
import { useSelector } from "react-redux";
import AccountMenu from "./AccountMenu";
import ExtraMenu from "./ExtraMenu";
import ProfileMenu from "./ProfileMenu";
import Logout from "./Logout";
const MobileAccountSidebar = () => {
  const { mobileAccountMenuStatus } = useSelector(
    (state) => state.mobileMenuToggle
  );
  return (
    <div>
      <div className=" block md:hidden">
        <div
          className={`fixed  top-16  pt-2 pb-6  left-0 h-screen border-r border-primary-base  max-w-[375px] sm:w-[375px] bg-primary-base transition-transform transform ${
            mobileAccountMenuStatus
              ? "translate-x-0 z-[500] duration-500"
              : "-translate-x-full z-[500] duration-500"
          }`}
        >
          <div
            className={`w-full h-[87vh]  overflow-y-auto pr-1 selectBarScroll`}
          >
            <Profile />
            <div className="mt-2 py-2 rounded bg-primary-base h-[75vh] flex flex-col justify-between">
              <div>
                <AccountMenu />
                <ExtraMenu />
                <ProfileMenu />
              </div>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAccountSidebar;

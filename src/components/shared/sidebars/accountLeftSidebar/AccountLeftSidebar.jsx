import Profile from "@/components/accountCommonLayout/profile/Profile";
import React from "react";
import AccountMenu from "./AccountMenu";
import ExtraMenu from "./ExtraMenu";
import ProfileMenu from "./ProfileMenu";

const AccountLeftSidebar = () => {
  return (
    <div className={`w-[250px]`}>
      <Profile />
      <div className="mt-2 py-2 rounded bg-primary-base">
        <AccountMenu />
        <ExtraMenu />
        <ProfileMenu />
      </div>
    </div>
  );
};

export default AccountLeftSidebar;

import Profile from "@/components/accountCommonLayout/profile/Profile";
import React from "react";
import AccountMenu from "./AccountMenu";
import ExtraMenu from "./ExtraMenu";
import ProfileMenu from "./ProfileMenu";
import Logout from "./Logout";

const AccountLeftSidebar = () => {
  return (
    <div className={`w-[250px]`}>
      <Profile />
      <div className="mt-2 py-2 rounded bg-primary-base  h-[75vh] flex flex-col  justify-between">
        <div>
          <AccountMenu />
          <ExtraMenu />
          <ProfileMenu />
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default AccountLeftSidebar;

import Link from "next/link";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";

const ProfileMenu = () => {
  return (
    <div className="text-white mt-2">
      <h1 className="text-[14px] px-2 uppercase font-medium"> Profile</h1>
      <div className="pt-2">
        <ul className="space-y-1">
          <Link
            href={"/office/account"}
            className="py-[6px] hover:bg-light-base duration-300 flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Personal profile</p>
            </div>
            <RiErrorWarningFill className="text-danger-base" />
          </Link>
          <Link
            href={"/office/account"}
            className="py-[6px] hover:bg-light-base duration-300 flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Security</p>
            </div>
            <RiErrorWarningFill className="text-danger-base" />
          </Link>
          <Link
            href={"/office/account"}
            className="py-[6px] hover:bg-light-base duration-200  flex justify-between items-center gap-1"
          >
            <div className=" flex items-center gap-1">
              <BsCurrencyDollar />
              <p className="text-[14px] font-medium">Account setting</p>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;

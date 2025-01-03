"use client";
import { useGetUserInfoQuery } from "@/redux/api/authApi";
import React from "react";
import { FaGift } from "react-icons/fa6";
const FillInProfileProgress = () => {
  const { data: userInfoData } = useGetUserInfoQuery();

  return (
    <>
      <div className=" bg-white rounded mt-3">
        <div className="px-2 md:px-4 py-1 sm:py-3">
          {/* profile progress  */}
          <div className="flex items-center gap-3">
            <FaGift className="text-[16px] text-black-base" />
            <p className="text-[14px] md:text-[20px] font-medium text-black-base">
              Fill in Profile
            </p>
            <div className=" bg-light-muted px-3 py-[6px] rounded text-[12px]  text-black-base  inline-block">
              {" "}
              {userInfoData?.data?.profile_completion}%{" "}
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1  mt-1 md:mt-2">
          <div
            className="bg-light-base h-1 rounded-full"
            style={{ width: `${userInfoData?.data?.profile_completion}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default FillInProfileProgress;

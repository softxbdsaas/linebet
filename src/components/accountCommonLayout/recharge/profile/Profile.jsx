"use client";
import CircleProgress from "@/components/ui/progress/ProfileProgress";
import { useGetBetterBalanceQuery, useGetUserInfoQuery } from "@/redux/api/authApi";
import { mobileAccountMenuToggle } from "@/redux/features/mobileMenuSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [currentStep, setCurrentStep] = useState(1);
  const { data } = useGetBetterBalanceQuery();
  const { data: userInfoData } = useGetUserInfoQuery();

  const roundedPercentage = Math.round(userInfoData?.data?.profile_completion / 20) ;
  const totalSteps = 5;
  const dispatch = useDispatch();
  return (
    <div className=" bg-primary-base rounded">
      <div
        onClick={() => dispatch(mobileAccountMenuToggle())}
        className="bg-light-base p-2  flex justify-between flex-wrap items-center gap-3"
      >
        <div>
          <h1 className="text-[16px] tracking-wider capitalize font-semibold">
            {user?.name ? user?.name : "unknown name"}
          </h1>
          <p className="text-[12px] text-light-muted">
            {" "}
            {user?.email
              ? user?.email
              : user?.phoneNumber
              ? user?.phoneNumber
              : user?.user_name}
          </p>
        </div>
        <div>
          <CircleProgress currentStep={roundedPercentage} totalSteps={totalSteps} />
        </div>
      </div>

      <div className=" space-y-2 p-2">
        <div className="flex justify-between items-center gap-2">
          <p className="text-[14px] font-normal">Bonus points</p>
          <p className="text-[14px] font-normal">0</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="text-[14px] font-normal">Main account (BDT)</p>
          <p className="text-[14px] font-normal">{data?.data?.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

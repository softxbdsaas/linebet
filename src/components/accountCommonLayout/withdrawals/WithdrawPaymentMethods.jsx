"use client";
import React, { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  useGetAllPaymentMethodsQuery,
  useGetPaymentTypeQuery,
} from "@/redux/api/paymentApi";
import WithdrawMethodsMenu from "./WithdrawMethodsMenu";
import WithdrawMethodsItems from "./WithdrawMethodsItems";
import { useSelector } from "react-redux";

const WithdrawPaymentMethods = () => {
  const { data } = useGetPaymentTypeQuery();
  const { data: getAllPaymentMethods } = useGetAllPaymentMethodsQuery();
  const [showPaymentMethods, setShowPaymentMethods] = useState(0);
  const { betterInfo } = useSelector((state) => state.auth);
  return (
    <div className="bg-light-muted p-2">
      <div className=" bg-white p-2 md:p-4 ">
        <div>
          <div className="text-black-base b px-2">
            <h1 className="text-[16px] md:text-[22px] font-medium ">
              Account {betterInfo?.user_name}
            </h1>
            <p className="text-[12px]  md:text-[14px] font-normal py-1">
              Select payment method to top up your account:
            </p>
            <div className="flex items-center gap-2 mt-3">
              <input type="checkbox" className="p-2" name="" id="" />
              <p className="text-[12px]  md:text-[14px] font-normal">
                Payment systems in your region
              </p>
            </div>
          </div>
          {/* warning message  */}
          <div className="text-black-base flex items-start md:items-center gap-4  bg-gray-base px-2 py-4  mt-5 pb-2">
            <div>
              <RiErrorWarningFill className="text-white-base  text-[25px] md:text-[40px]  " />
            </div>
            <p className=" text-[11px] sm:text-[12px]  md:text-[14px] font-normal">{`সম্মানিত গ্রাহক, বাংলাদেশি সময় রাত ১২ টা থেকে সকাল ৮ টা পর্যন্ত সময়ে আপনার উইথড্রকৃত এমাউন্ট, যদি আপনার পারসোনাল ওয়ালেট এ ১২ ঘন্টার মধ্যে যুক্ত না হয় তাহলে " প্লেয়ার আইডি , আপনার পারসোনাল ওয়ালেট নাম্বার, সময়, তারিখ এবং প্লেয়ার একাউন্ট এর সাথে যুক্ত ইমেইল এ প্রাপ্ত উইথড্র রিকয়েস্ট নাম্বার" পর্যায়ক্রমিক ভাবে লিখে ইমেইলঃ solution24@pay-mybet27.com এ পাঠানোর জন্য অনুরোধ করা হচ্ছে । যত তাড়াতাড়ি সম্ভব আপনার ওয়ালেট এ উইথড্রকৃত ফান্ড পাঠানোর ব্যবস্থা করা হবে ।`}</p>
          </div>
        </div>
        {/* payment system  */}
        <div className="flex flex-col  lg:flex-row items-start gap-8 lg:gap-4 mt-5">
          <div className="w-full lg:w-[350px]">
            <WithdrawMethodsMenu
              setShowPaymentMethods={setShowPaymentMethods}
              getAllPaymentMethods={getAllPaymentMethods?.data}
              paymentTypes={data?.data}
            />
          </div>
          <div className=" w-full">
            <WithdrawMethodsItems
              showPaymentMethods={showPaymentMethods}
              paymentTypes={data?.data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPaymentMethods;

"use client";
import React, { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import OneClickForm from "./OneClickForm";
import PhoneNumberForm from "./PhoneNumberForm";
import EmailForm from "./EmailForm";
import SocialMediaForm from "./SocialMediaForm";

const MultipleRegisterTab = () => {
  const [activeTab, setActiveTab] = useState("one-click");
  return (
    <div className="pt-4">
      <div className="flex items-center gap-[2px]">
        <div
          onClick={() => setActiveTab("one-click")}
          className={`  ${
            activeTab == "one-click"
              ? " bg-light-base text-white"
              : " bg-light-muted text-black-base "
          }  flex justify-center  items-center gap-2   
          px-2 w-full sm:w-auto md:px-4 py-2 hover:bg-light-base hover:text-white cursor-pointer rounded-l overflow-hidden hover:opacity-80 duration-300`}
        >
          <BsLightningChargeFill className="text-[18px]" />
          <h2 className=" text-[10px] md:text-[13px] hidden sm:block font-medium uppercase">One-click</h2>
        </div>
        <div
          onClick={() => setActiveTab("by-phone")}
          className={`  ${
            activeTab == "by-phone"
              ? " bg-light-base text-white"
              : " bg-light-muted text-black-base "
          }  flex justify-center  items-center gap-2 
          px-2 w-full sm:w-auto md:px-4 py-2 hover:bg-light-base hover:text-white cursor-pointer hover:opacity-80 duration-300`}
        >
          <CiMobile1 className="text-[18px]" />
          <h2 className=" text-[10px] md:text-[13px] hidden sm:block font-medium uppercase">By phone</h2>
        </div>
        {/* by-email  */}
        <div
          onClick={() => setActiveTab("by-email")}
          className={`  ${
            activeTab == "by-email"
              ? " bg-light-base text-white"
              : " bg-light-muted text-black-base "
          }  flex justify-center  items-center gap-2   
          px-2 w-full sm:w-auto md:px-4 py-2 hover:bg-light-base hover:text-white cursor-pointer hover:opacity-80 duration-300`}
        >
          <MdEmail className="text-[18px]" />
          <h2 className=" text-[10px] md:text-[13px] hidden sm:block font-medium uppercase">by email</h2>
        </div>
        {/* social networks and messengers */}
        <div
          onClick={() => setActiveTab("social-networks")}
          className={`  ${
            activeTab == "social-networks"
              ? " bg-light-base text-white"
              : " bg-light-muted text-black-base "
          }  flex justify-center  items-center gap-2   
          px-2 w-full sm:w-auto md:px-4 py-2 hover:bg-light-base hover:text-white cursor-pointer rounded-r hover:opacity-80 duration-300`}
        >
          <FaUsers className="text-[18px]" />
          <h2 className=" text-[10px] md:text-[13px] hidden sm:block font-medium uppercase">
            Social networks and messengers{" "}
          </h2>
        </div>
      </div>

      {/* register component */}
      {activeTab == "one-click" && <OneClickForm />}
      {activeTab == "by-phone" && <PhoneNumberForm />}
      {activeTab == "by-email" && <EmailForm />}
      {activeTab == "social-networks" && <SocialMediaForm />}
    </div>
  );
};

export default MultipleRegisterTab;

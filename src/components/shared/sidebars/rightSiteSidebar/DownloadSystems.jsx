"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaAndroid } from "react-icons/fa";
import Image from "next/image";

const DownloadSystems = () => {
  const [activeBet, setActiveBet] = useState("android");
  return (
    <div>
      <div className="flex items-center w-full mt-2">
        <div
          onClick={() => setActiveBet("android")}
          className={`${
            activeBet == "android" ? " bg-light-base" : "bg-primary-base"
          } cursor-pointer flex justify-center items-center gap-2 rounded-l-sm w-full py-2 `}
        >
          <FaAndroid className="text-[14px]" />
          <span className="text-[14px] font-medium">Android</span>{" "}
        </div>
        <div
          onClick={() => setActiveBet("iso")}
          className={`${
            activeBet == "iso" ? " bg-light-base" : " bg-primary-base"
          } cursor-pointer  flex justify-center items-center w-full  py-2 `}
        >
          <span className="text-[14px] font-medium">IOS</span>{" "}
        </div>
        <button className="rounded-r-sm bg-light-base py-[10.5px]  px-3">
          <IoClose className="text-[16px]" />
        </button>
      </div>
      <div className=" bg-light-muted w-full px-2">
        <div className="grid grid-cols-2 items-start gap-2 pt-4">
          <div className=" h-full relative ">
            <svg
              className=" absolute bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="118"
              viewBox="0 0 101 118"
              fill="none"
            >
              <path
                d="M84.2848 0H16.1537C11.6353 0.271413 7.40647 2.31467 4.38583 5.68591C1.3652 9.05715 -0.203264 13.4841 0.0211521 18.0051V209.738C-0.203264 214.259 1.3652 218.685 4.38583 222.057C7.40647 225.428 11.6353 227.471 16.1537 227.743H84.2848C88.8032 227.471 93.032 225.428 96.0527 222.057C99.0733 218.685 100.642 214.259 100.417 209.738V18.0051C100.642 13.4841 99.0733 9.05715 96.0527 5.68591C93.032 2.31467 88.8032 0.271413 84.2848 0ZM93.2153 209.738C93.437 212.349 92.6259 214.943 90.9561 216.963C89.2864 218.983 86.8912 220.267 84.2848 220.541H16.1537C13.5473 220.267 11.1521 218.983 9.48234 216.963C7.81259 214.943 7.00148 212.349 7.22317 209.738V18.0051C7.00148 15.3938 7.81259 12.7997 9.48234 10.7798C11.1521 8.75998 13.5473 7.47543 16.1537 7.20202H27.1728V7.61973C27.1728 9.52982 27.9316 11.3617 29.2822 12.7123C30.6328 14.063 32.4647 14.8217 34.3748 14.8217H66.0637C67.9738 14.8217 69.8056 14.063 71.1563 12.7123C72.5069 11.3617 73.2657 9.52982 73.2657 7.61973V7.20202H84.2848C86.8912 7.47543 89.2864 8.75998 90.9561 10.7798C92.6259 12.7997 93.437 15.3938 93.2153 18.0051V209.738Z"
                fill="white"
              />
            </svg>
            <Image
              className="w-[65px] h-[65px] object-cover absolute  top-[80px] left-4"
              width={65}
              height={65}
              src={"https://i.ibb.co.com/5hF0vfV/image-8.png"}
              alt="image"
            />
          </div>
          <div>
            <div className="space-y-2">
              <Image
                className="w-[120px] mx-auto h-[55px]"
                height={80}
                width={120}
                src={
                  "https://i.ibb.co.com/0qmn96G/logo.png"
                }
                alt="image"
              />
              <h1 className="uppercase text-[14px] text-center text-black-base font-medium">
                mobile application
              </h1>
              <div className="  pb-2">
                <button className="bg-button-base w-full  px-2 py-1 rounded flex items-center gap-2">
                  <FaAndroid className="text-[16px]" />
                  <h1 className="text-[12px] leading-1 text-white text-start">
                    Free <br /> download
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSystems;

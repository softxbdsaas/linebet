import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const FooterCopyRight = () => {
  return (
    <div className="">
      <div className="grid  grid-cols-1 xl:grid-cols-5  items-center gap-2">
        <div className="  xl:col-span-3 h-full">
          <div className="bg-primary-base  text-center sm:text-start flex flex-col justify-center  rounded p-4 h-full w-full py-2 ">
            <div>
              <p className="text-[10px] sm:text-[12px] font-normal ">
                Copyright © 2019 - 2024 «mybet27».
              </p>
              <p className="text-[10px] sm:text-[12px] font-normal ">
                mybet27 uses cookies to ensure the best user experience. By
                remaining on the website, you consent to the use of your cookie
                files on mybet27. Find out more
              </p>
            </div>
          </div>
        </div>
        <div className=" xl:col-span-2 h-full">
          <div className=" grid sm:grid-cols-2 items-center gap-2 h-auto">
            <div className="px-4 bg-primary-base rounded h-full">
              <div className="flex items-center justify-center h-full gap-4">
                <MdOutlineSupportAgent className="text-[48px]" />
                <div className="text-center">
                  <h1 className="uppercase text-[14px] font-semibold">
                    Support
                  </h1>
                  <h1 className="text-[16px]">4951234567</h1>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center  gap-2 h-full ">
                <div className="flex items-center justify-center gap-3 py-3 w-full h-full rounded text-black-base bg-primary-base px-4">
                  <Link href={"/"} className=" p-2 bg-white rounded-full">
                    <FaTelegramPlane className="text-[16px]" />
                  </Link>
                  <Link href={"/"} className=" p-2 bg-white rounded-full">
                    <FaFacebookF className="text-[16px]" />
                  </Link>
                  <Link href={"/"} className=" p-2 bg-white rounded-full">
                    <FaXTwitter className="text-[16px]" />
                  </Link>
                  <Link href={"/"} className=" p-2 bg-white rounded-full">
                    <FaInstagram className="text-[16px]" />
                  </Link>
                </div>
                <div className=" min-w-[80px] h-full py-[18px] rounded flex justify-center items-center bg-primary-base px-2 ">
                  <h1 className="text-[12px] font-semibold">18+</h1>
                </div>
              </div>
              <div className=" bg-light-base rounded px-2 py-[9px]">
                <button className=" uppercase text-[12px]  block w-full font-medium">
                  Mobile version
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyRight;

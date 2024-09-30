// SocialIcons.js
"use client";
import React from "react";
import { IoLogoGoogle } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { signIn } from "next-auth/react";
const SocialIcons = () => {
  return (
    <div className="space-y-3 mt-3 mb-5">
      <p className="text-[14px] text-black-base text-center">
        {" "}
        Social networks{" "}
      </p>
      <div className="flex items-center justify-center gap-3">
        <div
          onClick={() => signIn("google")}
          className="cursor-pointer bg-light-muted p-2 rounded-full"
        >
          <IoLogoGoogle className="text-[16px] text-black-base" />
        </div>
        <div
          onClick={() => signIn("twitter")}
          className="cursor-pointer bg-light-muted p-2 rounded-full"
        >
          <FaXTwitter className="text-[16px] text-black-base" />
        </div>
        <div className="cursor-pointer bg-light-muted p-2 rounded-full">
          <FaTelegramPlane className="text-[16px] text-black-base" />
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;

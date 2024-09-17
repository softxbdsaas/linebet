import Image from "next/image";
import Link from "next/link";
import React from "react";

const BonusAccount = () => {
  return (
    <div className=" px-2 py-4 bg-bonus-card-gradient  relative overflow-hidden">
      <div className=" space-y-4">
        <h1 className="text-[14px] md:text-[16px] font-semibold uppercase">
          Bonus Account
        </h1>
        <p className="text-[12px] md:text-[14px] font-medium sm:max-w-[80%]">
          Activate your bonus in my account.
        </p>
        <Link
          className="text-[12px] block md:text-[14px] font-medium underline"
          href={"/"}
        >
          Find out more
        </Link>
        <button className="px-4 py-2 rounded block text-white text-[14px] uppercase font-medium bg-button-base text-center">
          activate
        </button>
      </div>
       {/* images   */}
      <Image
        className="w-[100px] h-[140px] absolute  right-2 top-4 object-cover"
        width={100}
        height={140}
        src={
          "https://i.ibb.co.com/TkLpn4f/ef43fa036d7405e0d539c0fcb2d037b0-1.png"
        }
        alt="image"
      />
       {/* button  svg  */}
      <div className=" absolute bottom-0  right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="195"
          height="72"
          viewBox="0 0 195 72"
          fill="none"
        >
          <path
            opacity="0.06"
            d="M195 98C195 152.124 151.348 196 97.5 196C43.6522 196 0 152.124 0 98C0 43.8761 43.6522 0 97.5 0C151.348 0 195 43.8761 195 98ZM33.0094 98C33.0094 133.8 61.8828 162.821 97.5 162.821C133.117 162.821 161.991 133.8 161.991 98C161.991 62.2002 133.117 33.1787 97.5 33.1787C61.8828 33.1787 33.0094 62.2002 33.0094 98Z"
            fill="white"
          />
        </svg>
      </div>
      {/* top svg  */}
      <div className=" absolute top-0  rotate-180 -right-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="195"
          height="72"
          viewBox="0 0 195 72"
          fill="none"
        >
          <path
            opacity="0.06"
            d="M195 98C195 152.124 151.348 196 97.5 196C43.6522 196 0 152.124 0 98C0 43.8761 43.6522 0 97.5 0C151.348 0 195 43.8761 195 98ZM33.0094 98C33.0094 133.8 61.8828 162.821 97.5 162.821C133.117 162.821 161.991 133.8 161.991 98C161.991 62.2002 133.117 33.1787 97.5 33.1787C61.8828 33.1787 33.0094 62.2002 33.0094 98Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default BonusAccount;

import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const TopMessage = () => {
  return (
    <div className="p-2 rounded bg-primary-base ">
      <div className="flex  items-center gap-1">
        <BsCurrencyDollar className="text-xl text-button-base" />
        <p className="text-white  text-[12px] md:text-[14px]">
          To discover the world of gaming and winning, top up your account using
          any payment method!
        </p>
      </div>
    </div>
  );
};

export default TopMessage;

import Image from "next/image";
import React from "react";

const PaymentMethodsCard = () => {
  return (
    <div className="w-[120px] cursor-pointer">
      <div className=" bg-white h-[80px] w-[120px]">
        <Image
          className="w-full h-[80px]  object-contain "
          width={120}
          height={120}
          src={
            "https://linebet.com/paysystems/xpay/images/money/bkash_linebet.png"
          }
          alt="image"
        ></Image>
      </div>
      <div className=" bg-light-base text-white text-[12px] py-[10px] font-medium text-center ">
        BKash
      </div>
    </div>
  );
};

export default PaymentMethodsCard;

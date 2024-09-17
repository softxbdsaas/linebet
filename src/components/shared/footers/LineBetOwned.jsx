import Image from "next/image";
import React from "react";

const LineBetOwned = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <div className="w-[100px] h-auto bg-primary-base my-2 p-4 rounded">
          <Image
            className="w-[60px] h-[60px] object-contain"
            width={60}
            height={60}
            src={
              "https://10f2d067-bcb5-4639-b2dc-6d4f404f2c56.snippet.antillephone.com/sealassets/ccf7dbe17364ed1a2eb40f4f12856a42-linebet.com-1253760146411bab348fb242bc7c0cc67f3bbd5cea1e428ce358687b1d8f4e1f15118cfd21cc541385dfc2c6e962139f-c2VhbC5wbmc%3D?status=valid"
            }
            alt="image"
          />
        </div>
        <div className="bg-primary-base rounded my-2 p-4 h-auto w-full flex justify-start items-center">
          <p className="text-[10px] sm:text-[12px] font-normal ">
            Linebet.com is owned and operated by ASPRO N.V as a License Holder
            (Curacao license 8048/JAZ2016-053). Talkeetna LTD (reg numder
            361115) and MINSI LTD (reg numder HE448325) provide processing
            services on the website as a Billing Agents . All rights reserved
            and protected by law.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineBetOwned;

import Image from "next/image";
import React from "react";
import CrashHistory from "./CrashHistory";
import BetSelector from "./BetSelector";

const CrashRocket = () => {
  return (
    <>
      <div>
        <div className=" w-full max-h-[500px]  rounded-[20px] overflow-hidden">
          <Image
            className="w-full object-contain rounded"
            width={1000}
            height={400}
            src={
              "https://i.ibb.co.com/WPQQqKV/Screenshot-2024-09-21-161350.png"
            }
            alt="image"
          />
        </div>
        {/* CrashHistory  */}
        <div className="grid  xl:grid-cols-2 2xl:grid-cols-3 gap-2 mt-4">
          <div className=" hidden xl:block  2xl:col-span-2">
            <CrashHistory />
          </div>
          <div>
            <BetSelector />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrashRocket;

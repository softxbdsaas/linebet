import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

const LiveGameShortCard = () => {
  return (
    <div className="bg-white text-black-base p-1 sm:p-2">
      <div className=" space-y-1">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              width={16}
              height={16}
              src={"https://i.ibb.co.com/KW9CC28/ph-soccer-ball-fill.png"}
              alt="image"
            />
            <p className="text-[12px]">Japan. J-League</p>
          </div>
          <FaRegStar className="text-[14px]  cursor-pointer text-primary-base" />
        </div>
        <p className="text-[11px] text-light-base">
          1 Half, 4 minutes / Round 27
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              width={16}
              height={16}
              src={
                "https://v3.traincdn.com/resized/size14/sfiles/logo_teams/9a616b1d2615c99b951b98fb50146f00.webp"
              }
              alt="image"
            />
            <p className="text-[12px]">Machida Zelivia</p>
          </div>
          <p className="text-[12px  font-medium">1</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              width={16}
              height={16}
              src={
                "https://v3.traincdn.com/resized/size14/sfiles/logo_teams/f500d4a7bd4b44c699e37aaba8a59d71.webp"
              }
              alt="image"
            />
            <p className="text-[12px]">Jublio Iwata</p>
          </div>
          <p className="text-[12px font-medium">0</p>
        </div>
        {/* lock unlock bet   */}
        <div className=" flex flex-wrap justify-between items-center gap-2">
          <div className=" bg-light-muted p-2 opacity-90 cursor-pointer rounded flex justify-between items-center gap-2">
            <div className=" flex items-center gap-1">
              <FaLock className="text-[12px] " />
              <span className="text-[12px] font-medium">W1</span>
            </div>
            <p className="text-[12px] font-normal">1.15</p>
          </div>
          <div className=" bg-light-muted p-2 opacity-90 cursor-pointer rounded flex justify-between items-center gap-2">
            <div className=" flex items-center gap-1">
              <FaLock className="text-[12px] " />
              <span className="text-[12px] font-medium">W2</span>
            </div>
            <p className="text-[12px] font-normal">2.15</p>
          </div>
          <div className=" bg-light-muted p-2 opacity-90 cursor-pointer rounded flex justify-between items-center gap-2">
            <div className=" flex items-center gap-1">
              <FaLock className="text-[12px] " />
              <span className="text-[12px] font-medium">W1</span>
            </div>
            <p className="text-[12px] font-normal">1.15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveGameShortCard;

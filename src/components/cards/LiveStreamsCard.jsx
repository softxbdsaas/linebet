import Image from "next/image";
import React from "react";
import { FaFutbol } from "react-icons/fa";

const LiveStreamsCard = () => {
  return (
    <div className=" bg-white text-[#000000]">
      {/* card header  */}
      <div className=" grid grid-cols-3 bg-light-muted p-2">
        <div className=" col-span-1">
          <div className="flex items-center gap-2  ">
            <FaFutbol className="text-[14px]" />
            <Image
              className="w-4 h-4 rounded-full object-cover"
              width={16}
              height={16}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZUHw_lbYQKcGEJLkkrM7KkiBawky-bj7wA&s"
              }
              alt="image"
            />
            <p className="text-[10px] sm:text-[12px]">
              ICC Cricket World Cup. League 2
            </p>
          </div>
        </div>
        <div className=" col-span-2">
          <div>
            <div>1</div>
            <div>X</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamsCard;

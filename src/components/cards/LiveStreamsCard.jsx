import Image from "next/image";
import React from "react";
import { FaFutbol } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsPinAngleFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { MdSportsCricket } from "react-icons/md";

const LiveStreamsCard = () => {
  return (
    <div className=" bg-white text-[#000000]">
      {/* card header  */}
      <div className="grid grid-cols-3 items-center bg-light-muted p-2">
        <div className="col-span-1">
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
        <div className="col-span-2">
          <div className="w-full">
            <div className="flex items-center gap-2 w-full">
              <div className="grid grid-cols-3 w-full">
                <div className="flex justify-around  items-center gap-1">
                  <p className="text-[10px] sm:text-[12px]">1</p>
                  <p className="flex flex-col items-center">
                    <span className="block text-[10px]  md:text-[12px]">X</span>
                    <IoIosArrowDown className="text-[14px]" />
                  </p>
                  <p className="text-[10px] sm:text-[12px]">2</p>
                </div>
                <div className="flex justify-around  items-center gap-1">
                  <p className="text-[10px] sm:text-[12px]">1</p>
                  <p className="flex flex-col items-center">
                    <span className="block text-[10px]  md:text-[12px]">
                      Team Wins
                    </span>
                    <IoIosArrowDown className="text-[14px]" />
                  </p>
                  <p className="text-[10px] sm:text-[12px]">2</p>
                </div>
                <div className="flex justify-around  items-center gap-1">
                  <p className="text-[10px] sm:text-[12px]">1</p>
                  <p className="flex flex-col items-center">
                    <span className="block text-[10px]  md:text-[12px] ">
                      IT1
                    </span>
                    <IoIosArrowDown className="text-[14px]" />
                  </p>
                  <p className="text-[10px] sm:text-[12px]">2</p>
                </div>
              </div>
              <div className="min-w-[80px]">
                <p className="text-[10px] text-center sm:text-[12px]">+5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center  p-2 gap-4">
        {/* team ui  */}
        <div className="py-2 col-span-1">
          <div className="flex items-start gap-2 w-full">
            <div className=" flex  flex-col gap-2 mt-1 border-r border-spacing-0  px-2">
              <BsPinAngleFill className="text-[14px]" />
              <CiStar className="text-[14px] text-primary-base" />
            </div>
            {/* teams  */}
            <div className="space-y-1 w-full">
              <div className=" flex justify-between items-center gap-1">
                <div className=" flex justify-start items-center gap-1">
                  <TbWorld className="text-[12px]" />
                  <p className="text-[10px] sm:text-[12px]">
                    Australia A (Women)
                  </p>
                </div>
                <p className="text-[10px] sm:text-[12px]">0/0</p>
              </div>
              <div className=" flex justify-between items-center gap-1">
                <div className=" flex justify-start items-center gap-1">
                  <TbWorld className="text-[12px]" />
                  <p className="text-[10px] sm:text-[12px]">India A (Women)</p>
                </div>
                <p className="flex items-center gap-1">
                  <MdSportsCricket className="text-[12px]" />{" "}
                  <span className="text-[10px] sm:text-[12px]">65/2</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* result ui  */}
        <div className=" col-span-2">
          <div className="flex items-center  gap-1">
            <div className=" grid grid-cols-3 gap-2  w-full">
              <div className="flex items-center justify-around border-x border-shape-base">
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    23
                  </button>
                </div>
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    23
                  </button>
                </div>
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    23
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-around border-r border-shape-base">
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    23
                  </button>
                </div>
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    23
                  </button>
                </div>
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    -
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-around border-r border-shape-base">
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    -
                  </button>
                </div>
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    23
                  </button>
                </div>
                <div>
                  <button className="bg-light-muted text-[10ox] min-w-[35px] sm:min-w-[50px] sm:text-[12px] py-2 px-2 sm:px-3 rounded">
                    23
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-[80px]">
              <p className="text-[10ox] text-center sm:text-[12px]">+25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamsCard;

import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaOctopusDeploy } from "react-icons/fa";
import { BiChevronsRight } from "react-icons/bi";
import { sportsMenuData } from "../../../../../public/database/SportsMenu";
import Image from "next/image";

const LeftCollapseMenu = () => {
  return (
    <div className="w-[40px] mx-auto">
      <div className=" bg-primary-base p-2 w-full h-[35px] flex justify-center items-center rounded">
        <BiChevronsRight className="text-[16px]" />
      </div>
      <div className="space-y-1 mt-3">
        <div className=" bg-primary-base p-2 w-full h-[35px] flex justify-center items-center rounded">
          <AiFillLike className="text-[16px]" />
        </div>
        <div className=" bg-primary-base p-2 w-full h-[35px] flex justify-center items-center rounded">
          <FaOctopusDeploy className="text-[16px]" />
        </div>
      </div>
      {/* all spots menu  */}

      <div>
        <div className="rounded overflow-hidden mt-3">
          <div className=" bg-primary-base  w-full h-[40px] flex justify-center items-center ">
            <span className=" block w-[7px] h-[7px] rounded-full bg-active-base"></span>
          </div>
          <div className=" bg-white text-center  bg-light-muted text-black-base w-full">
            <div className=" bg-light-muted py-1">
              <p className="text-[14px] font-normal ">980</p>
            </div>
            <div className=" space-y-2 mt-2">
              {sportsMenuData?.top_sports?.map((item, index) => (
                <div key={index} className="border-b border-light-bas pb-2">
                  <Image
                    width={15}
                    height={15}
                    className=" w-[15px] mx-auto h-[15px]"
                    src={item?.image}
                    alt="image"
                  />
                </div>
              ))}
            </div>
            <div className=" space-y-2 mt-2">
              {sportsMenuData?.categories_from_a_to_z?.map((item, index) => (
                <div key={index} className="border-b border-light-bas pb-2">
                  <Image
                    width={15}
                    height={15}
                    className=" w-[15px] mx-auto h-[15px]"
                    src={item?.image}
                    alt="image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCollapseMenu;

import { desktopRightToggle } from "@/redux/features/LeftRightToggleSlice";
import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { IoPhonePortraitOutline } from "react-icons/io5";

const DesktopRightCollapseMenu = ({ dispatch }) => {
  return (
    <div className="  w-[50px]  mx-auto ">
      <div className=" flex flex-col items-center">
        <div
          onClick={() => dispatch(desktopRightToggle())}
          className=" bg-primary-base p-2 w-full h-[35px] flex justify-center items-center rounded"
        >
          <BiChevronsRight className="text-[16px]" />
        </div>
        <div className="pt-10">
          <button className="text-[16px] h-full  rounded p-2 font-normal bg-button-base rotate-90 ">
            {" "}
            Registration
          </button>
        </div>
        <div className="mt-10">
          <div className="pt-8">
            <button className="text-[16px] h-full  rounded p-2 font-normal bg-primary-base rotate-90 ">
              Betspit
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="">
            <button className="text-[16px] h-full  rounded p-2 font-normal bg-primary-base ">
              <IoPhonePortraitOutline className="text-[20px] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopRightCollapseMenu;

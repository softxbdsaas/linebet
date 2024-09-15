import moment from "moment";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TimeZone = () => {
  return (
    <>
      <div className=" border-x border-white pr-1 pl-2 cursor-pointer  flex items-center gap-1">
        <p className=" text-[] text-[14px]">{moment().format("hh:mm")}</p>
        <MdOutlineKeyboardArrowDown className="text-[20px] text-white" />
      </div>
    </>
  );
};

export default TimeZone;

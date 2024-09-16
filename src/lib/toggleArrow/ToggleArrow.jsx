import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const ToggleArrow = ({ active, setActive }) => {
  return (
    <div
      onClick={() => setActive(!active)}
      className="h-full cursor-pointer  p-2 bg-primary-base"
    >
  
      <div className={`h-full `}>
        <IoIosArrowDown
          className={` ${active ? "rotate-180" : ""} duration-500 text-[20px] block text-white`}
        />
      </div>
    </div>
  );
};

export default ToggleArrow;

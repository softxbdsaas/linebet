"use client";
import ToggleArrow from "@/lib/toggleArrow/ToggleArrow";
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const RecommendedSports = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex items-center gap-1 w-full">
      <div className="w-full flex justify-start items-center  bg-primary-base gap-1  px-2 py-[6px]">
        <AiFillLike className="text-[16px]" />
        <p className={`text-[12px] md:text-[16px] font-medium`}>Recommended</p>
      </div>
      <ToggleArrow active={active} setActive={setActive} />
    </div>
  );
};

export default RecommendedSports;

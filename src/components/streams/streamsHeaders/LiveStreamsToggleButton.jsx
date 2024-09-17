import React from "react";

const LiveStreamsToggleButton = () => {
  return (
    <div>
      <div className="flex  items-center  bg-primary-base px-2 py-[12px] gap-3 w-full">
        <label class="relative inline-flex cursor-pointer items-center ">
          <input id="switch" type="checkbox" class="peer sr-only" />
          <label for="switch" class="hidden"></label>
          <div
            class="peer h-[14px] w-[26px] rounded-full  bg-slate-200 after:absolute
         after:left-[0px]  after:top-0 after:h-[14px] after:w-[14px] after:rounded-full after:border after:border-[#fff] after:bg-[#646464] 
        peer-checked:after:bg-[#33cf2d] 
        peer-checked:right-1
       
        after:transition-all after:content-[''] peer-checked:bg-[#32eb9556] peer-checked:after:translate-x-full peer-checked:after:border-[#268b40] peer-focus:ring-green-300"
          ></div>
        </label>
        <p className="text-[10px] md:text-[12px] font-normal">
          With live streams
        </p>
      </div>
    </div>
  );
};

export default LiveStreamsToggleButton;

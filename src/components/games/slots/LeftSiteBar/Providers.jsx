import React from "react";
import { providersData } from "../../../../../public/database/providersDB";
import Image from "next/image";

const Providers = () => {
  return (
    <div>
      <div className=" border-b border-black-base ">
        <input
          type="text"
          placeholder="SEARCH BY PROVIDERS"
          className="placeholder:text-black-muted placeholder:text-[14px] text-[12px] text-white/60  px-3 py-2 bg-transparent outline-none border-none"
          name=""
          id=""
        />
      </div>
      {/* provider items  */}
      <div className="p-3">
        <div className="grid grid-cols-3 gap-[6px]">
          {providersData?.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer max-h-[103px] w-full rounded"
            >
              <Image
                className="  h-full w-full "
                width={150}
                height={150}
                src={item?.image}
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Providers;

import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className=" bg-primary-base rounded">
      <div className="bg-light-base p-2  flex justify-between items-center gap-3">
        <div>
          <h1 className="text-[16px] tracking-wider font-semibold">Shamim</h1>
          <p className="text-[12px] text-light-muted">shamim@gmail.com</p>
        </div>
        <div>
          <Image
            className="w-[80px] h-[80px] rounded-full"
            width={80}
            height={80}
            src={
              "https://i.ibb.co.com/P1JYx3Z/Screenshot-2024-09-18-160022.png"
            }
            alt="image"
          />
        </div>
      </div>
      <div className=" space-y-2 p-2">
        <div className="flex justify-between items-center gap-2">
          <p className="text-[14px] font-normal">Bonus points</p>
          <p className="text-[14px] font-normal">0</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="text-[14px] font-normal">Main account (BDT)</p>
          <p className="text-[14px] font-normal">0</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

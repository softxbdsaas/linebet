import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileGamesCard = ({ item }) => {
  return (
    <div>
      <div className="bg-light-base rounded overflow-hidden">
        <Link href={"/"}>
          <div>
            <Image
              className="w-full h-[102px]"
              width={400}
              height={102}
              src={item?.image}
              alt="image"
            />
          </div>
          <h1 className="text-[10px] sm:text-[12px] text-center px-2 py-[7px] capitalize">
            {item?.name}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default MobileGamesCard;

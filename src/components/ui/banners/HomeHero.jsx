"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { banners } from "../../../../public/database/banners";

// import required modules
const HomeHero = () => {
  return (
    <>
      <div className=" w-full">
        <div className="my-4 px-3 w-full overflow-hidden">
          {banners?.map((banner, index) => (
            <div key={index}>
              {/* banner image  */}
              <Image
                src={banner?.banner}
                className="w-full"
                width={1000}
                height={280}
                alt="banner image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeHero;

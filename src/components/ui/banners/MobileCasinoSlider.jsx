"use client";
import React from "react";
import { gamesData } from "../../../../public/database/gamesDB";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const MobileCasinoSlider = () => {
  return (
    <div className=" w-full pt-2">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={6}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="h-full"
      >
        {gamesData?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-white w-[120px] h-full text-black-base rounded"
          >
            <div>
              <Link href={"/slots"} className=" block w-full">
                <div className="w-full">
                  <Image
                    className="w-full h-[60px]"
                    width={400}
                    height={80}
                    src={item?.image}
                    alt="image"
                  />
                </div>
                <h1 className="text-[10px] sm:text-[12px]  text-center  py-[2px] px-[2px] capitalize">
                  {item?.name?.slice(0,15)}...
                </h1>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileCasinoSlider;

"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { banners } from "../../../../public/database/banners";
import Link from "next/link";

const MobileHomeHero = () => {
  return (
    <div>
      <div className="relative w-full  ">
        {/* Swiper Slider */}
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={4}
          spaceBetween={6}
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 8,
            },
          }}
          modules={[Pagination, Autoplay]}
          className=" h-full"
        >
          {banners?.map((banner, index) => (
            <SwiperSlide
              key={index}
              className=" h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-[3px] bg-white text-black-base text-center  rounded-lg overflow-hidden"
            >
              <Link href={'/slots'} className=" h-ful">
                <div className="w-full h-[75px] rounded-lg overflow-hidden">
                  <Image
                    className="w-full overflow-hidden  object-cover   h-full"
                    width={908}
                    height={248}
                    src={banner?.image}
                    alt="image"
                  />
                </div>
                <p className="text-[10px] text-[#000] "> {banner?.name} </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MobileHomeHero;

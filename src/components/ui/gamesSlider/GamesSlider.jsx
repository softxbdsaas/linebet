"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import VideGamesCard from "@/components/cards/VideGamesCard";
import { gamesData } from "../../../../public/database/gamesDB";
import { IoIosArrowForward } from "react-icons/io";

const GamesSlider = () => {
  return (
    <div className="py-1">
      <div className="relative w-full overflow-hidden">
        {/* Swiper Slider */}
        <Swiper
          navigation={{
            prevEl: ".custom-swiper-button-prev-games",
            nextEl: ".custom-swiper-button-next-games",
          }}
          slidesPerView={2}
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
            1024: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            1920: {
              slidesPerView: 7,
              spaceBetween: 8,
            },
            2560: {
              slidesPerView: 10,
              spaceBetween: 8,
            },
          }}
          loop={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="swiper games-swiper-container  h-[156px]"
        >
          {gamesData?.map((item, index) => (
            <SwiperSlide className="pt-2" key={index}>
              <VideGamesCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="md:block hidden">
          <div className="custom-swiper-button-prev-games cursor-pointer absolute top-0 left-1 flex items-center h-full z-40">
            <div className="bg-black-muted w-[32px] h-[32px] rounded opacity-70 hover:opacity-100 flex justify-center items-center">
              <IoIosArrowForward className="text-[16px] rotate-180" />
            </div>
          </div>
          <div className="custom-swiper-button-next-games cursor-pointer absolute top-0 right-1 flex items-center h-full z-40">
            <div className="bg-black-muted w-[32px] h-[32px] rounded opacity-70 hover:opacity-100 flex justify-center items-center">
              <IoIosArrowForward className="text-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesSlider;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { gamesData } from "../../../../public/database/gamesDB";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HomeGamesSlider = ({ title }) => {
  return (
    <div className="pt-3">
      <div className=" flex justify-between  items-center gap-2">
        <h1 className=" uppercase text-[12px] font-medium">{title}</h1>
        <Link
          href={"/"}
          className="flex text-[10px] uppercase items-center gap-1"
        >
          <span>More</span>
          <MdKeyboardDoubleArrowRight className="text-[14px]" />{" "}
        </Link>
      </div>
      <div className=" w-full pt-2">
        <Swiper
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
                <Link href={"/"} className=" block w-full">
                  <div className="w-full">
                    <Image
                      className="w-full h-[60px]"
                      width={400}
                      height={80}
                      src={item?.image}
                      alt="image"
                    />
                  </div>
                  <h1 className="text-[10px] bg-light-muted sm:text-[12px] text-center  py-[2px] px-[2px] capitalize">
                    {item?.name?.slice(0, 16)}...
                  </h1>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeGamesSlider;

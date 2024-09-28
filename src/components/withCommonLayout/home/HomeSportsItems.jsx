"use client";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { gamesData } from "../../../../public/database/gamesDB";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import MobileMatchCard from "@/components/cards/MobileMatchCard";

const HomeSportsItems = ({ title }) => {
  return (
    <>
      <div className="">
        <div className="px-1 flex justify-between items-center gap-2 py-1">
          <h1 className="uppercase text-[12px] font-medium">{title}</h1>
          <Link
            href={"/"}
            className="flex text-[10px] uppercase items-center gap-1"
          >
            <span>More</span>
            <MdKeyboardDoubleArrowRight className="text-[14px]" />
          </Link>
        </div>
        <Swiper
          spaceBetween={6}
          slidesPerView={"auto"}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="h-full w-full"
        >
          {gamesData.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "250px" }}
              className="w-[250px]"
            >
              <MobileMatchCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeSportsItems;

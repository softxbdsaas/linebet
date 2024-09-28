"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import GamesCard from "@/components/cards/GamesCard";
const CategoryByGamesItems = ({ allGamesData, prev, next }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        navigation={{
          prevEl: `.${prev}`,
          nextEl: `.${next}`,
        }}
        slidesPerView={2}
        spaceBetween={6}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
          2560: {
            slidesPerView: 7,
            spaceBetween: 8,
          },
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="swiper "
      >
        {allGamesData?.map((item, index) => (
          <SwiperSlide key={index} style={{width:"150px"}} className="w-[150px] space-y-2">
            <GamesCard item={item} />
            <GamesCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="md:block hidden">
        <div
          className={`${prev} cursor-pointer absolute top-0 left-0 flex items-center h-full z-40`}
        >
          <div className="bg-white/80 w-[110px] h-[80px] text-black-base rounded-se-full rounded-br-full opacity-70 hover:opacity-100 flex justify-center items-center">
            <IoIosArrowForward className="text-[30px] rotate-180" />
          </div>
        </div>
        <div
          className={`${next} cursor-pointer absolute top-0 right-0 flex items-center h-full z-40`}
        >
          <div className="bg-white/80 w-[110px] h-[80px] text-black-base rounded-ss-full rounded-bl-full opacity-70 hover:opacity-100 flex justify-center items-center">
            <IoIosArrowForward className="text-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryByGamesItems;

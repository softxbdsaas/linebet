"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { banners } from "../../../../public/database/banners";
const HomeHero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        navigation={{
          prevEl: ".custom-swiper-button-prev-category",
          nextEl: ".custom-swiper-button-next-category",
        }}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="swiper hero-swiper-container"
      >
        {banners?.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="w-full max-h-[248px]">
              <Image
                className="w-full object-cover h-full"
                width={908}
                height={248}
                src={
                  "https://i.ibb.co.com/qBn42G4/5ac1ebbab9aaf721996820983fcfd51a2-1.png"
                }
                alt="image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="md:block hidden">
        <div className="custom-swiper-button-prev-category cursor-pointer absolute top-0 left-0 flex items-center h-full z-40">
          <div className="bg-[#202320] w-[24px] h-[112px] rounded-se rounded-br opacity-70 hover:opacity-100 flex justify-center items-center">
            <IoIosArrowForward className="text-[20px] rotate-180" />
          </div>
        </div>
        <div className="custom-swiper-button-next-category cursor-pointer absolute top-0 right-0 flex items-center h-full z-40">
          <div className="bg-[#202320] w-[24px] h-[112px] rounded-ss rounded-bl opacity-70 hover:opacity-100 flex justify-center items-center">
            <IoIosArrowForward className="text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

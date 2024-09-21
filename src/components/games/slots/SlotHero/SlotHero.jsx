"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
const SlotHero = () => {
  return (
    <div className="relative w-full overflow-hidden pt-2 pb-6">
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
        modules={[Autoplay, Navigation]}
        className="swiper hero-swiper-container"
      >
        <SwiperSlide>
          <div className="w-full max-h-[348px]">
            <Image
              className="w-full object-cover h-full"
              width={908}
              height={248}
              src={
                "https://v3.traincdn.com/genfiles/cms/designed_banners/image/68ea4f446d70b4bc54e019f5ea92e7d6.jpg"
              }
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-h-[348px]">
            <Image
              className="w-full object-cover h-full"
              width={908}
              height={248}
              src={
                "https://v3.traincdn.com/genfiles/cms/designed_banners/image/4c4f21b0a45ea4552b6b949750e4fc68.jpg"
              }
              alt="image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlotHero;

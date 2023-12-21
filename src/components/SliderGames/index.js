"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SliderGameItem from "@/components/SliderGameItem";

const SliderGames = ({ reference, items, handleSelect }) => {
  return (
    <div className="slider-games">
      <Swiper
        ref={reference}
        slidesPerView={3}
        rewind={true}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          900: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderGameItem item={item} handleSelect={handleSelect} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderGames;

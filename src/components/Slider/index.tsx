import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import SwiperCore, { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledSlide } from "./styled";

SwiperCore.use([EffectCoverflow]);

const Slider = () => {
  return (
    <StyledSlide>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView='auto'
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/350" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/350" alt="" />
        </SwiperSlide>
      </Swiper>
    </StyledSlide>
  );
};

export default Slider;

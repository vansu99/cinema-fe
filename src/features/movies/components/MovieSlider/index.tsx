import React from "react";
import "swiper/css";
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "../MovieItem";
import {StyledHeading} from "../../../../styles/common";

SwiperCore.use([Autoplay])

const MovieSlider = ({ title, desc }: any) => {
  return (
    <div style={{ padding: "5rem 10rem" }}>
      <StyledHeading>
        <h3>{title}</h3>
        <p>{desc}</p>
      </StyledHeading>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieItem
            name="SÁT THỦ HOA HỒNG"
            rate={4}
            image="https://via.placeholder.com/350"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieSlider;

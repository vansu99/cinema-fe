import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { StyledSlide } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import { Movie } from "../../features/movies";

SwiperCore.use([EffectCoverflow]);

interface SlideProps {
  movies: Movie[]
}

const Slider = ({ movies }: SlideProps) => {

  return (
    <StyledSlide>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {movies.map((film) => (
          <SwiperSlide key={film._id}>
            <img src={film.image} alt={film.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSlide>
  );
};

export default Slider;

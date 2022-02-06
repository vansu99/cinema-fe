import React from "react";
import "swiper/css";
import { Movie } from "../..";
import MovieItem from "../MovieItem";
import { StyledMovieSlide } from "./styled";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledHeading } from "../../../../styles/common";

SwiperCore.use([Autoplay]);

interface MovieSliderProps {
  title: string
  desc?: string
  movies: Movie[]
}

const MovieSlider = ({ title, desc, movies }: MovieSliderProps) => {
  return (
    <StyledMovieSlide>
      <StyledHeading>
        <h3>{title}</h3>
        <p>{desc}</p>
      </StyledHeading>
      <Swiper
        breakpoints={{
          370: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        {movies.map((film) => (
          <SwiperSlide key={film._id}>
            <MovieItem {...film} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledMovieSlide>
  );
};

export default MovieSlider;

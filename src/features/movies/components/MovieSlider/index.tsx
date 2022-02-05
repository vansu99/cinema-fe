import React from "react";
import "swiper/css";
import MovieItem from "../MovieItem";
import { IResponseData } from "../..";
import { StyledMovieSlide } from "./styled";
import SwiperCore, { Autoplay } from "swiper";
import { useGQLQuery } from "../../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledHeading } from "../../../../styles/common";
import { FilmStatusDocument } from "../../../../generated/graphql";

SwiperCore.use([Autoplay]);

const MovieSlider = ({ title, desc }: any) => {
  const { data, isLoading } = useGQLQuery<IResponseData>(
    "filmStatus",
    FilmStatusDocument,
    { status: "open" }
  );

  if (isLoading) return <p>Loading...</p>;
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
        {data?.filmStatus?.map((film) => (
          <SwiperSlide key={film._id}>
            <MovieItem {...film} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledMovieSlide>
  );
};

export default MovieSlider;

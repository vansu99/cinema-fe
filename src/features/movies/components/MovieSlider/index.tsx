import React from "react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "../MovieItem";
import { StyledHeading } from "../../../../styles/common";
import { useGQLQuery } from "../../../../hooks/useGQLQuery";
import { IResponseData } from "../..";
import { FilmStatusDocument } from "../../../../generated/graphql";

SwiperCore.use([Autoplay]);

const MovieSlider = ({ title, desc }: any) => {
  const { data, isLoading } = useGQLQuery<IResponseData>(
    "filmStatus",
    FilmStatusDocument,
    { status: 'open' }
  );

  if (isLoading) return <p>Loading...</p>;
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
        {data?.filmStatus?.map((film) => (
          <SwiperSlide key={film._id}>
            <MovieItem
              name={film.name}
              rate={film.rate || 0}
              image={film.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;

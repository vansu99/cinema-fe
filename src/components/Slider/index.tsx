import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import SwiperCore, { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledSlide } from "./styled";
import { useGQLQuery } from "../../hooks";
import { IResponseData } from "../../features/movies";
import { FilmStatusDocument } from "../../generated/graphql";

SwiperCore.use([EffectCoverflow]);

const Slider = () => {
  const { data } = useGQLQuery<IResponseData>("filmStatus", FilmStatusDocument, {
    status: "open",
  });

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
        {data?.filmStatus?.map((film) => (
          <SwiperSlide key={film._id}>
            <img src={film.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSlide>
  );
};

export default Slider;

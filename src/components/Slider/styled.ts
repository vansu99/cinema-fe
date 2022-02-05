import styled from "styled-components";
import { variables } from "../../styles/variables";

export const StyledSlide = styled.div`
  padding: 5rem 10rem;

  @media ${variables.mobile} {
    padding: 3rem;
  }

  .swiper {
    width: 100%;
  }
  .swiper-slide {
    width: 20rem !important;
    height: 30rem !important;
    background-position: center;
    background-size: cover;
  }
`
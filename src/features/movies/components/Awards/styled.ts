import { colors } from "./../../../../styles/colors";
import styled from "styled-components";
import MovieAward from "../../../../assets/images/movies.jpg";

export const StyledAwards = styled.div`
  position: relative;
  background: url(${MovieAward}) no-repeat center center / cover;
  height: 110vh;
`;

export const StyledAwardFocus = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledAwardContent = styled.div`
  max-width: 70rem;
  color: #fff;
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const StyledAwardHeading = styled.div`
  font-family: "Josefin Slab", serif;
  text-align: center;
  font-size: 7rem;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 1px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: inline-block;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    color: ${colors.redColor};
    font-size: 4rem;
    padding: 0 1rem;
  }
`;

export const StyledAwardDesc = styled.p`
  font-size: 1.6rem;
  line-height: 1.4;
  margin: 3rem 6rem 0;
`
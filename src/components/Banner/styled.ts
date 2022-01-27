import styled from "styled-components";
import BannerImg from "../../assets/images/bg.jpg";
import { colors } from "../../styles/colors";

export const StyledBanner = styled.div`
  position: relative;
  background: url(${BannerImg}) no-repeat center center/cover;
  min-height: calc(100vh - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const StyledBannerContent = styled.div`
  z-index: 2;
  text-align: center;
  max-width: 56rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 2.5rem;

    span {
      font-size: 5rem;
      color: ${colors.textTeal};
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 1.4;
  }
`;

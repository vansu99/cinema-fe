import styled, { keyframes } from "styled-components";
import { typography } from "./typography";
import {colors} from "./colors";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledHeading = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 3rem;
  margin-bottom: 5rem;

  h3 {
    text-transform: capitalize;
    ${typography.size.large}
    margin-bottom: 2rem;
  }
  
  p {
    ${typography.size.medium}
  }
  
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 10rem;
    height: 2px;
    background-color: ${colors.textTeal};
  }
`;

export { spin, StyledHeading };

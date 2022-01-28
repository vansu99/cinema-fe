import styled from "styled-components";
import { typography } from "./typography";
import { colors } from "./colors";

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

export { StyledHeading };

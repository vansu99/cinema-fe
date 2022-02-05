import styled from "styled-components";
import { variables } from "../../../../styles/variables";

export const StyledMovieSlide = styled.div`
  padding: 5rem 10rem;

  @media ${variables.mobile} {
    padding: 3rem;
  }
`;

import styled from "styled-components";
import { variables } from "../../../../styles/variables";

export const StyledMovieWrapper = styled.div`
  padding: 2rem 10rem;

  @media ${variables.mobile} {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

export const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: -3rem;
`
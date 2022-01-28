import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { typography } from "../../../../styles/typography";

export const PopularMovieWrapper = styled.div`
  padding: 5rem 10rem;
`;

export const PopularMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PopularMovieLeft = styled.div`
  width: calc(75% - 2rem);
  padding-right: 2rem;
  border-right: 1px solid ${colors.textTeal};
`;

export const PopularMovieLeftList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -2rem;
  margin-bottom: 3rem;
`

export const PopularMovieBottomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: baseline;
  
  h3 {
    ${typography.size.medium}
    text-transform: capitalize;
  }
  
  a {
    color: ${colors.textGray};
    ${typography.size.xsmall}
    text-transform: capitalize;
    
    &:hover {
      color: ${colors.textTeal};
    }
  }
`

export const PopularMovieBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -2rem;
  
  > div {
    width: calc(33.333% - 2rem);
    margin-left: 2rem;
  }
`

export const PopularMovieItem = styled.div`
  position: relative;
  width: calc(50% - 2rem);
  height: 25rem;
  margin-left: 2rem;
  overflow: hidden;
  border-radius: 1.2rem;

  .react-player {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const PopularMovieRight = styled.div`
  flex: 1;
  padding-left: 2rem;
`;

export const PopularMovieHeading = styled.h3`
  ${typography.size.medium}
  margin-bottom: 2rem;
  text-transform: capitalize;
`;

export const PopularMovieItemSide = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const PopularMovieItemVideo = styled.div`
  position: relative;
  height: 20rem;
  width: 100%;
  border-radius: 1.2rem;
  overflow: hidden;

  .react-player {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const PopularMovieItemVideoInfo = styled.div`
  margin-top: 1rem;
  
  h4 {
    ${typography.size.small}
    margin-bottom: 1rem;
  }
  p {
    ${typography.size.xsmall}
    color: ${colors.textGray};
  }
`

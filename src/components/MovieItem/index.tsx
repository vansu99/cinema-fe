import React from "react";
import {
  StyledMovieInfo,
  StyledMovieItem,
  StyledMovieItemDesc,
  StyledMovieThumbnail,
  StyledMovieTitle,
} from "./styled";

type MovieItemProps = {
  name: string;
  rate: number;
  image: string;
  count: number;
  spacing: number;
};

const MovieItem = ({
  count,
  spacing,
  name,
  rate,
  image,
}: MovieItemProps): JSX.Element => {
  return (
    <StyledMovieItem count={count} spacing={spacing}>
      <a href="#!">
        <StyledMovieThumbnail>
          <img src={image} alt="" />
        </StyledMovieThumbnail>
        <StyledMovieInfo>
          <StyledMovieTitle>
            <h3>{name}</h3>
          </StyledMovieTitle>
          <StyledMovieItemDesc>Released</StyledMovieItemDesc>
          <StyledMovieItemDesc>Released</StyledMovieItemDesc>
        </StyledMovieInfo>
      </a>
    </StyledMovieItem>
  );
};

export default MovieItem;

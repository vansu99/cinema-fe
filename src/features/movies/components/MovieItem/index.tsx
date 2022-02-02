import React from "react";
import dayjs from "dayjs";
import { Movie } from "../../types";
import {
  StyledMovieInfo,
  StyledMovieItem,
  StyledMovieItemDesc,
  StyledMovieThumbnail,
  StyledMovieTitle,
  StyledMovieRating,
  StyledMovieButton
} from "./styled";

interface MovieItemProps extends Movie {
  count?: number;
  spacing?: number;
}

const MovieItem = ({
  count = 0,
  spacing = 0,
  rate = 0,
  name,
  image,
  startDate,
}: MovieItemProps): JSX.Element => {
  return (
    <StyledMovieItem count={count} spacing={spacing}>
      <a href="#!">
        <StyledMovieThumbnail>
          <img src={image} alt="" />
          <StyledMovieButton>
            <button>get ticket</button>
          </StyledMovieButton>
        </StyledMovieThumbnail>
        <StyledMovieInfo>
          <StyledMovieTitle>
            <h3>{name}</h3>
          </StyledMovieTitle>
          <StyledMovieItemDesc>
            Rate: <StyledMovieRating>{rate}</StyledMovieRating>/10
          </StyledMovieItemDesc>
          <StyledMovieItemDesc>
            Released {dayjs(startDate).format("MMM DD, YYYY")}
          </StyledMovieItemDesc>
        </StyledMovieInfo>
      </a>
    </StyledMovieItem>
  );
};

export default MovieItem;

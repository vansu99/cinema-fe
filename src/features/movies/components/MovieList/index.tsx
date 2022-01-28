import React from "react";
import { StyledHeading } from "../../../../styles/common";
import { StyledMovieList, StyledMovieWrapper } from "./styled";
import MovieItem from "../MovieItem";

type MovieListProps = {
  title: string;
  desc?: string
};

const MovieList = ({ title, desc }: MovieListProps) => {
  return (
    <StyledMovieWrapper>
      <StyledHeading>
        <h3>{title}</h3>
        <p>{desc}</p>
      </StyledHeading>
      <StyledMovieList>
        <MovieItem
          count={6}
          spacing={3}
          name="Test 1"
          rate={4}
          image="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202111/10740_103_100004.png"
        />
        <MovieItem
          count={6}
          spacing={3}
          name="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
          rate={4}
          image="https://via.placeholder.com/350"
        />
        <MovieItem
          count={6}
          spacing={3}
          name="SÁT THỦ HOA HỒNG"
          rate={4}
          image="https://via.placeholder.com/350"
        />
        <MovieItem
          count={6}
          spacing={3}
          name="Test 4"
          rate={4}
          image="https://via.placeholder.com/350"
        />
        <MovieItem
          count={6}
          spacing={3}
          name="Test 4"
          rate={4}
          image="https://via.placeholder.com/350"
        />
        <MovieItem
          count={6}
          spacing={3}
          name="Test 4"
          rate={4}
          image="https://via.placeholder.com/350"
        />
      </StyledMovieList>
    </StyledMovieWrapper>
  );
};

export default MovieList;

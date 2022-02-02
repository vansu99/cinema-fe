import React from "react";
import { StyledHeading } from "../../../../styles/common";
import { StyledMovieList, StyledMovieWrapper } from "./styled";
import MovieItem from "../MovieItem";
import { useGQLQuery } from "../../../../hooks/useGQLQuery";
import { IResponseData } from "../../types";
import { FilmStatusDocument } from "../../../../generated/graphql";

type MovieListProps = {
  title: string;
  desc?: string;
};

const MovieList = ({ title, desc }: MovieListProps) => {
  const { data, isLoading } = useGQLQuery<IResponseData>(
    "filmStatus",
    FilmStatusDocument,
    { status: "pending" }
  );

  if(isLoading) return <p>Loading...</p>
  return (
    <StyledMovieWrapper>
      <StyledHeading>
        <h3>{title}</h3>
        <p>{desc}</p>
      </StyledHeading>
      <StyledMovieList>
        {data?.filmStatus?.map((film) => (
          <MovieItem
            key={film._id}
            count={6}
            spacing={3}
            {...film}
          />
        ))}
      </StyledMovieList>
    </StyledMovieWrapper>
  );
};

export default MovieList;

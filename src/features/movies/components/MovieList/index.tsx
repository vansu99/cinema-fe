import React from "react";
import { StyledHeading } from "../../../../styles/common";
import { StyledMovieList, StyledMovieWrapper } from "./styled";
import MovieItem from "../MovieItem";
import Media from "react-media";
import { useGQLQuery } from "../../../../hooks";
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

  if (isLoading) return <p>Loading...</p>;
  return (
    <StyledMovieWrapper>
      <StyledHeading>
        <h3>{title}</h3>
        <p>{desc}</p>
      </StyledHeading>
      <Media
        queries={{
          small: "(max-width: 750px)",
          mediumMin: "(min-width: 751px)",
        }}
      >
        {(matches: { small: string; mediumMin: string }) => (
          <>
            {matches.small && (
              <StyledMovieList>
                {data?.filmStatus?.map((film) => (
                  <MovieItem key={film._id} count={2} spacing={3} {...film} />
                ))}
              </StyledMovieList>
            )}
            {matches.mediumMin && (
              <StyledMovieList>
                {data?.filmStatus?.map((film) => (
                  <MovieItem key={film._id} count={6} spacing={3} {...film} />
                ))}
              </StyledMovieList>
            )}
          </>
        )}
      </Media>
    </StyledMovieWrapper>
  );
};

export default MovieList;

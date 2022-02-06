import React from "react";
import { IResponseData } from ".";
import Slider from "../../components/Slider";
import { FilmStatusDocument } from "../../generated/graphql";
import { useGQLQuery } from "../../hooks";
import Awards from "./components/Awards";
import Category from "./components/Category";
import MovieList from "./components/MovieList";
import MovieSlider from "./components/MovieSlider";
import PopularMovie from "./components/Popular";

const Home = () => {
  const { data, isLoading } = useGQLQuery<IResponseData>(
    "filmStatus",
    FilmStatusDocument
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <Slider movies={data?.filmStatusOpen || []} />
      <Category />
      <MovieSlider
        movies={data?.filmStatusOpen || []}
        title="Phim sắp công chiếu"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
      />
      <MovieList
        movies={data?.filmStatusPending || []}
        title="Phim đang công chiếu"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
      />
      <PopularMovie />
      <Awards />
    </div>
  );
};

export default Home;

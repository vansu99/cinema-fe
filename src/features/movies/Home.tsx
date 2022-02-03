import React from "react";
import Slider from "../../components/Slider";
import Awards from "./components/Awards";
import Category from "./components/Category";
import MovieList from "./components/MovieList";
import MovieSlider from "./components/MovieSlider";
import PopularMovie from "./components/Popular";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <MovieSlider
        title="Phim sắp công chiếu"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
      />
      <MovieList
        title="Phim đang công chiếu"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
      />
      <PopularMovie />
      <Awards />
    </div>
  );
};

export default Home;

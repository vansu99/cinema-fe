import React from "react";
import GlobalStyles from "./styles/globalStyle";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import MovieList from "./components/MovieList";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Banner />
      <Slider />
      <Category />
      <MovieList />
    </div>
  );
}

export default App;

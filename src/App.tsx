import React from "react";
import GlobalStyles from "./styles/globalStyle";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./features/movies/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Banner />
      <Home />
    </div>
  );
}

export default App;

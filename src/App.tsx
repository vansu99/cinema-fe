import React from 'react';
import GlobalStyles from './styles/globalStyle';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './features/movies/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Banner />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

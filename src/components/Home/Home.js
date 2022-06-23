import React from "react";

import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

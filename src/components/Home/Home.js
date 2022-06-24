import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import { addMovies } from "../../features/Movies/MoviesSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {};

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

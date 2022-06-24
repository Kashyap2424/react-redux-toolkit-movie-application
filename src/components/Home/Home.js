import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/Movies/MoviesSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

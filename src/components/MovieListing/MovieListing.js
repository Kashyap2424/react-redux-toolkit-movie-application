import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/Movies/MoviesSlice";

import "./MovieListing.scss";
import MoviesCard from "../MoviesCard/MoviesCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderMovies = "";
  renderMovies =
    movies.Response === "true" ? (
      movies.Search.map((movie, index) => {
        <MoviesCard key={index} data={movie} />;
      })
    ) : (
      <>
        <div className="movies-error">
          <h2>{movies.error}</h2>
        </div>
      </>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;

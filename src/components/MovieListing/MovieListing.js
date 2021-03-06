import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import "./MovieListing.scss";
import MoviesCard from "../MoviesCard/MoviesCard";
import { getAllMovies, getAllShows } from "../../features/Movies/MoviesSlice";
import { settings } from "../../common/settings";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) =>
        movie.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <MoviesCard key={index} data={movie} />
        )
      )
    ) : (
      <>
        <div className="movies-error">
          <h2>{movies.error}</h2>
        </div>
      </>
    );

  let renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) =>
        show.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <MoviesCard key={index} data={show} />
        )
      )
    ) : (
      <>
        <div className="movies-error">
          <h2>{shows.error}</h2>
        </div>
      </>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;

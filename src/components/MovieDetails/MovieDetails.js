import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./MovieDetails.scss";
import {
  fetchAsyncMovieOrDetail,
  getSelectedMovieOrShowDetail,
} from "../../features/Movies/MoviesSlice";

const MovieDetails = () => {
  const imdbID = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShowDetail);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrDetail(imdbID));
  }, [dispatch, imdbID]);

  console.log(data);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa-solid fa-star icons"></i> :{" "}
            {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up icons"></i> :{" "}
            {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film icons"></i> : {data.Runtime}
          </span>
          <span>
            Year <i className="fa-regular fa-calendar icons"></i> : {data.Year}
          </span>
        </div>

        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>

      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetails;

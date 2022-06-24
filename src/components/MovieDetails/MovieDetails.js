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
  return <div>MovieDetails</div>;
};

export default MovieDetails;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/Api/movieAPI";
import { API_KEY } from "../../common/Api/movieApiKey";
import { addMovies } from "../../features/Movies/MoviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?s=${movieText}&type=movie&apikey=${API_KEY}`)
        .catch((error) => {
          console.log("Error :", error);
        });
      dispatch(addMovies(response.data));
    };

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

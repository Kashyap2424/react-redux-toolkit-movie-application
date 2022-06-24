import React, { useEffect } from "react";

import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/Api/movieAPI";
import { API_KEY } from "../../common/Api/movieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";

    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?s=${movieText}&type=movie&apikey=${API_KEY}`)
        .catch((error) => {
          console.log("Error :", error);
        });

      console.log("The response from API: ", response);
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

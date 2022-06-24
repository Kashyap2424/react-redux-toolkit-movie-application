import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./Header.scss";
import UserImage from "../../images/user-image.jpeg";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/Movies/MoviesSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const searchMoviesAndShowHandler = (e) => {
    e.preventDefault();
    if (searchQuery === "")
      return alert("Please, enter a movie or show name... 🥺");
    dispatch(fetchAsyncMovies(searchQuery));
    dispatch(fetchAsyncShows(searchQuery));
    setSearchQuery("");
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={searchMoviesAndShowHandler}>
          <input
            type="text"
            placeholder="Search movies or shows 👀"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="sumit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={UserImage} alt="user" />
      </div>
    </div>
  );
};

export default Header;

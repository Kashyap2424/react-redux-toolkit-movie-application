import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import UserImage from "../../images/user-image.jpeg";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchMoviesAndShowHandler = (e) => {
    e.preventDefault();
    console.log(searchQuery);
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
            <i class="fa-solid fa-magnifying-glass"></i>
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

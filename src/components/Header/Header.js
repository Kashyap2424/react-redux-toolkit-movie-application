import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import UserImage from "../../images/user-image.jpeg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={UserImage} alt="user" />
      </div>
    </div>
  );
};

export default Header;

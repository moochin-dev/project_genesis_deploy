import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbarItems">
      <Link to="/" className="navbarLogo" id="mainTitle">
        통과했수
      </Link>
      <button className="menuButton" id="mainSubTitle">
        MENU
      </button>
    </nav>
  );
};

export default Nav;

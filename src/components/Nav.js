import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbarItems">
      <Link to="/" className="navbarLogo mainTitle">
        통과했수
      </Link>
      <button className="menuButton mainSubTitle">
        MENU
      </button>
    </nav>
  );
};

export default Nav;

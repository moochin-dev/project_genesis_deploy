import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbarItems">
      <Link to="/" className="navbarLogo mainTitle">
        통과했수
      </Link>
    </nav>
  );
};

export default Nav;

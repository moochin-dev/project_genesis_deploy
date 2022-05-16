import React from "react";
import { Link } from "react-router-dom";
import { Affix } from "antd";

const Nav = () => {
  return (
    <Affix>
      <div style={{ backgroundColor: "gray" }}>
        <Link to="/" style={{ fontWeight: "bold", color: "black" }}>
          <h1>통과했수</h1>
        </Link>
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
          <h2>nav</h2>
          <h3>nav</h3>
        </nav>
      </div>
    </Affix>
  );
};

export default Nav;

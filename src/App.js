import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

import { Outlet } from "react-router-dom";
import { getWaterBrands } from "./data";

function App() {
  const waterBrands = getWaterBrands();

  return (
    <div>
      <Nav />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;

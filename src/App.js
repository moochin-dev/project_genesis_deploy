import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import BackTopButton from "./components/backtop";

import { Outlet } from "react-router-dom";
import { getWaterBrands } from "./data";

function App() {
  const waterBrands = getWaterBrands();

  return (
    <div className="App">
      <Nav />
      <BackTopButton />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

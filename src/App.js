import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import ShareButton from "./components/share-button";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
      <ShareButton />
    </div>
  );
}

export default App;

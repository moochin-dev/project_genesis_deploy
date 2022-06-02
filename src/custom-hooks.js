import { useState, useEffect } from "react";
import axios from "axios";

//화면 width
export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

//api
axios.defaults.baseURL = "http://3.39.164.17:8000/";

export const useWaterBrands = () => {
  const [waterBrands, setWaterBrands] = useState([]);
  const fetchData = () => {
    axios.get("/waterbrand/").then((response) => {
      setWaterBrands(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return waterBrands;
};

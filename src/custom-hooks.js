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
axios.defaults.baseURL = "https://passubackend.kro.kr/";

export const useAxios = () => {
  const [waterBrands, setWaterBrands] = useState([]);
  const [waterSources, setWaterSources] = useState([]);
  const [testHistory, setTestHistory] = useState([]);
  const [brandSourceMappings, setBrandSourceMappings] = useState([]);
  const fetchData = () => {
    axios.get("/waterbrand/").then((response) => {
      setWaterBrands(response.data);
    });
    axios.get("/watersource/").then((response) => {
      setWaterSources(response.data);
    });
    axios.get("/testhistory/").then((response) => {
      setTestHistory(response.data);
    });
    axios.get("/brandsourcemapping/").then((response) => {
      setBrandSourceMappings(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { waterBrands, waterSources, testHistory, brandSourceMappings };
};

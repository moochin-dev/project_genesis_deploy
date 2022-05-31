import React, { useState, useEffect } from "react";
import Intro from "../components/intro";
import Row from "../components/row/row";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import TableWrapper from "../components/table/table-wrapper";
//import { getWaterBrands } from "../api/api";

function MainPage() {
  const windowWidth = useOutletContext();

  const [waterBrands, setWaterBrands] = useState([]);

  useEffect(() => {
    axios.get("http://3.39.164.17:8000/waterbrand/").then((response) => {
      setWaterBrands(response.data);
    });
  }, []);

  /* 잠깐 빼놓은 거임
      <TableWrapper /> 
      */

  return (
    <div>
      <Intro windowWidth={windowWidth} />
      <Row waterBrands={waterBrands} windowWidth={windowWidth} />
    </div>
  );
}

export default MainPage;

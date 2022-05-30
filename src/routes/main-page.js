import React, { useState, useEffect } from "react";
import Intro from "../components/intro";
import Row from "../components/row/row";
import TableWrapper from "../components/table/table-wrapper";
import { getWaterBrands } from "../api/api";

function MainPage() {
  const data = getWaterBrands();

  const [waterBrands, setWaterBrands] = useState([]);

  useEffect(() => {
    setWaterBrands(data);
  }, [waterBrands, data]);

  /*
<Row waterBrands={waterBrands} />
      <TableWrapper /> 
      */

  return (
    <div>
      <Intro />
    </div>
  );
}

export default MainPage;

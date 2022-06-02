import React from "react";
import Intro from "../components/intro";
import Row from "../components/row/row";
import TableWrapper from "../components/table/table-wrapper";

function MainPage() {
  /* 잠깐 빼놓은 거임
      <TableWrapper /> 
      */

  return (
    <div>
      <Intro />
      <Row />
    </div>
  );
}

export default MainPage;

import React from "react";
import Intro from "../components/intro";
import Row from "../components/row/row";
import TableWrapper from "../components/table/table-wrapper";

function MainPage() {
  return (
    <div>
      <Intro />
      <Row />
      <TableWrapper />
    </div>
  );
}

export default MainPage;

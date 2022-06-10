import React from "react";
import "./table.css";
import TableSlider from "./table-slider";

const Table = () => {
  return (
    <div className="tableWrapper">
      <div className="tableTextWrapper">
        <p className="tableText1 mainSubTitle">당신이 먹는 생수의</p>
        <p className="tableText2 mainTitle">수질 부적합 판정횟수</p>
        <p className="tableText3 mainSubTitle">
          수질 적합도 검사는 매년 ?회 실시됩니다.
        </p>
      </div>
      <TableSlider />
    </div>
  );
};

export default Table;

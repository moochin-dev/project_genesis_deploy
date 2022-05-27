import React from "react";
import "./row.css";
import RowSlider from "./row-slider";

const Row = () => {
  return (
    <>
      <div className="rowWrapper">
        <div className="rowTextWrapper">
          <p className="rowText1 contentTitle">당신이 먹는 생수,</p>
          <p className="rowText2 mainTitle">어떤 브랜드인가요?</p>
          <p className="rowText3 mainSubTitle rowGrayTypo">
            (수질검사 통과 못한게 많다는 sub text)
          </p>
        </div>
        
        <div className="rowBackground"><RowSlider /></div>
        
      </div>
    </>
  );
};

export default Row;

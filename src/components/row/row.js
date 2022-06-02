import React from "react";
import "./row.css";
import RowSlider from "./row-slider";

const Row = () => {
  return (
    <>
      <div className="rowWrapper">
        <div className="rowTextWrapper">
          <p className="rowText1 mainSubTitle">당신이 먹는 생수,</p>
          <p className="rowText2 mainTitle">어떤 브랜드인가요?</p>
          <p className="rowText3 mainSubTitle rowGrayTypo">
            선호하는 브랜드를 골라 자세하게 알아보세요.
          </p>
        </div>
        <RowSlider />
      </div>
    </>
  );
};

export default Row;

import React from "react";
import { useAxios, useWindowWidth } from "../../custom-hooks";
import "./table-slider.css";

const TableSlider = () => {
  //api 호출////////
  const windowWidth = useWindowWidth();
  const { waterBrands, waterSources, brandSourceMappings, testHistory } =
    useAxios();

  return (
    <div className="tableSliderArea">
      <div className="tableSliderWrapper">
        <div className="tableSliderHeader"></div>
        <div className="tableSliderData">
          <div className="tableSliderDataBorderBottom"></div>
        </div>
        <div className="tableSliderData">
          <div className="tableSliderDataBorderBottom"></div>
        </div>
        <div className="tableSliderData">
          <div className="tableSliderDataBorderBottom"></div>
        </div>
        <div className="tableSliderData">
          <div className="tableSliderDataBorderBottom"></div>
        </div>
        <div className="tableSliderData"></div>
        <div className="tableSliderTextWrapper">
          <p className="contentText">
            자세한 정보를 보고 싶다면, 해당 브랜드를 클릭하세요!
          </p>
        </div>
        <div className="tableSliderButtonWrapper">
          <div
            className="tableSliderButtonDivider"
            style={{ left: `${windowWidth / 2 - 20}px` }}
          ></div>
          <button
            className="tableSliderPrevButton"
            style={{ width: `${windowWidth / 2 - 20}px` }}
          ></button>
          <button
            className="tableSliderNextButton"
            style={{ width: `${windowWidth / 2 - 20}px` }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default TableSlider;

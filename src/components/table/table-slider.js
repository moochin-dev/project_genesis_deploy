import React, { useState } from "react";
import { useAxios, useWindowWidth } from "../../custom-hooks";
import "./table-slider.css";

const TableSlider = () => {
  const [prevButtonBackgroundColor, setPrevButtonBackGroundColor] =
    useState("black");
  const [nextButtonBackgroundColor, setNextButtonBackGroundColor] =
    useState("black");
  const [prevButtonTextColor, setPrevButtonTextColor] = useState("white");
  const [nextButtonTextColor, setNextButtonTextColor] = useState("white");

  //api 호출////////
  const windowWidth = useWindowWidth();
  const { waterBrands, waterSources, brandSourceMappings, testHistory } =
    useAxios();

  return (
    <div className="tableSliderArea">
      <div className="tableSliderWrapper">
        <div className="tableSliderHeader">
          <p className="tableSliderHeaderText oneLine contentSubTitle">
            브랜드
          </p>
          <p className="tableSliderHeaderText twoLine contentSubTitle">
            {"수질적합\n여부"}
          </p>
          <p className="tableSliderHeaderText twoLine contentSubTitle">
            {"부적합\n판정횟수"}
          </p>
          <p className="tableSliderHeaderText oneLine contentSubTitle">
            출시년도
          </p>
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
            style={{ left: `${windowWidth / 2}px` }}
          ></div>
          <button
            className="tableSliderPrevButton"
            style={{
              width: `${windowWidth / 2 - 20}px`,
              backgroundColor: `${prevButtonBackgroundColor}`,
            }}
            onTouchStart={(e) => {
              setPrevButtonBackGroundColor("rgba(255,255,255,0.3)");
              setPrevButtonTextColor("blacks");
            }}
            onTouchEnd={(e) => {
              setPrevButtonBackGroundColor("black");
              setPrevButtonTextColor("white");
            }}
          >
            <p
              className="contentSubTitle"
              style={{ color: `${prevButtonTextColor}` }}
            >
              이전
            </p>
          </button>
          <button
            className="tableSliderNextButton"
            style={{
              width: `${windowWidth / 2 - 20}px`,
              backgroundColor: `${nextButtonBackgroundColor}`,
            }}
            onTouchStart={(e) => {
              setNextButtonBackGroundColor("rgba(255,255,255,0.3)");
              setNextButtonTextColor("black");
            }}
            onTouchEnd={(e) => {
              setNextButtonBackGroundColor("black");
              setNextButtonTextColor("white");
            }}
          >
            <p
              className="contentSubTitle"
              style={{ color: `${nextButtonTextColor}` }}
            >
              다음
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableSlider;

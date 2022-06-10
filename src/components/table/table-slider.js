import React, { useState } from "react";
import { useAxios, useWindowWidth } from "../../custom-hooks";
import "./table-slider.css";
import TableSlide from "./table-slide";

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

  //브랜드에 수원지 데이터 넣기 - 데이터가 호출 된 다음에 해야해서 if 문으로 시작
  if (
    waterBrands.length > 0 &&
    waterSources.length > 0 &&
    brandSourceMappings.length > 0 &&
    testHistory.length > 0
  ) {
    //sourceTestHistory에 testhistory 넣기
    for (let i = 0; i < waterSources.length; i++) {
      waterSources[i].id = i + 1; //id가 2부터 시작하고 불연속적이라서 재설정
      waterSources[i].test_history = [];
    }

    for (let i = 0; i < testHistory.length; i++) {
      let sourceId = testHistory[i].source;
      sourceId = sourceId < 8 ? sourceId - 1 : sourceId - 2; //위에서 id 재설정한 부분에 맞추어서 sourceId 또한 재설정
      waterSources[sourceId].test_history.push(testHistory[i].date);
    }

    //brand에 source test-history 넣기
    for (let i = 0; i < waterBrands.length; i++) {
      waterBrands[i].sources = [];
    }
    for (let i = 0; i < brandSourceMappings.length; i++) {
      const brandId = brandSourceMappings[i].brand;
      let sourceId = brandSourceMappings[i].source;
      sourceId = sourceId < 8 ? sourceId - 1 : sourceId - 2; //위에서 id 재설정한 부분에 맞추어서 sourceId 또한 재설정
      waterBrands[brandId - 1].sources.push(
        {test_history: waterSources[sourceId - 1].test_history}
      );
    }
    
    //brand에 통과여부 및 부적합판정횟수 prop 넣기
    for (let i = 0; i < waterBrands.length; i++) {
      let bool = true;
      let count = 0;
      const waterBrand = waterBrands[i]
      for (let j = 0; j < waterBrand.sources.length; j++) {
        if (waterBrand.sources[j].test_history.length > 0) {
          if (bool) bool = false;
          count += waterBrand.sources[j].test_history.length;
        }
      }
      waterBrands[i].pass = bool;
      waterBrands[i].invalid_count = count;
    }
  }

  //브랜드 데이터 5개씩 그룹 짓기
  const waterBrandGroups = [];
  for (let i = 0, j = 1; i < waterBrands.length; ) {
    if (j === 1) waterBrandGroups.push([]);
    waterBrandGroups[waterBrandGroups.length - 1].push(waterBrands[i]);
    i++;
    if (j === 5) j = 1;
    else j++;
  }
  const lastGroupCount = 5 - (waterBrands.length % 5);
  if (lastGroupCount !== 5) {
    for (let i = 0; i < lastGroupCount; i++) {
      waterBrandGroups[waterBrandGroups.length - 1].push(null);
    }
  }

  //무한 슬라이드처럼 보이게 앞뒤로 이어붙이기
  const groupHead = waterBrandGroups[0];
  const groupTail = waterBrandGroups[waterBrandGroups.length - 1];
  const editedWaterBrandGroups = [groupTail].concat(waterBrandGroups, [
    groupHead,
  ]);

  //carousel의 슬라이딩 기능 구현
  const [currentIndex, setCurrentIndex] = useState(0);

  const transitionTime = 250;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const [slideTransition, setSlideTransition] = useState(transitionStyle);

  const replaceSlide = (index) => {
    setTimeout(() => {
      setSlideTransition("");
      setCurrentIndex(index);
    }, transitionTime);
  };
  const handleSwipe = (direction) => {
    let index = currentIndex + direction;
    setCurrentIndex(index);
    //오른쪽으로 갈 때
    if (currentIndex + direction === editedWaterBrandGroups.length - 2) {
      index = 0;
      replaceSlide(index);
    }
    //왼쪽으로 갈 때
    else if (currentIndex + direction === -1) {
      index = editedWaterBrandGroups.length - 3;
      replaceSlide(index);
    }
    setSlideTransition(transitionStyle);
  };

  return (
    <div className="tableSliderArea">
      {editedWaterBrandGroups.length > 2 && ( //waterBrandGroups 만들고 난 후에 렌더해야 에러 안 남
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
          <div
            className="tableSliderDataWrapper"
            style={{
              width: `${(windowWidth - 40) * editedWaterBrandGroups.length}px`,
              transition: slideTransition,
              transform: `translateX(${
                -windowWidth + 40 - (windowWidth - 40) * currentIndex
              }px)`,
            }}
          >
            {editedWaterBrandGroups.map((waterBrandGroup, index) => (
              <TableSlide
                key={index}
                waterBrandGroup={waterBrandGroup}
                windowWidth={windowWidth}
              />
            ))}
          </div>
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
                handleSwipe(-1);
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
                handleSwipe(1);
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
      )}
    </div>
  );
};

export default TableSlider;

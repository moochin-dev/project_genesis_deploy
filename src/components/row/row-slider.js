import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./row-slider.css";
import { useAxios, useWindowWidth } from "../../custom-hooks";

const RowSlider = () => {
  //waterBrands 불러오기
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

  let row1 = waterBrands.slice(0, waterBrands.length / 2);
  let row2 = waterBrands.slice(waterBrands.length / 2);

  const rowLength1 = row1.length; //이 두개는 무한 슬라이드 구현에 쓰이는 변수임 건들지 마셈
  const rowLength2 = row2.length;

  //각각의 row 앞 뒤에 슬라이드 추가해서 무한 슬라이드처럼 보이게끔 하기
  const rowHead1 = row1.slice(0, 2);
  const rowHead2 = row2.slice(0, 3);
  const rowTail1 = row1.slice(-2);
  const rowTail2 = row2.slice(-2);

  row1 = rowTail1.concat(row1, rowHead1);
  row2 = rowTail2.concat(row2, rowHead2);

  //dimension 만지기
  const windowWidth = useWindowWidth();
  const slideWidth = (152 * windowWidth) / 360;
  const slideGap = (24 * windowWidth) / 360;

  //carousel의 슬라이딩 기능 구현
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const transitionTime1 = 450;
  const transitionTime2 = 500;
  const transitionStyle1 = `transform ${transitionTime1}ms ease 0s`;
  const transitionStyle2 = `transform ${transitionTime2}ms ease 0s`;
  const [slideTransition1, setSlideTransition1] = useState(transitionStyle1);
  const [slideTransition2, setSlideTransition2] = useState(transitionStyle2);

  const replaceSlide1 = (index1) => {
    setTimeout(() => {
      setSlideTransition1("");
      setCurrentIndex1(index1);
    }, Math.max(transitionTime1, transitionTime2));
  };

  const replaceSlide2 = (index2) => {
    setTimeout(() => {
      setSlideTransition2("");
      setCurrentIndex2(index2);
    }, Math.max(transitionTime1, transitionTime2));
  };

  const handleSwipe = (direction) => {
    let index1 = currentIndex1 + direction;
    let index2 = currentIndex2 + direction;
    setCurrentIndex1(index1);
    setCurrentIndex2(index2);
    //row1
    //오른쪽으로 갈 때
    if (currentIndex1 + direction === rowLength1) {
      index1 = 0;
      replaceSlide1(index1);
    }
    //왼쪽으로 갈 때
    else if (currentIndex1 + direction === -1) {
      index1 = rowLength1 - 1;
      replaceSlide1(index1);
    }
    setSlideTransition1(transitionStyle1);
    //row2
    //오른쪽으로 갈 때
    if (currentIndex2 + direction === rowLength2) {
      index2 = 0;
      replaceSlide2(index2);
    }
    //왼쪽으로 갈 때
    else if (currentIndex2 + direction === -1) {
      index2 = rowLength2 - 1;
      replaceSlide2(index2);
    }
    setSlideTransition2(transitionStyle2);
  };

  return (
    <div className="rowSliderWrapper">
      <div
        className="rowSliderSliderTrack1"
        style={{
          transition: slideTransition1,
          width: `${slideWidth * row1.length + slideGap * (row1.length - 1)}px`,
          transform: `translateX(${
            windowWidth / 2 -
            (slideWidth + slideGap) * 2 -
            slideWidth / 2 -
            (slideWidth + slideGap) * currentIndex1
          }px)`,
        }}
      >
        {row1.map((waterBrand, index) => (
          <div
            className="rowSliderSlide1"
            key={index}
            style={{ width: `${slideWidth}px` }}
          >
            <Link to={`/${waterBrand.id}`} state={{ waterBrand: waterBrand }}>
              <img
                src={`${waterBrand.image_url}`}
                alt={`${waterBrand.name}`}
                style={{
                  width: `${slideWidth - 19}px`,
                  height: "133px",
                  margin: "9.5px",
                  boxSizing: "content-box",
                }}
              />
            </Link>
          </div>
        ))}
      </div>
      <div
        className="rowSliderSliderTrack2"
        style={{
          transform: `translateX(${
            windowWidth / 2 -
            2 * slideWidth -
            (3 / 2) * slideGap -
            (slideWidth + slideGap) * currentIndex2
          }px)`,
          transition: slideTransition2,
          width: `${slideWidth * row2.length + slideGap * (row2.length - 1)}px`,
        }}
      >
        {row2.map((waterBrand, index) => (
          <div
            className="rowSliderSlide2"
            key={index}
            style={{ width: slideWidth }}
          >
            <Link to={`/${waterBrand.id}`} state={{ waterBrand: waterBrand }}>
              <img
                src={`${waterBrand.image_url}`}
                alt={`${waterBrand.name}`}
                style={{
                  width: `${slideWidth - 19}px`,
                  height: "133px",
                  margin: "9.5px",
                  boxSizing: "content-box",
                }}
              />
            </Link>
          </div>
        ))}
      </div>
      <button className="rowSliderButtonLeft" onClick={() => handleSwipe(-1)}>
        <img
          src={require("../../img/btn-left.png")}
          alt="btn-left"
        />
      </button>
      <button className="rowSliderButtonRight" onClick={() => handleSwipe(1)}>
        <img
          src={require("../../img/btn-right.png")}
          alt="btn-right"
        />
      </button>
    </div>
  );
};

export default RowSlider;

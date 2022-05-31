import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./row-slider.css";

const RowSlider = (props) => {
  //waterBrands 불러오기
  const waterBrands = props.waterBrands;

  let row1 = waterBrands.slice(0, waterBrands.length / 2);
  let row2 = waterBrands.slice(waterBrands.length / 2);

  const rowLength1 = row1.length;
  const rowLength2 = row2.length;

  //각각의 row 앞 뒤에 슬라이드 추가해서 무한 슬라이드처럼 보이게끔 하기
  const rowHead1 = row1.slice(0, 2);
  const rowHead2 = row2.slice(0, 3);
  const rowTail1 = row1.slice(-2);
  const rowTail2 = row2.slice(-2);

  row1 = rowTail1.concat(row1, rowHead1);
  row2 = rowTail2.concat(row2, rowHead2);

  //dimension 만지기
  const windowWidth = props.windowWidth;
  const defaultWindowWidth = 360;
  const percent = windowWidth / defaultWindowWidth;
  const defaultSlideWidth = 152;
  const defaultSlideWing = 80;
  const [slideWidth, setSlideWidth] = useState(defaultSlideWidth);
  const [slideWing, setSlideWing] = useState(defaultSlideWing);
  const [slideGap, setSlideGap] = useState(
    (defaultWindowWidth - defaultSlideWidth - 2 * defaultSlideWing) / 2
  );
  useEffect(() => {
    setSlideWidth(defaultSlideWidth * percent);
    setSlideWing(defaultSlideWing * percent);
    setSlideGap((windowWidth - slideWidth - 2 * slideWing) / 2);
  }, [windowWidth]);

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
    setSlideTransition1(transitionStyle1);
    setSlideTransition2(transitionStyle2);
  };

  return (
    <>
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
                  width: `${133 * percent}px`,
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
            152 - (128 + 16) * (2 + 1) + 16 / 2 - (128 + 16) * currentIndex2
          }px)`,
          transition: slideTransition2,
          width: `${128 * row2.length + 16 * (row2.length - 1)}px`,
        }}
      >
        {row2.map((waterBrand, index) => (
          <div className="rowSliderSlide2" key={index}>
            <Link to={`/${waterBrand.id}`} state={{ waterBrand: waterBrand }}>
              <img
                src={`${waterBrand.image_url}`}
                alt={`${waterBrand.name}`}
                style={{
                  width: "110px",
                  height: "110px",
                  margin: "9px 9px",
                }}
              />
            </Link>
          </div>
        ))}
      </div>
      <button className="rowSliderButtonLeft" onClick={() => handleSwipe(-1)}>
        <img
          src={require("/Users/obzva/Desktop/find-clean-water/src/img/btn-left.png")}
          alt="btn-left"
        />
      </button>
      <button className="rowSliderButtonRight" onClick={() => handleSwipe(1)}>
        <img
          src={require("/Users/obzva/Desktop/find-clean-water/src/img/btn-right.png")}
          alt="btn-right"
        />
      </button>
    </>
  );
};

export default RowSlider;

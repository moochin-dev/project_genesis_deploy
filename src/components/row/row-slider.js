import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./row-slider.css";

const RowSlider = () => {
  const [waterBrands, setWaterBrands] = useState([]);
  useEffect(() => {
    axios.get("http://3.39.164.17:8000/waterbrand/").then((response) => {
      setWaterBrands(response.data);
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const transitionTime1 = 500;
  const transitionTime2 = 450;
  const transitionStyle1 = `transform ${transitionTime1}ms ease 0s`;
  const transitionStyle2 = `transform ${transitionTime2}ms ease 0s`;
  const [slideTransition1, setSlideTransition1] = useState(transitionStyle1);
  const [slideTransition2, setSlideTransition2] = useState(transitionStyle2);

  const replaceSlide = (index) => {
    setTimeout(() => {
      setSlideTransition1("");
      setSlideTransition2("");
      setCurrentIndex(index);
    }, Math.max(transitionTime1, transitionTime2));
  };

  const handleSwipe = (direction) => {
    let index = currentIndex + direction;
    setCurrentIndex(index);
    //뒤로 넘어갈 때
    if (currentIndex + direction === 3) {
      index = 0;
      replaceSlide(index);
    }
    //앞으로 넘어갈 때
    else if (currentIndex + direction === -1) {
      index = 3 - 1;
      replaceSlide(index);
    }
    setSlideTransition1(transitionStyle1);
    setSlideTransition2(transitionStyle2);
  };

  useEffect(() => {
    console.log(currentIndex);
    console.log(`transitionStyle1: ${transitionStyle1}`);
    console.log(`transitionStyle2: ${transitionStyle2}`);
  }, [currentIndex, transitionStyle1, transitionStyle2]);

  return (
    <div className="rowSliderSliderArea">
      <div className="rowSliderSlider">
        <div className="rowSliderSliderList">
          <div
            className="rowSliderSliderTrack1"
            style={{
              transform: `translate(${
                152 - (128 + 16) * 2 - 128 / 2 - (128 + 16) * currentIndex
              }px, 16px)`,
              transition: slideTransition1,
            }}
          >
            <div
              className="rowSliderItem2"
              style={{
                backgroundColor: "#866262",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>2</h1>
            </div>
            <div
              className="rowSliderItem3"
              style={{
                backgroundColor: "#866262",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>3</h1>
            </div>
            <div
              className="rowSliderItem1"
              style={{
                backgroundColor: "#866262",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>1</h1>
            </div>
            <div
              className="rowSliderItem2"
              style={{
                backgroundColor: "#866262",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>2</h1>
            </div>
            <div
              className="rowSliderItem3"
              style={{
                backgroundColor: "#866262",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>3</h1>
            </div>
            <div
              className="rowSliderItem1"
              style={{
                backgroundColor: "#866262",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>1</h1>
            </div>
            <div
              className="rowSliderItem2"
              style={{
                backgroundColor: "#866262",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>2</h1>
            </div>
          </div>
          <div
            className="rowSliderSliderTrack2"
            style={{
              transform: `translate(${
                152 - (128 + 16) * (2 + 1) + 16 / 2 - (128 + 16) * currentIndex
              }px, 32px)`,
              transition: slideTransition2,
            }}
          >
            <div
              className="rowSliderItem2"
              style={{
                backgroundColor: "#5effb1",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>2</h1>
            </div>
            <div
              className="rowSliderItem3"
              style={{
                backgroundColor: "#5effb1",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>3</h1>
            </div>
            <div
              className="rowSliderItem1"
              style={{
                backgroundColor: "#5effb1",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>1</h1>
            </div>
            <div
              className="rowSliderItem2"
              style={{
                backgroundColor: "#5effb1",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>2</h1>
            </div>
            <div
              className="rowSliderItem3"
              style={{
                backgroundColor: "#5effb1",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>3</h1>
            </div>
            <div
              className="rowSliderItem1"
              style={{
                backgroundColor: "#5effb1",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>1</h1>
            </div>
            <div
              className="rowSliderItem2"
              style={{
                backgroundColor: "#5effb1",
                width: "128px",
                height: "128px",
              }}
            >
              <h1>2</h1>
            </div>
          </div>
        </div>
      </div>
      <button className="rowSliderButtonLeft" onClick={() => handleSwipe(-1)}>
        <svg
          width="12.5"
          height="96"
          viewBox="0 0 14 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rowSliderButtonLeftVector"
        >
          <path d="M13.5 97L1 49L13.5 1" stroke="black" />
        </svg>
      </button>
      <button className="rowSliderButtonRight" onClick={() => handleSwipe(1)}>
        <svg
          width="14"
          height="98"
          viewBox="0 0 14 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rowSliderButtonRightVector"
        >
          <path d="M0.5 97L13 49L0.5 1" stroke="black" />
        </svg>
      </button>
    </div>
  );
};

export default RowSlider;

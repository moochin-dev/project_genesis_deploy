import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="introWrapper">
      <div className="introTitleWrapper">
        <p className="contentSubTitle introText1">당신이 먹는 생수,</p>
        <p className="mainTitle introText2">{"얼마나 알고\n계신가요?"}</p>
      </div>
      <img
        className="introImg1"
        src={require("/Users/obzva/Desktop/find-clean-water/src/img/intro-img1.png")}
        alt="introImg1"
      />
      <img
        className="introImg2"
        src={require("/Users/obzva/Desktop/find-clean-water/src/img/intro-img2.png")}
        alt="introImg2"
      />
      <p className="introText3">
        {"국내 생수 브랜드는\n40가지가 넘지만,"}
      </p>
      <p className="introText4">
        {"생수 제조원은 6곳\n밖에 되지 않아요!"}
      </p>
      <img
        className="introImg3"
        src={require("/Users/obzva/Desktop/find-clean-water/src/img/intro-img3.png")}
        alt="introImg3"
      />
      <img
        className="introImg4"
        src={require("/Users/obzva/Desktop/find-clean-water/src/img/intro-img4.png")}
        alt="introImg4"
      />
    </div>
  );
};

export default Intro;

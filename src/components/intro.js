import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="wrapper">
      <h2 className="contentTitle">당신이 먹는 생수,</h2>
      <h1 className="mainTitle">알고 드시나요?</h1>
      <h3 className="mainSubTitle grayTypo">(수질검사 통과 못한게 많다는 텍스트)</h3>
      <div className='canvas'></div>
    </div>
  );
};

export default Intro;

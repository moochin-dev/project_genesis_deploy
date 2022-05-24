import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="introWrapper">
      <p className="contentTitle introText1">당신이 먹는 생수,</p>
      <p className="mainTitle introText2">알고 드시나요?</p>
      <p className="mainSubTitle introText3 introGrayTypo">
        (수질검사 통과 못한게 많다는 텍스트)
      </p>
      <div className='introImg1'></div>
      <div className='introImg2'></div>
      <p className ='introText4 mainSubTitle'>{'국내 생수 브랜드는\n40가지가 넘지만,'}</p>
      <p className ='introText5 mainSubTitle'>{'생수 제조원은\n6개밖에 되지 않아요!'}</p>
      <div className='introImg3'></div>
      <div className='introImg4'></div>
    </div>
  );
};

export default Intro;

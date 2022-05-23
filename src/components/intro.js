import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="wrapper">
      <p className="contentTitle text1">당신이 먹는 생수,</p>
      <p className="mainTitle text2">알고 드시나요?</p>
      <p className="mainSubTitle text3 grayTypo">
        (수질검사 통과 못한게 많다는 텍스트)
      </p>
      <div className='img1'></div>
      <div className='img2'></div>
      <p className ='text4 mainSubTitle'>{'국내 생수 브랜드는\n40가지가 넘지만,'}</p>
      <p className ='text5 mainSubTitle'>{'생수 제조원은\n6개밖에 되지 않아요!'}</p>
      <div className='img3'></div>
      <div className='img4'></div>
    </div>
  );
};

export default Intro;

import React from "react";
import "./detail-hero.css";

function DetailHero(props) {
  const waterBrand = props.waterBrand;

  const windowWidth = props.windowWidth;

  return (
    <div className="detailHeroWrapper">
      <div className="detailHeroTextWrapper">
        <p className="contentSubTitle">당신이 선택한 브랜드,</p>
        <p className="mainTitle">{waterBrand.name}</p>
      </div>
      <div
        className="detailHeroMainBannerWrapper"
        style={{
          width: `${(windowWidth / 360) * 220}px`,
          height: `${(windowWidth / 360) * 344}px`,
        }}
      >
        <img
          src={`${waterBrand.image_url}`}
          alt={`${waterBrand.name}`}
          className="detailHeroMainBannerImage"
        />
      </div>
      <div
        className="detailHeroInfoWrapper"
        style={{
          width: `${(windowWidth / 360) * 108}px`,
          height: `${(windowWidth / 360) * 142}px`,
          right: `${(windowWidth / 360) * 16}px`,
        }}
      >
        <div className="detailHeroInfoText1Wrapper">
          <p
            style={{ color: "white" }}
            className="detailHeroInfoText1 contentTitle"
          >
            상세정보
          </p>
          <div className="detailHeroInfoText1Border"></div>
        </div>
        <div className="detailHeroInfoText2Wrapper">
          <p className="contentSubTitle">제조원</p>
        </div>
        <div className="detailHeroInfoText3Wrapper">
          <p className="contentSubTitle">소비자가</p>
        </div>
        <div className="detailHeroInfoText4Wrapper">
          <p className="contentSubTitle">출시년도</p>
          
        </div>
      </div>
      <div className="detailHeroSubBannerWrapper">
        
      </div>
    </div>
  );
}

export default DetailHero;

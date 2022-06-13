import React, { useState } from "react";
import "./detail-hero.css";

function DetailHero(props) {
  const [button1Color, setButton1Color] = useState("black");
  const [button2Color, setButton2Color] = useState("black");
  const [button1TextColor, setButton1TextColor] = useState("white");
  const [button2TextColor, setButton2TextColor] = useState("white");

  const windowWidth = props.windowWidth;
  const waterBrand = props.waterBrand;

  const waterBrandWaterSource =
    waterBrand.sources.length > 1
      ? "OEM"
      : waterBrand.sources[0].sourceName.replace("-", "\n");

  console.log(waterBrand);

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
          <p
            className="contentText"
            style={{
              fontSize: `${waterBrandWaterSource.length > 6 ? 7 : 11}px`,
              whiteSpace: "pre-line",
              textAlign: "right",
            }}
          >
            {waterBrandWaterSource}
          </p>
        </div>
        <div className="detailHeroInfoText3Wrapper">
          <p className="contentSubTitle">소비자가</p>
          <p className="contentText">미구현</p>
        </div>
        <div className="detailHeroInfoText4Wrapper">
          <p className="contentSubTitle">출시년도</p>
          <p className="contentText">{waterBrand.released_date.slice(0, 4)}</p>
        </div>
      </div>
      <div className="detailHeroSubBannerWrapper">
        <div className="detailHeroSubBanner1">
          <div className="detailHeroSubBannerContentWrapper">
            <p
              className="contentTitle"
              style={{
                whiteSpace: "pre-line",
                textAlign: "center",
              }}
            >
              {"수질 부적합\n판정 횟수"}
            </p>
            <p
              className="contentSubTitle"
              style={{
                textAlign: "center",
              }}
            >{`${waterBrand.released_date.slice(0, 4)}년 출시 이후로`}</p>
            <p
              className="mainTitle"
              style={{
                textAlign: "center",
              }}
            >{`${waterBrand.invalid_count}회`}</p>
          </div>
          <button
            className="detailHeroSubBannerButton"
            style={{ background: `${button1Color}` }}
            onTouchStart={(e) => {
              setButton1Color("rgba(255, 255, 255, 0.3)");
              setButton1TextColor("black");
            }}
            onTouchEnd={(e) => {
              setButton1Color("black");
              setButton1TextColor("white");
            }}
          >
            <p className="contentText" style={{ color: `${button1TextColor}` }}>
              전체 랭킹 보러 가기
            </p>
          </button>
        </div>
        <div className="detailHeroSubBanner2">
          <div className="detailHeroSubBannerContentWrapper">
            <p
              className="contentTitle"
              style={{
                whiteSpace: "pre-line",
                textAlign: "center",
                paddingTop: "8px",
                paddingBottom: "10px",
              }}
            >
              소비자가
            </p>
            <p
              className="contentSubTitle"
              style={{
                textAlign: "center",
              }}
            >{`?위/?개 브랜드 중`}</p>
            <p
              className="mainTitle"
              style={{
                textAlign: "center",
              }}
            >{`?위`}</p>
          </div>
          <button
            className="detailHeroSubBannerButton"
            style={{ background: `${button2Color}` }}
            onTouchStart={(e) => {
              setButton2Color("rgba(255, 255, 255, 0.3)");
              setButton2TextColor("black");
            }}
            onTouchEnd={(e) => {
              setButton2Color("black");
              setButton2TextColor("white");
            }}
          >
            {" "}
            <p className="contentText" style={{ color: `${button2TextColor}` }}>
              쿠팡에서 구매하기
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailHero;

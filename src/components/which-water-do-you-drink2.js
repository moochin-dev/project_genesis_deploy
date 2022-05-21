import React from "react";
import { getWaterBrands } from "../data";
import "./which-water-do-you-drink2.css";

const WhichWaterDoYouDrink2 = () => {
  const waterBrands = getWaterBrands();

  const style = {
    width: "220px",
    height: "110px",
    backgroundColor: "gray",
    marginRight: "5px",
  };

  return (
    <div className="list">
      <span>어떤 브랜드의 생수를 드시나요?</span>
      <div className="wrapper">
        <button className="sliderButton left">좌</button>
        <div className="container">
          {waterBrands.map((waterBrand) => (
            <div style={style} key={waterBrand.id}>
              {waterBrand.name}
            </div>
          ))}
          {waterBrands.map((waterBrand) => (
            <div style={style} key={waterBrand.id}>
              {waterBrand.name}
            </div>
          ))}
        </div>
        <button className="sliderButton right">우</button>
      </div>
    </div>
  );
};

export default WhichWaterDoYouDrink2;

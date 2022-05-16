import React from "react";
import { Carousel } from "antd";
import { getWaterBrands } from "../data";
import { Link } from "react-router-dom";

export default function WhichWaterDoYouDrink() {
  const waterBrands = getWaterBrands();
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <h2>어떤 브랜드의 생수를 드시나요?</h2>
      <Carousel autoplay>
        {waterBrands.map((waterBrand) => (
          <div key={waterBrand.id}>
            <Link to={`/${waterBrand.id}`}>
              <h3 style={contentStyle}>{`${waterBrand.name}`}</h3>
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  );
}

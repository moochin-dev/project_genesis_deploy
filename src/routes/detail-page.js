import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DetailPage() {
  const [waterBrand, setWaterBrand] = useState({});
  const location = useLocation();
  const data = location.state.waterBrand;
  useEffect(() => {
    setWaterBrand(data);
  }, []);

  return (
    <>
      <h1>디테일 만드는 중 ㅜㅅㅜ</h1>
      <h2>외않되</h2>
      <h2>오 된다...!!!</h2>
      <h1>제목</h1>
      <h2>{waterBrand.name}</h2>
      <h1>제조사</h1>
      <h2>{waterBrand.company}</h2>
      <img
        src={waterBrand.image_url}
        alt={`${waterBrand.name} 이미지`}
        style={{ width: "304px", height: "304px" }}
      />
    </>
  );
}

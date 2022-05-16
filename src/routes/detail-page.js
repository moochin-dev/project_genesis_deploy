import React from "react";
import { useParams } from "react-router-dom";
import { getWaterBrands } from "../data";

export default function DetailPage() {
  let params = useParams();
  
  const waterBrands = getWaterBrands();

  let waterBrandId = params.waterBrandId;

  let waterBrand = waterBrands[waterBrandId - 1];

  let priceRanking =
    waterBrands
      .map((waterBrand) => waterBrand.consumer_price)
      .sort((a, b) => a - b)
      .indexOf(waterBrand.consumer_price) + 1;

  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
        <h2>{waterBrand.name}</h2>
        <img
          src={require("/Users/obzva/Desktop/find-clean-water/src/img/1000015330746_i1_1200.jpeg")}
          alt="이미지"
          style={{ width: "250px" }}
        />
        <div>
          <h2>정보</h2>
          <h3>{waterBrand.consumer_price}원</h3>
          <h3>출시일: {waterBrand.open_date}</h3>
        </div>
        <div>
          <h2>수질 부적합 판정 횟수</h2>
          <h3>
            {waterBrand.open_date.slice(0, 4)}년 출시 이후로{" "}
            {waterBrand.total_invalid_count}회
          </h3>
          <button type="button">전체 랭킹 보러가기 (미구현)</button>
        </div>
        <div>
          <h2>가격</h2>
          <h3>{priceRanking}위 / {waterBrands.length}개 브랜드 중</h3>
          <h3>{waterBrand.consumer_price}원</h3>
          <button type='button'>어디선가 구매하기 (미구현)</button>
        </div>
        <div>
            <h2>수질 검사 기록</h2>
        </div>
      </div>
    </main>
  );
}

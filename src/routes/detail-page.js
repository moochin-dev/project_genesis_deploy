import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailHero from "../components/detail-hero";
import { useWindowWidth } from "../custom-hooks";

export default function DetailPage() {
  const windowWidth = useWindowWidth();
  const location = useLocation();
  const waterBrand = location.state.waterBrand;

  return (
    <>
      <DetailHero waterBrand={waterBrand} windowWidth={windowWidth} />
    </>
  );
}

import React from "react";
import WhichWaterDoYouDrink from "../components/which-water-do-you-drink";
import WhichWaterDoYouDrink2 from "../components/which-water-do-you-drink2";
import TableForInvalid from "../components/table-for-invalid";
import TableForInvalid2 from "../components/table-for-invalid2";
import Intro from "../components/intro";

function MainPage() {
  return (
    <div>
      <Intro />
      <WhichWaterDoYouDrink />
      <TableForInvalid2 />
    </div>
  );
}

export default MainPage;

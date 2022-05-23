import React from "react";
import WhichWaterDoYouDrink from "../components/which-water-do-you-drink";
import WhichWaterDoYouDrink2 from "../components/which-water-do-you-drink2";
import TableForInvalid from "../components/table-for-invalid";
import TableForInvalid2 from "../components/table-for-invalid2";

function MainPage() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <WhichWaterDoYouDrink />
      <TableForInvalid2 />
    </div>
  );
}

export default MainPage;

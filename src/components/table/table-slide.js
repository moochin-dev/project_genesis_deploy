import React from "react";

function TableSlide(props) {
  const waterBrandGroup = props.waterBrandGroup;
  const windowWidth = props.windowWidth;

  return (
    <div
      className="tableSliderDataSlide"
      style={{ width: `${windowWidth - 40}px` }}
    >
      {waterBrandGroup.map((waterBrand, index) => {
        if (waterBrand)
          return (
            <div className="tableSliderData borderBottom" key={index}>
              <p
                className="contentText tableSliderDataText "
                style={{
                  top: `${
                    waterBrand.name.match(/\s/g)
                      ? waterBrand.name.match(/\s/g).length > 1
                        ? -3
                        : 0
                      : 6
                  }px`,
                  fontSize: `${
                    waterBrand.name.match(/\s/g)
                      ? waterBrand.name.match(/\s/g).length > 1
                        ? 8
                        : 11
                      : 11
                  }px`,
                }}
              >
                {waterBrand.name.replaceAll(" ", "\n")}
              </p>
              <p className="contentText tableSliderDataText">
                {waterBrand.pass ? "O" : "X"}
              </p>
              <p className="contentText tableSliderDataText">
                {waterBrand.invalid_count}
              </p>
              <p className="contentText tableSliderDataText">
                {waterBrand.released_date.slice(0, 4)}
              </p>
              {index < 4 && (
                <div
                  className="tableSliderDataDivider"
                  style={{ width: `${windowWidth - 52}` }}
                ></div>
              )}
            </div>
          );
        else
          return (
            <div className="tableSliderData borderBottom" key={index}>
              {index < 4 && (
                <div
                  className="tableSliderDataDivider"
                  style={{ width: `${windowWidth - 52}` }}
                ></div>
              )}
            </div>
          );
      })}
    </div>
  );
}

export default TableSlide;

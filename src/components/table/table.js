import React from "react";
import { useAxios } from "../../custom-hooks";
import "./table.css";

const Table = () => {
  const columns = [
    "브랜드",
    "제조원",
    "수질적합\n여부",
    "부적합\n판정횟수",
    "출시일",
  ];

  //api 호출
  const { waterBrands, waterSources, brandSourceMappings, testHistory } =
    useAxios();

  return (
    <div className="tableArea">
      <div className="tableWrapper">
        <table>
          <thead className="tableHead contentSubTitle">
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {waterBrands.map((waterBrand, index) => {
              const waterBrandId = waterBrand.id;
              const waterSourceIds = brandSourceMappings
                .filter(
                  (brandSourceMapping) =>
                    brandSourceMapping.brand === waterBrandId
                )
                .map((brandSourceMapping) => brandSourceMapping.source);
              const matchedSources = waterSourceIds.map((id) => {
                if (id < 8) return waterSources[id - 2].name;
                else return waterSources[id - 3].name;
              });
              const invalidCount = testHistory.filter((hist) =>
                waterSourceIds.includes(hist.source)
              ).length;

              const isValid = invalidCount === 0 ? "O" : "X";

              return (
                <tr key={index}>
                  <td>{waterBrand.name}</td>
                  <td>{matchedSources}</td>
                  <td>{isValid}</td>
                  <td>{invalidCount}</td>
                  <td>comingSoon</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

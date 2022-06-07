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

  //api 호출////////
  const { waterBrands, waterSources, brandSourceMappings, testHistory } =
    useAxios();

  return (
    <div className="tableArea">
      <div className="tableWrapper">
        <table>
          <colgroup>
            <col className="col1" />
            <col className="col1" />
            <col className="col2" />
            <col className="col2" />
            <col className="col1" />
          </colgroup>
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
                <tr key={index} style={{ borderBottom: "1px solid black" }}>
                  <td className="contextText">{waterBrand.name}</td>
                  <td className="contextText">{matchedSources}</td>
                  <td className="contextText">{isValid}</td>
                  <td className="contextText">{invalidCount}</td>
                  <td className="contextText">comingSoon</td>
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

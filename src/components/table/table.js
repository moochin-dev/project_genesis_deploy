import React from "react";
import { useAxios } from "../../custom-hooks";
import "./table.css";

const Table = () => {
  const columns = [
    "브랜드",
    "제조원",
    "수질적합여부",
    "부적합판정횟수",
    "출시일",
  ];

  //api 호출
  const { waterBrands, waterSources, brandSourceMappings, testHistory } =
    useAxios();



  /*
  //데이터 편집
  for (let i = 0; i < waterSources.length; i++) {
    waterSources[i].test_history = [];
  }

  for (let i = 0; i < testHistory.length; i++) {
    const sourceIndex = testHistory[i].source - 2;
    waterSources[sourceIndex].test_history.push(testHistory[i]);
  }

  console.log(waterSources);
  
  for (let i = 0; i < waterBrands.length; i++) {
    waterBrands[i].sources = [];
  }

  for (let i = 0; i < brandSourceMappings.length; i++) {
    const brandIndex = brandSourceMappings[i].brand - 1;
    const sourceIndex = brandSourceMappings[i].source - 2;
    waterBrands[brandIndex].sources.push(waterSources[sourceIndex]);
  }

  console.log(waterBrands);*/

  return (
    <div className="tableArea">
      <div className="tableWrapper">
        <table className="tableHead">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
        </table>
        <table className="tableBody">
          <tbody>
            {waterBrands.map((waterBrand, index) => (
              <tr key={index}>
                <td>{waterBrand.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

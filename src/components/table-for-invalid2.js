import React from "react";
import { Link } from "react-router-dom";
import { getWaterBrands } from "../data";

const TableForInvalid2 = () => {
  const waterBrandsSorted = getWaterBrands().sort((a, b) => {
    if (a.total_invalid_count < b.total_invalid_count) return -1;
    if (a.total_invalid_count > b.total_invalid_count) return 1;
    return 0;
  });

  const tableStyle = {
    table: {
      borderCollapse: "collapse",
      textAlign: "left",
      marginLeft: "auto",
      marginRight: "auto",
      width: "95%",
    },
    head: {
      padding: "10px",
      fontWeight: "bold",
      borderBottom: "3px solid",
    },
    body: {
      padding: "10px",
      borderBottom: "1px solid",
    },
  };

  return (
    <table style={tableStyle.table}>
      <thead style={tableStyle.head}>
        <tr>
          <th>브랜드</th>
          <th>수질적합</th>
          <th>부적합 판정 횟수</th>
          <th>출시일</th>
        </tr>
      </thead>
      <tbody>
        {waterBrandsSorted.map((waterBrand) => (
          <tr key={waterBrand.id}>
            <td>
              <Link to={`/${waterBrand.id}`}>{waterBrand.name}</Link>
            </td>
            <td>
              <Link to={`/${waterBrand.id}`}>
                {waterBrand.recent_test_date ? "O" : "X"}
              </Link>
            </td>
            <td>
              <Link to={`/${waterBrand.id}`}>
                {waterBrand.total_invalid_count}
              </Link>
            </td>
            <td>
              <Link to={`/${waterBrand.id}`}>{waterBrand.open_date}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableForInvalid2;

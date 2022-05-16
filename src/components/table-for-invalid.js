import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getWaterBrands } from "../data";

export default function TableForInvalid() {
  const waterBrands = getWaterBrands();

  const columns = [
    {
      title: "브랜드",
      dataIndex: "brand",
      key: "brand",
      render: (text, record, index) => <Link to={`/${waterBrands[index].id}`}>{text}</Link>,
    },
    {
      title: "수질적합",
      dataIndex: "validity",
      key: "validity",
      render: (boolean) => (boolean ? <h3>O</h3> : <h3>X</h3>),
    },
    {
      title: "부적합 판정 횟수",
      dataIndex: "invalid_count",
      key: "invalid_count",
    },
    {
      title: "출시일",
      dataIndex: "open_date",
      key: "open_date",
    },
  ];

  const waterBrandsDataSource = waterBrands.map((x) => {
    return {
      key: x.id,
      brand: x.name,
      validity: x.recent_test_result,
      invalid_count: x.total_invalid_count,
      open_date: x.open_date,
    };
  });

  return (
    <>
      <h2>수질 부적합 판정 횟수</h2>
      <Table dataSource={waterBrandsDataSource} columns={columns} />
    </>
  );
}

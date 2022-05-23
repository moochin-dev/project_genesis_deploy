import React, { useState, useEffect } from "react";
import axios from "axios";

const APITester = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://3.39.164.17:8000/api/product/").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {data.map((datum) => (
        <div key={datum.id}>
          <p>품명: {datum.name}</p>
          <p>가격: {datum.price}</p>
        </div>
      ))}
    </>
  );
};

export default APITester;

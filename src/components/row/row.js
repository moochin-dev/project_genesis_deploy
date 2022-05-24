import React from "react";
import "./row.css";

const Row = () => {
  return (
    <div className="rowWrapper">
      <div className="rowTextWrapper">
        <p className='text1 contentTitle'>당신이 먹는 생수,</p>
        <p className='text2 mainTitle'>어떤 브랜드인가요?</p>
        <p className='text3 mainSubTitle'>(수질검사 통과 못한게 많다는 sub text)</p>
      </div>
    </div>
  );
};

export default Row;

import React from "react";
import "./detail-table.css";

function DetailTable() {
  return (
    <div className="detailTableWrapper">
      <div className="detailTableTextWrapper">
        <p className="detailTableText1 mainSubTitle">당신이 선택한 브랜드의</p>
        <p className="detailTableText2 mainTitle">수질 검사 기록</p>
        <p className="detailTableText3 mainSubTitle">
          수질 적합도 검사는 매년 ?회 실시됩니다.
        </p>
      </div>
      <div className="detailTableArea">
        <div className="detailTableTableWrapper">
          <div className="detailTableTableHeader">
            <p className="detailTableTableHeaderText oneLine contentSubTitle">
              검사 일시
            </p>
            <p className="detailTableTableHeaderText twoLine contentSubTitle">
              검사 결과
            </p>
            <p className="detailTableTableHeaderText twoLine contentSubTitle">
              수원지 이름
            </p>
            <p className="detailTableTableHeaderText oneLine contentSubTitle">
              수원지 지명
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTable;

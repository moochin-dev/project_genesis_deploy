import { Affix } from "antd";

const Nav = () => {
  return (
    <Affix>
      <div style={{ backgroundColor: "gray" }}>
        <h1>통과했수</h1>
        <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
          <h2>nav</h2>
          <h3>nav</h3>
        </nav>
      </div>
    </Affix>
  );
};

export default Nav;

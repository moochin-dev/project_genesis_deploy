import { BackTop } from "antd";

const BackTopButton = () => {
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#009fe3",
    color: "white",
    textAlign: "center",
    fontSize: 14,
  };

  return (
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  );
};

export default BackTopButton;

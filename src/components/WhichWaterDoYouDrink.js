import { Carousel } from "antd";
import "./WhichWaterDoYouDrink.css";

const list = [];
for (let i = 0; i < 12; i++)
  list.push({ name: "물종류" + String(100 - 3 * i), id: i });

const WhichWaterDoYouDrink = () => {
  return (
    <>
      <h1>어떤 생수를 드시나요?</h1>
      <Carousel autoplay={true} effect="fade">
        {list.map((element) => (
          <div key={element.id}>
            <h3 className="Carousel">{element.name}</h3>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default WhichWaterDoYouDrink;

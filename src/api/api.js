import axios from "axios";

let waterBrands = [];

axios.get("http://3.39.164.17:8000/waterbrand/").then((response) => {
  waterBrands = response.data;
});

export const getWaterBrands = () => {
  return waterBrands;
}
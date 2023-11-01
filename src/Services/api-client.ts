import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cf2443232ce843a895e222657adcb91e",
  },
});

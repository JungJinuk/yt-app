import axios from "axios";

const KEY = "AIzaSyCjzGRulMF50b7JNN89AhLYUEKtmU86xQY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

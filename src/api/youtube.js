import axios from "axios";

const KEY = "AIzaSyCutnJahzTTYewMM5mJM-Zb-QfFKp3IDhw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

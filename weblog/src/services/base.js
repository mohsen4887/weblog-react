import axios from "axios";
const http = axios.create({
  baseURL: "https://localhost:44348",
});

export default http;

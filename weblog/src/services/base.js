import axios from "axios";
export const baseUrl = "https://localhost:44348/";
const http = axios.create({
  baseURL: baseUrl,
});

export default http;

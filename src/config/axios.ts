import axios from "axios";

export const api = axios.create({
  baseURL: "http://255.255.255.0:3000",
});

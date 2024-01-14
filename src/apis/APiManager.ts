import axios from "axios";

const APIManager = axios.create({
  baseURL: "http://192.168.0.107:5000/api/v1",
  responseType: "json",
  withCredentials: true,
});

export default APIManager;
// 192.168.0.110

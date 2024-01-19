import axios from "axios";

const APIManager = axios.create({
  baseURL: "http://10.10.2.54:5000/api/v1",
  responseType: "json",
  withCredentials: true,
});

export default APIManager;
// 192.168.0.110

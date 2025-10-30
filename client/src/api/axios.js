import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5322/api", 
  withCredentials: true, 
});

export default API;

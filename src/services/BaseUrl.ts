import axios from "axios"

export const BaseUrl = axios.create({
  baseURL: "http://192.168.1.68:5089/api",
  headers: {
    "Content-Type": "application/json",
  },
});
//
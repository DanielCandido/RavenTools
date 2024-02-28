import getEnv from "@/helpers/getEnv";
import axios from "axios";

const api = axios.create({
  baseURL: getEnv("NEXT_PUBLIC_API_BASE_URL", "http://localhost:4004/api"),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;

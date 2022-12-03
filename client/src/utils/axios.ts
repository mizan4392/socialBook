import axios from "axios";
import { CORE_API_URL } from "./environment";
const token = localStorage.getItem("access_token");
export const makeRequest = axios.create({
  baseURL: CORE_API_URL,
  withCredentials: true,
  headers: { Authorization: "Bearer " + token },
});

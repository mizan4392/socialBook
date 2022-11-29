import axios from "axios";
import { CORE_API_URL } from "./environment";

export const makeRequest = axios.create({
  baseURL: CORE_API_URL,
  withCredentials: true,
});

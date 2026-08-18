import { AccessTokenStorage } from "@shared/auth";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft: import.meta.env.VITE_CYBERSOFT_TOKEN,
  },
});

api.interceptors.request.use((config) => {
  const accessToken = AccessTokenStorage.get();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

import type { LoginData } from "@modules/login";
import { api } from "@shared/api";

import type { LoginResponse } from "./types";
export const login = (payload: LoginData) =>
  api
    .post<LoginResponse>("/QuanLyNguoiDung/DangNhap", payload)
    .then((res) => res.data);

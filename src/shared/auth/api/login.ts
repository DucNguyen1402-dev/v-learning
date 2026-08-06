import { api } from "@shared/api";

import type { LoginPayload, LoginResponse } from "../types";

export const login = (payload: LoginPayload) =>
  api
    .post<LoginResponse>("/QuanLyNguoiDung/DangNhap", payload)
    .then((res) => res.data);

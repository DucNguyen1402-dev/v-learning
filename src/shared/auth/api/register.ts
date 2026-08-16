import { api } from "@shared/api";

import type { RegisterFn, RegisterPayload, RegisterResponse } from "../types";

export const register: RegisterFn = (
  payload: RegisterPayload,
): Promise<RegisterResponse> =>
  api.post("/QuanLyNguoiDung/DangKy", payload).then((res) => res.data);

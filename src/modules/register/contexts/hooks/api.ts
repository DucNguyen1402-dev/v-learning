import { api } from "@shared/api";

import type { RegisterPayload } from "../../types";

export const register = (payload: RegisterPayload) =>
  api.post("/QuanLyNguoiDung/DangKy", payload);

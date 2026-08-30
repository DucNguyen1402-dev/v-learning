import type { UserPayload } from "@modules/user/types";
import { api } from "@shared/api";
export const addUser = async (data: UserPayload) =>
  api.post("/QuanLyNguoiDung/ThemNguoiDung", data);

import type { UserPayload } from "@modules/user/types";
import { api } from "@shared/api";
export const updateUser = async (data: UserPayload) =>
  api.post("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);

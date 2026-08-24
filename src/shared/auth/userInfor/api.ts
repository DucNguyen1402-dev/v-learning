import { api } from "@shared/api";

import type { UserInforResponse } from "./types";
export const userInfor = async (): Promise<UserInforResponse> => {
  const response = await api.post("/QuanLyNguoiDung/ThongTinNguoiDung");
  return response.data;
};

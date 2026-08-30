import { api } from "@shared/api";

import type { UserInfo } from "../types";
export const findUser = async (taiKhoan: string) =>
  api
    .get<UserInfo[]>(
      `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${taiKhoan}`,
    )
    .then((res) => res.data);

import type { User } from "@modules/user/types";
import { api } from "@shared/api";

export const getUsers = async () =>
  api
    .get<User[]>("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
    .then((res) => res.data);

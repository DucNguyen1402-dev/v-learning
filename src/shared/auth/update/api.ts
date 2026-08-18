import type { UpdatePayload } from "./types";

import { api } from "@/shared/api";

export type LoginResponse = {
  accessToken: string;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDt: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  biDanh: string | null;
  maLoaiNguoiDungNavigation: unknown | null;
  hocVienKhoaHoc: unknown[];
  khoaHoc: unknown[];
};

export const updateUser = async (
  payload: UpdatePayload,
): Promise<LoginResponse> =>
  api
    .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload)
    .then((res) => res.data);

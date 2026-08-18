import type { ProfileChangeFormValues } from "@modules/profile/profile-change/types";

import { api } from "@/shared/api";

export type LoginResponse = {
  accessToken: string;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
};

export const updateUser = async (
  payload: ProfileChangeFormValues,
): Promise<LoginResponse> =>
  api
    .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload)
    .then((res) => res.data);

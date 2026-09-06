import type { UserPayload } from "@modules/user/types";

import type { UpdateUserFormData, UserInfo } from "../../types";

const defaultPassword = "123456789";
export const createUpdateUserPayload = (
  data: UpdateUserFormData,
  userInfo: UserInfo,
): UserPayload => {
  return {
    maNhom: "GP01",
    soDT: data.soDT,
    matKhau: userInfo.matKhau ?? defaultPassword,
    taiKhoan: userInfo.taiKhoan,
    hoTen: data.hoTen,
    email: data.email,
    maLoaiNguoiDung: data.maLoaiNguoiDung,
  };
};

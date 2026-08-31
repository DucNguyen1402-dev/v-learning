import type {
  UpdateUserFormData,
  UserInfo,
} from "@modules/user/edit-user/types";
import type { UserPayload } from "@modules/user/types";

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

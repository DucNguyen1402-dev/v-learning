import type { Avatar } from "@shared/avatar/types";
import type { ThemeValue } from "@shared/theme/types";

export type CurrentUser = {
  taiKhoan: string;
  email: string;
  hoTen: string;
  soDT: string;
  theme?: ThemeValue;
  avatar?: Avatar;
  maLoaiNguoiDung: string;
};

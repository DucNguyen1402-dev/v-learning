import type { Avatar } from "@shared/avatar/types";
import type { ThemeValue } from "@shared/theme/types";

export type CurrentUser = {
  readonly taiKhoan: string;
  email: string;
  hoTen: string;
  soDT: string;
  theme?: ThemeValue;
  avatar?: Avatar;
  readonly maLoaiNguoiDung: string;
};

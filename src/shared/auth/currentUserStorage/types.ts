import type { Avatar } from "@shared/avatar";
import type { ThemeValue } from "@shared/theme";

export type CurrentUser = {
  taiKhoan: string;
  email: string;
  hoTen: string;
  soDT: string;
  theme?: ThemeValue;
  avatar?: Avatar;
};

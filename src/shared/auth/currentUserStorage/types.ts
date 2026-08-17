import type { AvatarIndex } from "@shared/avatar";
import type { ThemeValue } from "@shared/theme";

export type CurrentUser = {
  taiKhoan: string;
  email: string;
  hoTen: string;
  soDT: string;
  theme?: ThemeValue;
  avatarIndex?: AvatarIndex;
};

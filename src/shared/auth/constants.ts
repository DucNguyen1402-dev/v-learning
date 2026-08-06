export const STORAGE_KEYS = {
  USER: "v-learning:current-user",
  ACCESS_TOKEN: "v-learning:access-token",
} as const;

export type CurrentUser = {
  taiKhoan: string;
  email: string;
  hoTen: string;
  soDT: string;
};

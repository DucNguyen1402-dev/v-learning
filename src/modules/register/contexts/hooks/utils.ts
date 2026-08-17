import type { RegisterFormData } from "./types";
export const getDefaultValues = (): RegisterFormData => ({
  taiKhoan: "",
  matKhau: "",
  hoTen: "",
  email: "",
  soDT: "",
  maNhom: "GP01",
});

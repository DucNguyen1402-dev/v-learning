import { getCurrentUserProperty } from "./getCurrentUserProperty";
export const isAdmin = () => {
  const maLoaiNguoiDung = getCurrentUserProperty("maLoaiNguoiDung");

  return maLoaiNguoiDung === "GV";
};

import { AccessTokenStorage } from "@shared/storage/access-token";

import { getCurrentUserProperty } from "./getCurrentUserProperty";
export const isAdmin = () => {
  const maLoaiNguoiDung = getCurrentUserProperty("maLoaiNguoiDung");
  const accessToken = AccessTokenStorage.get();

  return maLoaiNguoiDung === "GV" && Boolean(accessToken);
};

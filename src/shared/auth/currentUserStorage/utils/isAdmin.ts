import { AccessTokenStorage } from "@shared/auth/accessTokenStorage";

import { getCurrentUserProperty } from "./getCurrentUserProperty";
export const isAdmin = () => {
  const maLoaiNguoiDung = getCurrentUserProperty("maLoaiNguoiDung");
  const accessToken = AccessTokenStorage.get();

  return maLoaiNguoiDung === "GV" && Boolean(accessToken);
};

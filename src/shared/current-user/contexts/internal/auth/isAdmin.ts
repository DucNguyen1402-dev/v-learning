import { AccessTokenStorage, CurrentUserStorage } from "@shared/storage";

export const isAdmin = () => {
  const maLoaiNguoiDung = CurrentUserStorage.getProperty("maLoaiNguoiDung");
  const accessToken = AccessTokenStorage.get();

  return maLoaiNguoiDung === "GV" && Boolean(accessToken);
};

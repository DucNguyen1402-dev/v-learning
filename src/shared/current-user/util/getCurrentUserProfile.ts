import { CurrentUserStorage } from "@shared/auth";

export const getCurrentUserProfile = () => {
  const currentUser = CurrentUserStorage.get();

  if (!currentUser) return undefined;

  const { hoTen, email, soDT, taiKhoan } = currentUser;

  return {
    name: hoTen,
    email,
    phone: soDT,
    account: taiKhoan,
  };
};

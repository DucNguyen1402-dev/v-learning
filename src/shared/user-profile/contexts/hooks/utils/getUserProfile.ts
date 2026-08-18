import { CurrentUserStorage } from "@shared/auth";

import type { UserProfile } from "../types";
export const getUserProfile = (): UserProfile => {
  const currentUser = CurrentUserStorage.get();
  const { hoTen, email, soDT, taiKhoan } = currentUser;
  return {
    hoTen,
    email,
    soDT,
    taiKhoan,
  };
};

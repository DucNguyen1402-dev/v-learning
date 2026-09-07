import type { CurrentUser } from "@shared/storage";

import type { Profile } from "./types";

export const createUserProfile = (user: CurrentUser | undefined): Profile => {
  if (!user) {
    return {
      hoTen: "",
      email: "",
      soDT: "",
      taiKhoan: "",
    };
  }

  return {
    hoTen: user.hoTen,
    email: user.email,
    soDT: user.soDT,
    taiKhoan: user.taiKhoan,
  };
};

import { CurrentUserStorage } from "@shared/auth";

import type { userAccount } from "../types";

export const tryGetUserAccount = (): userAccount | undefined => {
  const currentUser = CurrentUserStorage.tryGet();
  if (!currentUser) return undefined;

  return {
    value: currentUser.taiKhoan,
  };
};

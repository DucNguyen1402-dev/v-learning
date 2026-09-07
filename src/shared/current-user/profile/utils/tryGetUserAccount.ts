import { CurrentUserStorage } from "@shared/storage";

import type { userAccount } from "../types";

export const tryGetUserAccount = (): userAccount | undefined => {
  const currentUser = CurrentUserStorage.tryGet();
  if (!currentUser) return undefined;

  return {
    value: currentUser.taiKhoan,
  };
};

import { CurrentUserStorage } from "@shared/auth/currentUserStorage";

import type { Avatar } from "../types";

export const getUserAvatar = (): Avatar => {
  const currentUser = CurrentUserStorage.tryGet();
  const storageAvatar: Avatar | undefined = currentUser?.avatar;
  if (storageAvatar) {
    return storageAvatar;
  }
  const fullName = currentUser?.hoTen;

  if (!fullName?.trim())
    return {
      type: "initials",
      value: "U",
    };

  return {
    type: "initials",
    value: fullName.trim().split(/\s+/).at(-1)!.charAt(0).toUpperCase(),
  };
};

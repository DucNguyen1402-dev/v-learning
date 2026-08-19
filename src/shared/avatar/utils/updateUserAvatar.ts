import { CurrentUserStorage } from "@shared/auth/currentUserStorage";

import type { Avatar } from "../types";
export const updateUserAvatar = (avatar: Avatar) => {
  CurrentUserStorage.update({
    avatar,
  });
};

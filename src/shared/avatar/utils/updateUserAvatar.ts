import { CurrentUserStorage } from "@shared/auth";

import type { Avatar } from "../types";
export const updateUserAvatar = (avatar: Avatar) => {
  CurrentUserStorage.update({
    avatar,
  });
};

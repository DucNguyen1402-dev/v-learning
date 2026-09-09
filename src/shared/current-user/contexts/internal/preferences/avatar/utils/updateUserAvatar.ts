import { CurrentUserStorage } from "@shared/storage";

import type { Avatar } from "../types";
export const updateUserAvatar = (avatar: Avatar) => {
  CurrentUserStorage.update({
    avatar,
  });
};

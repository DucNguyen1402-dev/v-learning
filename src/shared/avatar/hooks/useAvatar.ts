import { useState } from "react";

import type { Avatar } from "../types";
import { getUserAvatar, updateUserAvatar } from "../utils";

export const useAvatar = () => {
  const userAvatar = getUserAvatar();
  const [avatar, setAvatar] = useState<Avatar>(userAvatar);

  const updateAvatar = (newAvatar: Avatar) => {
    updateUserAvatar(newAvatar);
    const userAvatar = getUserAvatar();
    setAvatar(userAvatar);
  };
  return { avatar, updateAvatar };
};

export type UseAvatarReturnType = ReturnType<typeof useAvatar>;

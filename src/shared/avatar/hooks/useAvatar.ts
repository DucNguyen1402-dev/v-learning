import { useCallback, useState } from "react";

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

  const refreshAvatar = useCallback(() => {
    const userAvatar = getUserAvatar();
    setAvatar(userAvatar);
  }, []);
  return { avatar, updateAvatar, refreshAvatar };
};

export type UseAvatarReturnType = ReturnType<typeof useAvatar>;

import { useCallback, useState } from "react";

import type { Avatar } from "./types";
import { getUserAvatar, updateUserAvatar } from "./utils";

export const useAvatar = () => {
  const userAvatar = getUserAvatar();
  const [current, setCurrent] = useState<Avatar>(userAvatar);

  const update = (newAvatar: Avatar) => {
    updateUserAvatar(newAvatar);
    const userAvatar = getUserAvatar();
    setCurrent(userAvatar);
  };

  const refresh = useCallback(() => {
    const userAvatar = getUserAvatar();
    setCurrent(userAvatar);
  }, []);
  return { current, update, refresh };
};

export type UseAvatarReturnType = ReturnType<typeof useAvatar>;

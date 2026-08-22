import type { Avatar } from "../types";

export const toAvatars = (avatarList: string[]): Avatar[] => {
  return avatarList.map((avatar) => ({
    type: "image",
    value: avatar,
  }));
};

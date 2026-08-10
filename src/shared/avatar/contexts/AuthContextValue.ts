import { type AvatarIndex, avatarList } from "../config";

export type AvatarContextValue = {
  updateAvatarIndex: (avatarIndex: AvatarIndex) => void;
  avatarList: typeof avatarList;
  avatarName: string | null;
  storageAvatar: (typeof avatarList)[number] | null;
  account: string;
  currentAvatarIndex: AvatarIndex;
};

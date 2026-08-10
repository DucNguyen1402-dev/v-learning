import { type ReactNode, useMemo, useState } from "react";

import { type AvatarIndex, avatarList } from "../config";
import type { CurrentUser } from "../types";
import { getAvatarInitial, getCurrentUser, saveCurrentUser } from "../utils";
import { AuthContext } from "./AuthContext";
import type { AuthContextValue } from "./AuthContextValue";

type AuthProviderProps = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState(getCurrentUser);

  const updateAvatarIndex = (avatarIndex: AvatarIndex) => {
    setCurrentUser((prev: CurrentUser | null) => {
      if (!prev) return prev;

      const newUser = {
        ...prev,
        avatarIndex,
      };

      saveCurrentUser(newUser);
      return newUser;
    });
  };

  const value: AuthContextValue = useMemo(
    () => ({
      updateAvatarIndex,
      avatarList,
      avatarName: getAvatarInitial(currentUser?.hoTen),
      storageAvatar:
        currentUser?.avatarIndex != null
          ? avatarList[currentUser.avatarIndex]
          : null,
      account: currentUser?.taiKhoan,
      currentAvatarIndex: currentUser.avatarIndex,
    }),
    [currentUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

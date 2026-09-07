import { useState } from "react";

import { CurrentUserStorage } from "@shared/storage";

import type { UserProfile } from "./types";

export const useUserProfile = () => {
  const currentUser = CurrentUserStorage.get();

  const [profile, setProfile] = useState<UserProfile>({
    hoTen: currentUser.hoTen,
    email: currentUser.email,
    soDT: currentUser.soDT,
    taiKhoan: currentUser.taiKhoan,
  });

  const refreshProfile = () => {
    const currentUser = CurrentUserStorage.get();
    setProfile({
      hoTen: currentUser.hoTen,
      email: currentUser.email,
      soDT: currentUser.soDT,
      taiKhoan: currentUser.taiKhoan,
    });
  };

  return {
    profile,
    refreshProfile,
  };
};

export type UserProfileReturnType = ReturnType<typeof useUserProfile>;

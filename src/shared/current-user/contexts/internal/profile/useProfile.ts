import { useState } from "react";

import { CurrentUserStorage } from "@shared/storage";

import { createUserProfile } from "./helper";
import type { Profile } from "./types";

export const useProfile = () => {
  const currentUser = CurrentUserStorage.tryGet();
  const [current, setCurrent] = useState<Profile>(
    createUserProfile(currentUser),
  );

  const refresh = () => {
    const currentUser = CurrentUserStorage.tryGet();
    setCurrent(createUserProfile(currentUser));
  };

  return {
    current,
    refresh,
  };
};

export type ProfileReturnType = ReturnType<typeof useProfile>;

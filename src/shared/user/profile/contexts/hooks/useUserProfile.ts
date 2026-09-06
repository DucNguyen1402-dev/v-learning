import { useState } from "react";

import type { UserProfile } from "./types";
import { getUserProfile } from "./utils";

export const useUserProfile = () => {
  const currentProfile = getUserProfile();
  const [profile, setProfile] = useState<UserProfile>(currentProfile);

  const refreshProfile = () => {
    const currentProfile = getUserProfile();
    setProfile(currentProfile);
  };

  return {
    profile,
    refreshProfile,
  };
};

export type UserProfileReturnType = ReturnType<typeof useUserProfile>;

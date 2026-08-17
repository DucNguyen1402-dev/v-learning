import { useState } from "react";

import type { UserProfile } from "./types";
import { getCurrentUserProfile } from "./utils";

export const useUserProfile = () => {
  const currentProfile = getCurrentUserProfile();
  const [profile, setProfile] = useState<UserProfile | undefined>(
    currentProfile,
  );

  const refreshProfile = () => {
    const currentProfile = getCurrentUserProfile();
    setProfile(currentProfile ?? undefined);
  };

  return {
    profile,
    refreshProfile,
  };
};

export type UserProfileReturnType = ReturnType<typeof useUserProfile>;

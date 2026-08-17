import { useContext } from "react";

import { UserProfileContext } from "./UserProfileContext";

export const useUserProfileContext = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error(
      "useUserProfileContext must be used within a <UserProfileProvider>",
    );
  }
  return context;
};

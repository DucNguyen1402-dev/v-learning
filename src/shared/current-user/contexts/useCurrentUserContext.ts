import { useContext } from "react";

import { CurrentUserContext } from "./CurrentUserContext";

export const useCurrentUserContext = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error(
      "useCurrentUserContext must be used within a CurrentUserProvider",
    );
  }

  return context;
};

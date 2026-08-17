import { type ReactNode, useEffect } from "react";

import { tryGetCurrentUserFromStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type RequireCurrentUserProps = {
  children: ReactNode;
};
export const RequireCurrentUser = ({ children }: RequireCurrentUserProps) => {
  const currentUser = tryGetCurrentUserFromStorage();
  const { go } = Navigation.hooks.useNavigate();

  useEffect(() => {
    if (!currentUser) {
      go(Navigation.client.keys.LOGIN);
    }
  }, [currentUser, go]);

  if (!currentUser) {
    return null;
  }

  return <>{children}</>;
};

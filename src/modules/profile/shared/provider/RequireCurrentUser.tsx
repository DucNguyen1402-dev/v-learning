import { type ReactNode, useEffect } from "react";

import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type RequireCurrentUserProps = {
  children: ReactNode;
};
export const RequireCurrentUser = ({ children }: RequireCurrentUserProps) => {
  const currentUser = CurrentUserStorage.tryGet();
  const { go } = Navigation.hooks.useNavigate();

  useEffect(() => {
    if (!currentUser) {
      go({
        routeKey: Navigation.client.keys.LOGIN,
      });
    }
  }, [currentUser, go]);

  if (!currentUser) {
    return null;
  }

  return <>{children}</>;
};

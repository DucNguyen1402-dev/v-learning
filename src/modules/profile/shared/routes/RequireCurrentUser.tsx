import { type ReactNode, useEffect } from "react";

import { LoginNavigation } from "@modules/login";
import { hasStoredCurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type RequireCurrentUserProps = {
  children: ReactNode;
};
export const RequireCurrentUser = ({ children }: RequireCurrentUserProps) => {
  const storedCurrentUser = hasStoredCurrentUser();
  const { go } = Navigation.hooks.useNavigateWithState();

  useEffect(() => {
    if (!storedCurrentUser) {
      go({
        routeKey: Navigation.client.keys.LOGIN,
        payload: {
          ...LoginNavigation.required(),
        },
      });
    }
  }, [storedCurrentUser, go]);

  if (!storedCurrentUser) {
    return null;
  }

  return <>{children}</>;
};

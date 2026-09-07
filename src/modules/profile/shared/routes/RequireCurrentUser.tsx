import { type ReactNode, useEffect } from "react";

import { LoginNavigation } from "@modules/login";
import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type RequireCurrentUserProps = {
  children: ReactNode;
};
export const RequireCurrentUser = ({ children }: RequireCurrentUserProps) => {
  const { hasCurrentUser } = CurrentUser.use();
  const { go } = Navigation.hooks.useNavigateWithState();

  useEffect(() => {
    if (!hasCurrentUser) {
      go({
        routeKey: Navigation.client.keys.LOGIN,
        payload: {
          ...LoginNavigation.required(),
        },
      });
    }
  }, [hasCurrentUser, go]);

  if (!hasCurrentUser) {
    return null;
  }

  return <>{children}</>;
};

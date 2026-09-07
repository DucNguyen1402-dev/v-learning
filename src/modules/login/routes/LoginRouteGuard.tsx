import { useEffect } from "react";

import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type LoginRouteGuardProps = {
  children: React.ReactNode;
};
export const LoginRouteGuard = ({ children }: LoginRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const { hasCurrentUser } = CurrentUser.use();

  useEffect(() => {
    if (hasCurrentUser) {
      go({
        routeKey: Navigation.client.keys.HOME,
      });
    }
  }, [go, hasCurrentUser]);

  if (hasCurrentUser) {
    return null;
  }
  return children;
};

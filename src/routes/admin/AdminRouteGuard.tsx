import { useEffect } from "react";

import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type AdminRouteGuardProps = {
  children: React.ReactNode;
};
export const AdminRouteGuard = ({ children }: AdminRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const { hasCurrentUser } = CurrentUser.use();
  const targetRouteKey = hasCurrentUser
    ? Navigation.client.keys.HOME
    : Navigation.client.keys.LOGIN;
  const { isAdmin } = CurrentUser.use();

  useEffect(() => {
    if (!isAdmin) {
      go({
        routeKey: targetRouteKey,
        payload: {
          adminAuthRequired: true,
        },
      });
    }
  }, [isAdmin, go, targetRouteKey]);
  if (!isAdmin) return null;

  return children;
};

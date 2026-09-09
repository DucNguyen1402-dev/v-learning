import { useEffect } from "react";

import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type LoginRouteGuardProps = {
  children: React.ReactNode;
};
export const LoginRouteGuard = ({ children }: LoginRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const hasCurrentUser = CurrentUser.utils.hasStored();
  const isAdmin = CurrentUser.utils.isAdmin();

  const targetRouteKey = isAdmin
    ? Navigation.admin.keys.COURSES
    : Navigation.client.keys.HOME;
  useEffect(() => {
    if (!hasCurrentUser) return;
    go({
      routeKey: targetRouteKey,
    });
  }, [go, hasCurrentUser, targetRouteKey]);

  if (hasCurrentUser) {
    return null;
  }
  return children;
};

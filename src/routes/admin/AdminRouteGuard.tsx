import { useEffect } from "react";

import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type AdminRouteGuardProps = {
  children: React.ReactNode;
};
export const AdminRouteGuard = ({ children }: AdminRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const hasCurrentUser = CurrentUserStorage.tryGet();
  const targetRouteKey = hasCurrentUser
    ? Navigation.client.keys.HOME
    : Navigation.client.keys.LOGIN;
  const isAdmin = CurrentUserStorage.isAdmin();

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

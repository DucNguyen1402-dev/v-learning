import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { CurrentUserStorage } from "@shared/storage";

type AdminRouteGuardProps = {
  children: React.ReactNode;
};
export const AdminRouteGuard = ({ children }: AdminRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const hasAuthentication =
    CurrentUserStorage.hasStored() && CurrentUserStorage.isAdmin();

  const targetRouteKey = hasAuthentication
    ? Navigation.admin.keys.COURSES
    : Navigation.client.keys.HOME;

  useEffect(() => {
    go({
      routeKey: targetRouteKey,
      payload: {
        adminAuthRequired: true,
      },
    });
  }, [hasAuthentication, go, targetRouteKey]);
  if (!hasAuthentication) return null;

  return children;
};

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type LoginRouteGuardProps = {
  children: React.ReactNode;
};
export const LoginRouteGuard = ({ children }: LoginRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const { hasCurrentUser, isAdmin } = CurrentUser.use();
  const { pathname } = useLocation();
  const isLoginRouteActive = Navigation.utils.isRouteActive(
    pathname,
    Navigation.client.keys.LOGIN,
  );

  const routeKey = isAdmin
    ? Navigation.admin.keys.COURSES
    : Navigation.client.keys.HOME;
  useEffect(() => {
    if (hasCurrentUser && !isLoginRouteActive) {
      go({
        routeKey,
      });
    }
  }, [go, hasCurrentUser, isLoginRouteActive, routeKey]);

  if (hasCurrentUser && !isLoginRouteActive) {
    return null;
  }
  return children;
};

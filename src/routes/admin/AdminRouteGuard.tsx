import { useEffect } from "react";

import { LoginNavigationPayload } from "@modules/login/navigation";
import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type AdminRouteGuardProps = {
  children: React.ReactNode;
};
export const AdminRouteGuard = ({ children }: AdminRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const hasCurrentUser = CurrentUser.utils.hasStored();

  const hasAuthentication = CurrentUser.utils.isAdmin();

  useEffect(() => {
    if (!hasCurrentUser) {
      go({
        routeKey: Navigation.client.keys.LOGIN,
        payload: LoginNavigationPayload.adminAuthRequired(),
      });
      return;
    }

    if (!hasAuthentication) {
      go({
        routeKey: Navigation.client.keys.HOME,
      });
      return;
    }
  }, [hasAuthentication, go, hasCurrentUser]);

  if (!hasCurrentUser || !hasAuthentication) {
    return null;
  }

  return children;
};

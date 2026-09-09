import { useEffect } from "react";

import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type ClientRouteGuardProps = {
  children: React.ReactNode;
};
export const ClientRouteGuard = ({ children }: ClientRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const isAdmin = CurrentUser.utils.isAdmin();

  useEffect(() => {
    if (isAdmin) {
      go({
        routeKey: Navigation.admin.keys.COURSES,
      });
    }
  }, [go, isAdmin]);

  if (isAdmin) {
    return null;
  }
  return children;
};

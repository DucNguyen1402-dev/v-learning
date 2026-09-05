import { useEffect } from "react";

import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type ClientRouteGuardProps = {
  children: React.ReactNode;
};
export const ClientRouteGuard = ({ children }: ClientRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigateWithState();
  const isAdmin = CurrentUserStorage.isAdmin();

  useEffect(() => {
    if (isAdmin) {
      go({
        routeKey: Navigation.admin.keys.COURSES,
      });
    }
  }, [go, isAdmin]);

  return children;
};

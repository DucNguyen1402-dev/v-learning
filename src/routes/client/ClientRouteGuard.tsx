import { useEffect } from "react";

import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type ClientRouteGuardProps = {
  children: React.ReactNode;
};
export const ClientRouteGuard = ({ children }: ClientRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigate();
  const isAdmin = CurrentUserStorage.isAdmin();

  useEffect(() => {
    if (isAdmin) {
      go({
        routeKey: Navigation.admin.keys.COURSES,
        area: "admin",
      });
    }
  }, [go, isAdmin]);

  return children;
};

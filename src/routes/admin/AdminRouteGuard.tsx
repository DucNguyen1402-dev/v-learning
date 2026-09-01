import { useEffect } from "react";

import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type AdminRouteGuardProps = {
  children: React.ReactNode;
};
export const AdminRouteGuard = ({ children }: AdminRouteGuardProps) => {
  const { go } = Navigation.hooks.useNavigate();
  const isAdmin = CurrentUserStorage.isAdmin();

  useEffect(() => {
    if (!isAdmin) {
      go(Navigation.client.keys.LOGIN, "client");
    }
  }, [isAdmin, go]);
  if (!isAdmin) return null;

  return children;
};

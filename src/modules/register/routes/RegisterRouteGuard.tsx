import { useEffect } from "react";

import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type RegisterRouteGuardProps = {
  children: React.ReactNode;
};
export const RegisterRouteGuard = ({ children }: RegisterRouteGuardProps) => {
  const { back } = Navigation.hooks.useNavigateWithState();
  const { hasCurrentUser } = CurrentUser.use();

  useEffect(() => {
    if (hasCurrentUser) {
      back();
    }
  }, [back, hasCurrentUser]);

  if (hasCurrentUser) {
    return null;
  }
  return children;
};

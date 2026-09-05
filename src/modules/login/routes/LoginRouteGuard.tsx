import { useEffect } from "react";

import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type LoginRouteGuardProps = {
  children: React.ReactNode;
};
export const LoginRouteGuard = ({ children }: LoginRouteGuardProps) => {
  const { back } = Navigation.hooks.useNavigateWithState();
  const hasCurrentUser = CurrentUserStorage.tryGet();

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

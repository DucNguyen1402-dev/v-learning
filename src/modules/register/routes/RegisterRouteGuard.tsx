import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { CurrentUserStorage } from "@shared/storage";

type RegisterRouteGuardProps = {
  children: React.ReactNode;
};
export const RegisterRouteGuard = ({ children }: RegisterRouteGuardProps) => {
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

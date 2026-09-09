import { type ReactNode, useEffect } from "react";

import { LoginNavigationPayload } from "@modules/login/navigation";
import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";

type RequireCurrentUserProps = {
  children: ReactNode;
};
export const RequireCurrentUser = ({ children }: RequireCurrentUserProps) => {
  const { hasCurrentUser } = CurrentUser.use();
  const { go } = Navigation.hooks.useNavigateWithState();

  useEffect(() => {
    if (!hasCurrentUser) {
      go({
        routeKey: Navigation.client.keys.LOGIN,
        payload: LoginNavigationPayload.required(),
      });
    }
  }, [hasCurrentUser, go]);

  if (!hasCurrentUser) {
    return null;
  }

  return <>{children}</>;
};

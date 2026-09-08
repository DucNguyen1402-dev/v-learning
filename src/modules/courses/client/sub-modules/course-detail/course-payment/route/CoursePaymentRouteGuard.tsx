import { type ReactNode, useEffect } from "react";

import { LoginNavigationPayload } from "@modules/login/navigation";
import { Navigation } from "@shared/navigation";
import { AccessTokenStorage } from "@shared/storage";

type CoursePaymentRouteGuardProps = {
  children: ReactNode;
};

export const CoursePaymentRouteGuard = ({
  children,
}: CoursePaymentRouteGuardProps) => {
  const isLogin = AccessTokenStorage.isLogin();
  const { go } = Navigation.hooks.useNavigateWithState();

  useEffect(() => {
    if (!isLogin) {
      go({
        routeKey: Navigation.client.keys.LOGIN,
        payload: LoginNavigationPayload.required(),
      });
    }
  }, [go, isLogin]);

  if (!isLogin) return null;

  return children;
};

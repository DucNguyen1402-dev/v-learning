import { type ReactNode, useEffect } from "react";

import { LoginNavigation } from "@modules/login";
import { AccessTokenStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type CoursePaymentRouteGuardProps = {
  children: ReactNode;
};

export const CoursePaymentRouteGuard = ({
  children,
}: CoursePaymentRouteGuardProps) => {
  const isLogin = AccessTokenStorage.isLogin();
  const { go } = Navigation.hooks.useNavigate();

  useEffect(() => {
    if (!isLogin) {
      go(Navigation.client.keys.LOGIN, "client", LoginNavigation.required());
    }
  }, [go, isLogin]);

  if (!isLogin) return null;

  return children;
};

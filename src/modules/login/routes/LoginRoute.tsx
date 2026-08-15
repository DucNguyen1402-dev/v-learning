import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { LoginProvider } from "../contexts";
import { LoginPage } from "../pages/LoginPage";

export const LoginRoute: AppRoute = {
  path: AppRoutes.client.paths.LOGIN,
  element: (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  ),
};

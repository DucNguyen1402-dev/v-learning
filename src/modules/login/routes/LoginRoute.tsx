import type { AppRoute } from "@routes";
import { Navigation } from "@shared/navigation";

import { LoginProvider } from "../contexts";
import { LoginPage } from "../pages/LoginPage";

export const LoginRoute: AppRoute = {
  path: Navigation.client.paths.LOGIN,
  element: (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  ),
};

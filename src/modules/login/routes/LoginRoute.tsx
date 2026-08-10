import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { Login } from "../Login";
import { LoginPage } from "../pages/LoginPage";

export const LoginRoute: AppRoute = {
  path: AppRoutes.client.paths.LOGIN,
  element: (
    <Login.Provider>
      <LoginPage />
    </Login.Provider>
  ),
};

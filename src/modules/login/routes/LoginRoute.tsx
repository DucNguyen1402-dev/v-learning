import type { AppRoute } from "@routes/client";
import { CLIENT_ROUTES_KEYS } from "@routes/client";

import { Login } from "../Login";
import { LoginPage } from "../pages/LoginPage";

export const LoginRoute: AppRoute = {
  path: CLIENT_ROUTES_KEYS.login,
  element: (
    <Login.Provider>
      <LoginPage />
    </Login.Provider>
  ),
};

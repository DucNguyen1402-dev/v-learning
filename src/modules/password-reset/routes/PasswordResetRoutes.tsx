import type { AppRoute } from "@routes/client";
import { CLIENT_ROUTES_KEYS } from "@routes/client";

import { PasswordResetPage } from "../pages/PasswordResetPage";

export const PasswordResetRoute: AppRoute = {
  path: CLIENT_ROUTES_KEYS.passwordReset,
  element: <PasswordResetPage />,
};

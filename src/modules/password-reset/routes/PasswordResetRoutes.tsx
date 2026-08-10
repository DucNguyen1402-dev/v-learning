import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { PasswordResetPage } from "../pages/PasswordResetPage";

export const PasswordResetRoute: AppRoute = {
  path: AppRoutes.client.paths.PASSWORD_RESET,
  element: <PasswordResetPage />,
};

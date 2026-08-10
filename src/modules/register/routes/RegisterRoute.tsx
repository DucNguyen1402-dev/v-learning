import type { AppRoute } from "@routes/client";
import { CLIENT_ROUTES_KEYS } from "@routes/client";

import { RegisterPage } from "../pages/RegisterPage";

export const RegisterRoute: AppRoute = {
  path: CLIENT_ROUTES_KEYS.register,
  element: <RegisterPage />,
};

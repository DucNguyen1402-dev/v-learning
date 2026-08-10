import type { AppRoute } from "@routes/client";
import { CLIENT_ROUTES_KEYS } from "@routes/client";

import { HomePage } from "../pages/HomePage";

export const HomeRoute: AppRoute = {
  path: CLIENT_ROUTES_KEYS.home,
  element: <HomePage />,
};

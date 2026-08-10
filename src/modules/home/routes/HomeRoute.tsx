import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { HomePage } from "../pages/HomePage";

export const HomeRoute: AppRoute = {
  path: AppRoutes.client.paths.HOME,
  element: <HomePage />,
};

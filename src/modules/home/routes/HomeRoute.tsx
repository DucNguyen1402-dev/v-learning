import type { AppRoute } from "@routes";
import { Navigation } from "@shared/navigation";

import { HomePage } from "../pages/HomePage";

export const HomeRoute: AppRoute = {
  path: Navigation.client.paths.HOME,
  element: <HomePage />,
};

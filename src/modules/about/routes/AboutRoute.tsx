import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { AboutPage } from "../pages/AboutPage";

export const AboutRoute: AppRoute = {
  path: AppRoutes.client.paths.ABOUT,
  element: <AboutPage />,
};

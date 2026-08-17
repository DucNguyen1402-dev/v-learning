import type { AppRoute } from "@routes";
import { Navigation } from "@shared/navigation";

import { AboutPage } from "../pages/AboutPage";

export const AboutRoute: AppRoute = {
  path: Navigation.client.paths.ABOUT,
  element: <AboutPage />,
};

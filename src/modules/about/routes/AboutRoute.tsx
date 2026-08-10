import type { AppRoute } from "@routes/client";
import { CLIENT_ROUTES_KEYS } from "@routes/client";

import { AboutPage } from "../pages/AboutPage";

export const AboutRoute: AppRoute = {
  path: CLIENT_ROUTES_KEYS.about,
  element: <AboutPage />,
};

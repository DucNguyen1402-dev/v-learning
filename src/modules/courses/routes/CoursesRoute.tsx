import type { AppRoute } from "@routes/client";
import { CLIENT_ROUTES_KEYS } from "@routes/client";

import { CoursesPage } from "../pages/CoursesPage";

export const CoursesRoute: AppRoute = {
  path: CLIENT_ROUTES_KEYS.courses,
  element: <CoursesPage />,
};

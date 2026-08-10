import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { CoursesPage } from "../pages/CoursesPage";

export const CoursesRoute: AppRoute = {
  path: AppRoutes.client.paths.COURSES,
  element: <CoursesPage />,
};

import type { AppRoute } from "@routes";
import { Navigation } from "@shared/navigation";

import { CoursesPage } from "../pages/CoursesPage";

export const CoursesRoute: AppRoute = {
  path: Navigation.client.paths.COURSES,
  element: <CoursesPage />,
};

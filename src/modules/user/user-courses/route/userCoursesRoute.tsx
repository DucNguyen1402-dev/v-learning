import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { UserCoursesPage } from "../pages/UserCoursesPage";

export const userCoursesRoute = (
  <Route
    path={Navigation.admin.builderPaths.ADMIN_USER_COURSES}
    element={<UserCoursesPage />}
  />
);

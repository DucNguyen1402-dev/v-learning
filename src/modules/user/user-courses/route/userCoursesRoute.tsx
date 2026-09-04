import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { UserCoursesPage } from "../pages/UserCoursesPage";

export const userCoursesRoute = (
  <Route
    path={Navigation.admin.buildersPaths.ADMIN_USER_COURSES}
    element={<UserCoursesPage />}
  />
);

import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { UserCoursesPage } from "../pages/UserCoursesPage";

export const userCoursesRoute = (
  <Route
    path={Navigation.admin.buildersPaths.USER_COURSES}
    element={<UserCoursesPage />}
  />
);

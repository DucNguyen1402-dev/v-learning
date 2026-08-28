import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CourseAddPage } from "../pages/CourseAddPage";

export const courseAddRoute = (
  <Route
    path={Navigation.admin.paths.COURSES_ADD}
    element={<CourseAddPage />}
  />
);

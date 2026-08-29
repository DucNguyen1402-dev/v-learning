import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CourseEditPage } from "../pages/CourseEditPage";

export const courseEditRoute = (
  <Route
    path={Navigation.admin.buildersPaths.COURSE_EDIT}
    element={<CourseEditPage />}
  />
);

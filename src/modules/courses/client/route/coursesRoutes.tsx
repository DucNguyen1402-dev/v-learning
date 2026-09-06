import { Route } from "react-router-dom";

import { CoursesProvider } from "@modules/courses/shared/contexts";

import { CoursesMainLayout } from "../layout";
import { COURSES_ROUTE_SEGMENT } from "../navigation/constants";
import { CoursesPage } from "../pages/CoursesPage";
import { courseCategoryRoute, courseDetailRoute } from "../sub-modules";

export const coursesRoutes = (
  <Route
    path={COURSES_ROUTE_SEGMENT}
    element={
      <CoursesProvider>
        <CoursesMainLayout />
      </CoursesProvider>
    }
  >
    <Route index element={<CoursesPage />} />
    {courseDetailRoute}
    {courseCategoryRoute}
  </Route>
);

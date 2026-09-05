import { Route } from "react-router-dom";

import { CoursesProvider } from "@modules/courses/shared/contexts";

import { courseCategoryRoute } from "../course-category";
import { courseDetailRoute } from "../course-detail";
import { CoursesMainLayout } from "../layout";
import { COURSES_ROUTE_PATH } from "../navigation/constants";
import { CoursesPage } from "../pages/CoursesPage";

export const coursesRoutes = (
  <Route
    path={COURSES_ROUTE_PATH}
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

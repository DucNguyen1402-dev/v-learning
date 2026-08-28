import { Route } from "react-router-dom";

import { CoursesProvider } from "@modules/courses/shared/contexts";
import { Navigation } from "@shared/navigation";

import { courseAddRoute } from "../course-add";
import { CourseMainLayout } from "../layout";
import { CoursesPage } from "../pages/CoursesPage";

export const courseRoutes = (
  <Route path={Navigation.admin.keys.COURSES} element={<CourseMainLayout />}>
    <Route
      index
      element={
        <CoursesProvider shouldEnrichData={false}>
          <CoursesPage />
        </CoursesProvider>
      }
    />

    {courseAddRoute}
  </Route>
);

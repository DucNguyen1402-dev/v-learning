import { Route } from "react-router-dom";

import { CoursesProvider } from "@modules/courses/shared/contexts";

import { courseAddRoute } from "../course-add";
import { courseEditRoute } from "../course-edit";
import { courseEnrollmentRoute } from "../course-enrollment";
import { enrollUserRoute } from "../enroll-user";
import { CourseMainLayout } from "../layout";
import { COURSES_ROUTE_SEGMENT } from "../navigation/constants";
import { CoursesPage } from "../pages/CoursesPage";

export const courseRoutes = (
  <Route path={COURSES_ROUTE_SEGMENT} element={<CourseMainLayout />}>
    <Route
      index
      element={
        <CoursesProvider shouldEnrichData={false}>
          <CoursesPage />
        </CoursesProvider>
      }
    />

    {courseAddRoute}
    {courseEditRoute}
    {courseEnrollmentRoute}
    {enrollUserRoute}
  </Route>
);

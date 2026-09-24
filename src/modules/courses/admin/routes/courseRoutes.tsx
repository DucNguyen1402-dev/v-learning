import { Route } from "react-router-dom";

import { CoursesProvider } from "@modules/courses/shared/contexts";

import { CourseMainLayout } from "../layout";
import { COURSES_ROUTE_SEGMENT } from "../navigation/constants";
import { CoursesPage } from "../pages/CoursesPage";
import {
  courseAddRoute,
  courseEditRoute,
  courseEnrollmentRoute,
  enrollUserRoute,
} from "../sub-modules";

export const courseRoutes = (
  <Route
    path={COURSES_ROUTE_SEGMENT}
    element={
      <CoursesProvider shouldEnrichData={false}>
        <CourseMainLayout />
      </CoursesProvider>
    }
  >
    <Route index element={<CoursesPage />} />

    {courseAddRoute}
    {courseEditRoute}
    {courseEnrollmentRoute}
    {enrollUserRoute}
  </Route>
);

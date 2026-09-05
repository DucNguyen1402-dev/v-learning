import { Route } from "react-router-dom";

import { COURSE_ENROLLMENT_ROUTE_SEGMENT } from "../navigation/constants";
import { CourseEnrollmentPage } from "../pages/CourseEnrollmentPage";
import { CourseEnrollmentProviders } from "../provider";

export const courseEnrollmentRoute = (
  <Route
    path={COURSE_ENROLLMENT_ROUTE_SEGMENT}
    element={
      <CourseEnrollmentProviders>
        <CourseEnrollmentPage />
      </CourseEnrollmentProviders>
    }
  />
);

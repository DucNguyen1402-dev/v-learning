import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CourseEnrollmentPage } from "../pages/CourseEnrollmentPage";
import { CourseEnrollmentProviders } from "../provider";

export const courseEnrollmentRoute = (
  <Route
    path={Navigation.admin.buildersPaths.COURSE_ENROLLMENT}
    element={
      <CourseEnrollmentProviders>
        <CourseEnrollmentPage />
      </CourseEnrollmentProviders>
    }
  />
);

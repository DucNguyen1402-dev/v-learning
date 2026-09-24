import { Route } from "react-router-dom";

import { USER_COURSE_ROUTE_SEGMENT } from "../navigation/constants";
import { UserCoursesPage } from "../pages/UserCoursesPage";
import { UserCoursesLocationProvider } from "../providers";

export const userCourseRoute = (
  <Route
    path={USER_COURSE_ROUTE_SEGMENT}
    element={
      <UserCoursesLocationProvider>
        <UserCoursesPage />
      </UserCoursesLocationProvider>
    }
  />
);

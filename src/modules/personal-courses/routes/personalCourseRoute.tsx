import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { ProfileCourse } from "../pages/ProfileCourse";

export const personalCourseRoute = (
  <Route
    path={Navigation.client.paths.PERSONAL_COURSE}
    element={<ProfileCourse />}
  />
);

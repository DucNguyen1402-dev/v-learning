import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { PersonalCoursesProvider } from "../contexts";
import { ProfileCourse } from "../pages/ProfileCourse";
import { ProtectPersonalCourseRoute } from "./ProtectPersonalCourseRoute";

export const personalCourseRoute = (
  <Route
    path={Navigation.client.paths.PERSONAL_COURSE}
    element={
      <ProtectPersonalCourseRoute>
        <PersonalCoursesProvider>
          <ProfileCourse />
        </PersonalCoursesProvider>
      </ProtectPersonalCourseRoute>
    }
  />
);

import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { PersonalCoursesProvider } from "../contexts";
import { PersonalCoursesMainLayout } from "../layouts";
import { ProfileCourse } from "../pages/ProfileCourse";
import { personalCourseDetailRoute } from "../personal-course-detail";
import { ProtectPersonalCourseRoute } from "./ProtectPersonalCourseRoute";

export const personalCourseRoute = (
  <Route
    path={Navigation.client.paths.PERSONAL_COURSE}
    element={
      <ProtectPersonalCourseRoute>
        <PersonalCoursesProvider>
          <PersonalCoursesMainLayout />
        </PersonalCoursesProvider>
      </ProtectPersonalCourseRoute>
    }
  >
    <Route index element={<ProfileCourse />} />
    {personalCourseDetailRoute}
  </Route>
);

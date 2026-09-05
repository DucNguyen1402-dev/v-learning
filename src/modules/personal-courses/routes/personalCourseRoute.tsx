import { Route } from "react-router-dom";

import { PersonalCoursesProvider } from "../contexts";
import { PersonalCoursesMainLayout } from "../layouts";
import { PERSONAL_COURSES_ROUTE_SEGMENT } from "../navigation/constants";
import { PersonalCoursePage } from "../pages/PersonalCoursePage";
import { personalCourseDetailRoute } from "../personal-course-detail";
import { ProtectPersonalCourseRoute } from "./ProtectPersonalCourseRoute";

export const personalCourseRoute = (
  <Route
    path={PERSONAL_COURSES_ROUTE_SEGMENT}
    element={
      <ProtectPersonalCourseRoute>
        <PersonalCoursesProvider>
          <PersonalCoursesMainLayout />
        </PersonalCoursesProvider>
      </ProtectPersonalCourseRoute>
    }
  >
    <Route index element={<PersonalCoursePage />} />
    {personalCourseDetailRoute}
  </Route>
);

import { Route } from "react-router-dom";

import { coursePlayerRoute } from "../course-player";
import { PersonalCourseDetailMainLayout } from "../layouts";
import { PERSONAL_COURSES_DETAIL_BUILDER_PATH } from "../navigation/constants";
import { PersonalCourseDetail } from "../pages/PersonalCourseDetail";
import { PersonalCourseDetailProviderWrapper } from "../providers";
import { PersonalCourseDetailRouteGuard } from "./PersonalCourseDetailRouteGuard";
export const personalCourseDetailRoute = (
  <Route
    path={PERSONAL_COURSES_DETAIL_BUILDER_PATH}
    element={
      <PersonalCourseDetailRouteGuard>
        <PersonalCourseDetailProviderWrapper>
          <PersonalCourseDetailMainLayout />
        </PersonalCourseDetailProviderWrapper>
      </PersonalCourseDetailRouteGuard>
    }
  >
    <Route index element={<PersonalCourseDetail />} />
    {coursePlayerRoute}
  </Route>
);

import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { coursePlayerRoute } from "../course-player";
import { PersonalCourseDetailMainLayout } from "../layouts";
import { PersonalCourseDetail } from "../pages/PersonalCourseDetail";
import { PersonalCourseDetailProviderWrapper } from "../providers";
import { PersonalCourseDetailRouteGuard } from "./PersonalCourseDetailRouteGuard";
export const personalCourseDetailRoute = (
  <Route
    path={Navigation.client.buildersPaths.PERSONAL_COURSE_DETAIL}
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

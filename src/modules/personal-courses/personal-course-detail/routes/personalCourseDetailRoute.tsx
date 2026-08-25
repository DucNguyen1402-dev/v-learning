import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { coursePlayerRoute } from "../course-player";
import { PersonalCourseDetailMainLayout } from "../layouts";
import { PersonalCourseDetail } from "../pages/PersonalCourseDetail";
import { PersonalCourseDetailProviderWrapper } from "../providers";

export const personalCourseDetailRoute = (
  <Route
    path={Navigation.client.buildersPaths.PERSONAL_COURSE_DETAIL}
    element={
      <PersonalCourseDetailProviderWrapper>
        <PersonalCourseDetailMainLayout />
      </PersonalCourseDetailProviderWrapper>
    }
  >
    <Route index element={<PersonalCourseDetail />} />
    {coursePlayerRoute}
  </Route>
);

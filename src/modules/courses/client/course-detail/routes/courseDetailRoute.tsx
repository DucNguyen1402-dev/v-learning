import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { coursePaymentRoute } from "../course-payment";
import { CourseDetailMainLayout } from "../layout";
import { CourseDetail } from "../pages/CourseDetail";
import { CourseDetailProviderWrapper } from "../provider";
import { ProtectCourseDetailRoute } from "./ProtectCourseDetaiRoute";

export const courseDetailRoute = (
  <Route
    path={Navigation.client.buildersPaths.COURSES_DETAIL}
    element={
      <ProtectCourseDetailRoute>
        <CourseDetailProviderWrapper>
          <CourseDetailMainLayout />
        </CourseDetailProviderWrapper>
      </ProtectCourseDetailRoute>
    }
  >
    <Route index element={<CourseDetail />} />
    {coursePaymentRoute}
  </Route>
);

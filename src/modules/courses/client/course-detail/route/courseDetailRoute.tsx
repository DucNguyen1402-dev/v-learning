import { Route } from "react-router-dom";

import { coursePaymentRoute } from "../course-payment";
import { CourseDetailMainLayout } from "../layout";
import { COURSES_DETAIL_BUILDER_PATH } from "../navigation/constants";
import { CourseDetail } from "../pages/CourseDetail";
import { CourseDetailProviderWrapper } from "../provider";
import { ProtectCourseDetailRoute } from "./ProtectCourseDetaiRoute";

export const courseDetailRoute = (
  <Route
    path={COURSES_DETAIL_BUILDER_PATH}
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

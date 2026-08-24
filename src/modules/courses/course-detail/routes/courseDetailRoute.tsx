import { Route } from "react-router-dom";

import { coursePaymentRoute } from "../course-payment";
import { CourseDetailMainLayout } from "../layout";
import { CourseDetail } from "../pages/CourseDetail";
import { ProtectCourseDetailRoute } from "./ProtectCourseDetaiRoute";

export const courseDetailRoute = (
  <Route
    path=":maKhoaHoc"
    element={
      <ProtectCourseDetailRoute>
        <CourseDetailMainLayout />
      </ProtectCourseDetailRoute>
    }
  >
    <Route index element={<CourseDetail />} />
    {coursePaymentRoute}
  </Route>
);

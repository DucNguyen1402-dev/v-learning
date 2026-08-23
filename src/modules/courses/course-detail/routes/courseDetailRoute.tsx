import { Route } from "react-router-dom";

import { CourseDetail } from "../pages/CourseDetail";
import { ProtectCourseDetailRoute } from "./ProtectCourseDetaiRoute";

export const courseDetailRoute = (
  <Route
    path=":maKhoaHoc"
    element={
      <ProtectCourseDetailRoute>
        <CourseDetail />
      </ProtectCourseDetailRoute>
    }
  />
);

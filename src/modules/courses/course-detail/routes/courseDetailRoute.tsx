import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CourseDetail } from "../pages/CourseDetail";
import { ProtectCourseDetailRoute } from "./ProtectCourseDetaiRoute";

export const courseDetailRoute = (
  <Route
    path={Navigation.client.paths.COURSE_DETAIL}
    element={
      <ProtectCourseDetailRoute>
        <CourseDetail />
      </ProtectCourseDetailRoute>
    }
  />
);

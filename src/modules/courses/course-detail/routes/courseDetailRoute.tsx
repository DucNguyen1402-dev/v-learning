import { Route } from "react-router-dom";

import { CourseDetail } from "../pages/CourseDetail";

export const courseDetailRoute = (
  <Route path="courses/:maKhoaHoc" element={<CourseDetail />} />
);

import { Route } from "react-router-dom";

import { EDIT_COURSE_ROUTE_SEGMENT } from "../navigation/constants";
import { CourseEditPage } from "../pages/CourseEditPage";

export const courseEditRoute = (
  <Route path={EDIT_COURSE_ROUTE_SEGMENT} element={<CourseEditPage />} />
);

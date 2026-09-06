import { Route } from "react-router-dom";

import { ADD_COURSE_ROUTE_SEGMENT } from "../navigation/constants";
import { CourseAddPage } from "../pages/CourseAddPage";

export const courseAddRoute = (
  <Route path={ADD_COURSE_ROUTE_SEGMENT} element={<CourseAddPage />} />
);

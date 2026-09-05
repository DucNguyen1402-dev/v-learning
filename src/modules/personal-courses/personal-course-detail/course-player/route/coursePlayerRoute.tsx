import { Route } from "react-router-dom";

import { COURSES_PLAYER_BUILDER_PATH } from "../navigation/constants";
import { CoursePlayerPage } from "../pages/CoursePlayerPage";

export const coursePlayerRoute = (
  <Route path={COURSES_PLAYER_BUILDER_PATH} element={<CoursePlayerPage />} />
);

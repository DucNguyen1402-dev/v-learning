import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CoursePlayerPage } from "../pages/CoursePlayerPage";

export const coursePlayerRoute = (
  <Route
    path={Navigation.client.builderPaths.CLIENT_PERSONAL_COURSE_DETAIL_PLAYER}
    element={<CoursePlayerPage />}
  />
);

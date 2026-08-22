import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CoursesProvider } from "../contexts";
import { courseDetailRoute } from "../course-detail";
import { CoursesMainLayout } from "../layout";
import { CoursesPage } from "../pages/CoursesPage";

export const coursesRoute = (
  <Route
    path={Navigation.client.paths.COURSES}
    element={
      <CoursesProvider>
        <CoursesMainLayout />
      </CoursesProvider>
    }
  >
    <Route index element={<CoursesPage />} />
    {courseDetailRoute}
  </Route>
);

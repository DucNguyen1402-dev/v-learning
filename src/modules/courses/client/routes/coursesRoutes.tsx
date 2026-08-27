import { Route } from "react-router-dom";

import { CoursesProvider } from "@modules/courses/shared/contexts";
import { Navigation } from "@shared/navigation";

import { courseDetailRoute } from "../course-detail";
import { CoursesMainLayout } from "../layout";
import { CoursesPage } from "../pages/CoursesPage";

export const coursesRoutes = (
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

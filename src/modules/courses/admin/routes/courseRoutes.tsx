import { Route } from "react-router-dom";

import { CoursesProvider } from "@modules/courses/shared/contexts";
import { Navigation } from "@shared/navigation";

import { CourseMainLayout } from "../layout";
import { CoursesPage } from "../pages/CoursesPage";

export const courseRoutes = (
  <Route element={<CourseMainLayout />}>
    <Route
      path={Navigation.admin.keys.COURSES}
      element={
        <CoursesProvider>
          <CoursesPage />
        </CoursesProvider>
      }
    />
  </Route>
);

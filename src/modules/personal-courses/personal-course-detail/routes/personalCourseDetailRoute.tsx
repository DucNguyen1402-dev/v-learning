import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { PersonalCourseDetailProvider } from "../contexts";
import { PersonalCourseDetail } from "../pages/PersonalCourseDetail";

export const personalCourseDetailRoute = (
  <Route
    path={Navigation.client.buildersPaths.PERSONAL_COURSE_DETAIL}
    element={
      <PersonalCourseDetailProvider maKhoaHoc="someValue">
        <PersonalCourseDetail />
      </PersonalCourseDetailProvider>
    }
  />
);

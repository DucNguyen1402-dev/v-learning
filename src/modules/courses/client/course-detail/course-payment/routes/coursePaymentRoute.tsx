import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";
import { UserProfile } from "@shared/user-profile";

import { CoursePaymentPage } from "../pages/CoursePaymentPage";
import { CoursePaymentRouteGuard } from "./CoursePaymentRouteGuard";

export const coursePaymentRoute = (
  <Route
    path={Navigation.client.buildersPaths.COURSES_DETAIL_PAYMENT}
    element={
      <CoursePaymentRouteGuard>
        <UserProfile.Provider>
          <CoursePaymentPage />
        </UserProfile.Provider>
      </CoursePaymentRouteGuard>
    }
  />
);

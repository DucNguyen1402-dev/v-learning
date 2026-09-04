import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";
import { UserProfile } from "@shared/user-profile";

import { CoursePaymentPage } from "../pages/CoursePaymentPage";
import { CoursePaymentRouteProvider } from "../provider";
import { CoursePaymentRouteGuard } from "./CoursePaymentRouteGuard";

export const coursePaymentRoute = (
  <Route
    path={Navigation.client.buildersPaths.CLIENT_COURSES_DETAIL_PAYMENT}
    element={
      <CoursePaymentRouteGuard>
        <CoursePaymentRouteProvider>
          <UserProfile.Provider>
            <CoursePaymentPage />
          </UserProfile.Provider>
        </CoursePaymentRouteProvider>
      </CoursePaymentRouteGuard>
    }
  />
);

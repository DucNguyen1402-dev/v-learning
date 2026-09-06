import { Route } from "react-router-dom";

import { UserProfile } from "@shared/user-profile";

import { COURSES_PAYMENT_BUILDER_SEGMENT } from "../navigation/constants";
import { CoursePaymentPage } from "../pages/CoursePaymentPage";
import { CoursePaymentRouteProvider } from "../provider";
import { CoursePaymentRouteGuard } from "./CoursePaymentRouteGuard";

export const coursePaymentRoute = (
  <Route
    path={COURSES_PAYMENT_BUILDER_SEGMENT}
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

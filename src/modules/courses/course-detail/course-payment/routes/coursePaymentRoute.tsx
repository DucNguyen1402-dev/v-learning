import { Route } from "react-router-dom";

import { CoursePaymentPage } from "../pages/CoursePaymentPage";

export const coursePaymentRoute = (
  <Route path="payment" element={<CoursePaymentPage />} />
);

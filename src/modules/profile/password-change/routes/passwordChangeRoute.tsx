import { Route } from "react-router-dom";

import { PasswordChangePage } from "../pages/PasswordChangePage";

export const passwordChangeRoute = (
  <Route path="password-change" element={<PasswordChangePage />} />
);

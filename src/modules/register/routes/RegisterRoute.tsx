import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { RegisterProvider } from "../contexts";
import { RegisterPage } from "../pages/RegisterPage";

export const RegisterRoute: AppRoute = {
  path: AppRoutes.client.paths.REGISTER,
  element: (
    <RegisterProvider>
      <RegisterPage />
    </RegisterProvider>
  ),
};

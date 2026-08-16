import type { AppRoute } from "@routes";
import { Navigation } from "@shared/navigation";

import { RegisterProvider } from "../contexts";
import { RegisterPage } from "../pages/RegisterPage";

export const RegisterRoute: AppRoute = {
  path: Navigation.client.paths.REGISTER,
  element: (
    <RegisterProvider>
      <RegisterPage />
    </RegisterProvider>
  ),
};

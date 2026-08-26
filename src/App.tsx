import { AppRoutes } from "@routes";

import { AppProvider } from "@/providers";

export const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

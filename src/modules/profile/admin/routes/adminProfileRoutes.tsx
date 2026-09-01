import { createProfileRoute } from "@modules/profile/shared/routes";
import { Navigation } from "@shared/navigation";

export const adminProfileRoutes = createProfileRoute(
  Navigation.admin.paths.PROFILE,
);

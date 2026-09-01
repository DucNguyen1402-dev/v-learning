import { createProfileRoute } from "@modules/profile/shared/routes";
import { Navigation } from "@shared/navigation";
export const clientProfileRoutes = createProfileRoute(
  Navigation.client.paths.PROFILE,
);

import { createProfileRoute } from "@modules/profile/shared/routes";
import { Navigation } from "@shared/navigation";

export const profileRoute = createProfileRoute(
  Navigation.admin.paths.ADMIN_PROFILE,
);

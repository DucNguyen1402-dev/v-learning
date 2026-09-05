import { createProfileRoute } from "@modules/profile/shared/routes";

import { PROFILE_ROUTE_SEGMENT } from "../navigation/constants";

export const clientProfileRoutes = createProfileRoute(PROFILE_ROUTE_SEGMENT);

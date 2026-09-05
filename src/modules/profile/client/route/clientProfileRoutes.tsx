import { createProfileRoute } from "@modules/profile/shared/routes";

import { PROFILE_ROUTE_PATH } from "../navigation/constants";

export const clientProfileRoutes = createProfileRoute(PROFILE_ROUTE_PATH);

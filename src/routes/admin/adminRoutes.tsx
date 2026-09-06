import { courseRoutes } from "@modules/courses/admin";
import { profileRoute } from "@modules/profile/admin";
import { userRoute } from "@modules/user";

export const adminRoutes = [courseRoutes, userRoute, profileRoute];

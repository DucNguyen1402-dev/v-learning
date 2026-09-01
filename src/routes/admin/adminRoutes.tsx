import { courseRoutes } from "@modules/courses/admin";
import { adminProfileRoutes } from "@modules/profile/admin";
import { userRoutes } from "@modules/user";

export const adminRoutes = [courseRoutes, userRoutes, adminProfileRoutes];

import { AdminNavigation } from "./admin";
import { ClientNavigation } from "./client";
import { Back, Forward, ForwardWithParam, Go, GoWithParam } from "./components";
import { NavigationHooks } from "./hooks";
import { isRouteActive } from "./utils";

export const Navigation = {
  client: ClientNavigation,
  admin: AdminNavigation,
  hooks: NavigationHooks,
  components: {
    Go,
    Back,
    Forward,
    ForwardWithParam,
    GoWithParam,
  },
  utils: {
    isRouteActive,
  },
};

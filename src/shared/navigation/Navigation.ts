import { AdminNavigation } from "./areas/admin";
import { ClientNavigation } from "./areas/client";
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

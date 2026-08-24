import { ClientNavigation } from "./client";
import { Back, Forward, ForwardWithParam, Go } from "./components";
import { NavigationHooks } from "./hooks";

export const Navigation = {
  client: ClientNavigation,
  hooks: NavigationHooks,
  components: {
    Go,
    Back,
    Forward,
    ForwardWithParam,
  },
};

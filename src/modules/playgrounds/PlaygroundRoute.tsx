import type { AppRoute } from "@routes";

import { Playground } from "./Playground";
export const PlaygroundRoute: AppRoute = {
  path: "/client/playground",
  element: <Playground />,
};

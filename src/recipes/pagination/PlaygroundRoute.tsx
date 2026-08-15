import type { AppRoute } from "@routes";
import { Pagination } from "@shared/table";

import { mockTableData } from "./data";
import { Playground } from "./Playground";

export const PlaygroundRoute: AppRoute = {
  path: "/client/playground",
  element: (
    <Pagination.Provider entityName="users" items={mockTableData}>
      <Playground />
    </Pagination.Provider>
  ),
};

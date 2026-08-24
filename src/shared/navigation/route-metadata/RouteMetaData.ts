import { RouteMetaDataProvider, useRouteMetaDataContext } from "./contexts";

export const RouteMetaData = {
  use: useRouteMetaDataContext,
  Provider: RouteMetaDataProvider,
};

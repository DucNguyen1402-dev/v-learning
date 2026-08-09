import { LoadingProvider, useLoadingContext } from "./contexts";

export const Loading = {
  use: useLoadingContext,
  Provider: LoadingProvider,
};

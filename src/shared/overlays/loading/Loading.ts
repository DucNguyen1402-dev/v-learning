import { LoadingProvider, useLoadingContext } from "./contexts";
import { DualRingLoadingRender } from "./render";

export const Loading = {
  use: useLoadingContext,
  Provider: LoadingProvider,
  Component: DualRingLoadingRender,
};

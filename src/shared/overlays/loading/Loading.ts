import { LoadingProvider, useLoadingContext } from "./contexts";
import { ContainerLoading, DualRingLoadingRender } from "./loadings";

export const Loading = {
  use: useLoadingContext,
  Provider: LoadingProvider,
  components: { DualRingLoadingRender, ContainerLoading },
};

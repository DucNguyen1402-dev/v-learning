import { LoadingProvider, useLoadingContext } from "./contexts";

const Loading = {
  use: useLoadingContext,
  Provider: LoadingProvider,
};

export default Loading;

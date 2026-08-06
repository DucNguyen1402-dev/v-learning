import { useContext } from "react";

import { LoadingContext } from "./LoadingContext";

const useLoadingContext = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("Loading.use() must be used within a <LoadingProvider>.");
  }

  return context;
};

export default useLoadingContext;

import { useContext } from "react";

import { LayoutContext } from "./LayoutContext";

const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("Layout.use() must be used within a <LayoutProvider>");
  }
  return context;
};

export default useLayoutContext;

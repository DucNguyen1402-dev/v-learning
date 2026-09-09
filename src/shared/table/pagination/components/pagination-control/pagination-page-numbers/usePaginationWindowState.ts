import { useRef, useState } from "react";

export const usePaginationWindowState = () => {
  const [dynamicWindowSize, setDynamicWindowSize] = useState(1);
  const stopResizeDynamicWindowRef = useRef(false);

  return {
    dynamicWindowSize,
    setDynamicWindowSize,
    stopResizeDynamicWindowRef,
  };
};

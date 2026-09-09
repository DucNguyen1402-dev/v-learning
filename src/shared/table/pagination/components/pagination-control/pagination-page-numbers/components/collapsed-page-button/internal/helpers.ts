import { edgeCount } from "./config";
export const edgeCountConfig = (width: number) => {
  const edge = edgeCount.find((edge) => width < edge.breakpoint);
  return edge
    ? { count: edge.count, windowSize: edge.windowSize }
    : { count: 3, windowSize: 3 };
};

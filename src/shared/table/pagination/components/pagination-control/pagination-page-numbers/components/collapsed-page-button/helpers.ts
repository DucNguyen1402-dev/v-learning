import { edgeCount } from "./config";
export const getEdgeCountConfig = (width: number) => {
  const edge = edgeCount.find((edge) => width < edge.breakpoint);
  return edge
    ? { count: edge.count, windowSize: edge.windowSize }
    : { count: 3, windowSize: 3 };
};

type UseCollapsedPageButtonDerivedProps = {
  pageNumbers: number[];
  edgeCount: number;
};
export const getPageNumberGroups = ({
  pageNumbers,
  edgeCount,
}: UseCollapsedPageButtonDerivedProps) => {
  const leadingPages = pageNumbers.slice(0, edgeCount);
  const middlePages = pageNumbers.slice(edgeCount, -edgeCount);
  const trailingPages = pageNumbers.slice(-edgeCount);

  return {
    leadingPages,
    middlePages,
    trailingPages,
  };
};

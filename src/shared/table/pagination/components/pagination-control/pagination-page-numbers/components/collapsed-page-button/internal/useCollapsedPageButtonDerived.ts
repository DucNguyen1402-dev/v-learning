import { useMemo } from "react";

type UseCollapsedPageButtonDerivedProps = {
  pageNumbers: number[];
  edgeConfig: { count: number };
};
export const useCollapsedPageButtonDerived = ({
  pageNumbers,
  edgeConfig,
}: UseCollapsedPageButtonDerivedProps) => {
  const leadingPages = useMemo(
    () => pageNumbers.slice(0, edgeConfig.count),
    [pageNumbers, edgeConfig.count],
  );
  const middlePages = useMemo(
    () => pageNumbers.slice(edgeConfig.count, -edgeConfig.count),
    [pageNumbers, edgeConfig.count],
  );
  const trailingPages = useMemo(
    () => pageNumbers.slice(-edgeConfig.count),
    [pageNumbers, edgeConfig.count],
  );

  return {
    leadingPages,
    middlePages,
    trailingPages,
  };
};

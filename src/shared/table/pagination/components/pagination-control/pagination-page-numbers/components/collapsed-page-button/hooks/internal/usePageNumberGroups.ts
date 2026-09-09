type UseCollapsedPageButtonDerivedProps = {
  pageNumbers: number[];
  edgeCount: number;
};
export const usePageNumberGroups = ({
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

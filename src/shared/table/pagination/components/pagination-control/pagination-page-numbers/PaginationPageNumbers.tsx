import { CollapsedPageButtons, SimplePageButtons } from "./components";
import { usePaginationWindowState } from "./usePaginationWindowState";

type PaginationPageNumbersProps = {
  pageNumbers: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
  isLoading?: boolean;
};

export const PaginationPageNumbers = ({
  currentPage,
  onPageClick,
  pageNumbers,
  isLoading,
}: PaginationPageNumbersProps) => {
  const isCollapsed = pageNumbers.length > 5;
  const isEmpty = pageNumbers.length === 0;
  const {
    dynamicWindowSize,
    setDynamicWindowSize,
    stopResizeDynamicWindowRef,
  } = usePaginationWindowState();

  if (isEmpty) {
    return null;
  }

  if (isCollapsed) {
    return (
      <CollapsedPageButtons
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        onPageClick={onPageClick}
        isLoading={isLoading}
        dynamicWindowSize={dynamicWindowSize}
        setDynamicWindowSize={setDynamicWindowSize}
        stopResizeDynamicWindowRef={stopResizeDynamicWindowRef}
      />
    );
  }

  return (
    <SimplePageButtons
      pageNumbers={pageNumbers}
      currentPage={currentPage}
      onPageClick={onPageClick}
      isLoading={isLoading}
    />
  );
};

export type PaginationContextValues<T> = {
  actions: {
    onPrevClick: () => void;
    onNextClick: () => void;
    onPageClick: (page: number) => void;
    setSize: (size: number) => void;
    setPage: (page: number) => void;
    preventNextResetPage: () => void;
  };
  state: {
    currentPage: number;
    totalItems: number;
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
    pageNumbers: readonly number[];
    displayStart: number;
    displayEnd: number;
    paginatedList: readonly T[];
    pageOffset: number;
    currentSize: number;
    entityName: string;
  };
};

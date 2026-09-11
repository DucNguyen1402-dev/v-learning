import { useLayoutEffect, useRef, useState } from "react";

import {
  EMPTY_PAGINATED_COURSE,
  EMPTY_PAGINATED_COURSE_BY_CATEGORY,
} from "@modules/courses/shared/constants";
import {
  useCourseQuery,
  useCoursesFilterByCategory,
  useCoursesQueryByCategory,
  useCoursesSearchByName,
  usePaginatedCoursesQuery,
} from "@modules/courses/shared/hooks";
import { enrichCoursesWithMockData } from "@modules/courses/shared/utils";
import { Pagination } from "@shared/table";
type UseCoursesProps = {
  shouldEnrichData?: boolean;
};
export const useCourses = ({ shouldEnrichData = true }: UseCoursesProps) => {
  const { data: allCourses } = useCourseQuery();
  const { currentPage, pageSize, setPagination, resetPaginationPage } =
    Pagination.hooks.useState();

  const { onSearchByCoursesName, tenKhoaHoc, handleClearSearch } =
    useCoursesSearchByName();

  const { category, onChangeCategory } = useCoursesFilterByCategory();

  const isPaginatedSource = category === null;
  const prevIsPaginatedSource = useRef(isPaginatedSource);
  const [enabledResetPage, setEnabledResetPage] = useState(false);

  useLayoutEffect(() => {
    if (prevIsPaginatedSource.current !== isPaginatedSource) {
      setEnabledResetPage(true);
      prevIsPaginatedSource.current = isPaginatedSource;
    } else {
      setEnabledResetPage(false);
    }
  }, [isPaginatedSource, enabledResetPage]);

  const {
    data: courses = EMPTY_PAGINATED_COURSE,
    isPending: isPendingByPaginated,
    isFetching: isFetchingByPaginated,
  } = usePaginatedCoursesQuery({
    page: currentPage,
    pageSize,
    tenKhoaHoc: tenKhoaHoc,
    category,
  });

  const isEmpty = !isPendingByPaginated && courses.items.length === 0;

  const {
    data: coursesByCategory = EMPTY_PAGINATED_COURSE_BY_CATEGORY,
    isPending: isPendingByCategory,
    isFetching: isFetchingByCategory,
  } = useCoursesQueryByCategory({
    category,
  });

  const { onPrevClick, onNextClick, onPageClick, setSize, setPage } =
    Pagination.hooks.useActions({
      setPagination,
      currentPage,
    });

  const {
    displayStart,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
  } = Pagination.hooks.useDerived({
    currentPage,
    pageSize,
    totalPages: courses.totalPages,
  });

  const targetCourses = isPaginatedSource ? courses.items : coursesByCategory;

  const processedCourses = shouldEnrichData
    ? enrichCoursesWithMockData(targetCourses)
    : targetCourses;

  const isActiveSourceReady = !isFetchingByPaginated;

  const { scrollToTargetRef, skipNextPageReset } = Pagination.hooks.useEffect({
    currentPage,
    totalPages: courses.totalPages,
    pageSize,
    resetPaginationPage,
    resetDeps: [targetCourses],
    scrollTriggerDeps: [isActiveSourceReady],
    enabledResetPage,
    enabledScrollToTarget: isActiveSourceReady,
  });

  const isLoading = isPaginatedSource
    ? isPendingByPaginated || isFetchingByPaginated
    : isPendingByCategory || isFetchingByCategory;

  return {
    processedCourses,
    allCourses,
    isSourceByCategory: !isPaginatedSource,
    filter: {
      tenKhoaHoc,
      onSearchByCoursesName,
      category,
      shouldHideSearch: category !== null,
      onChangeCategory,
      handleClearSearch,
    },
    status: {
      isLoading: isLoading,
    },
    pagination: {
      status: {
        isEmpty,
        enabledResetPage,
      },
      refs: {
        scrollToTarget: scrollToTargetRef,
      },
      state: {
        currentPage,
        pageSize,
        displayStart,
        displayEnd,
        pageNumbers,
        isPrevDisabled,
        isNextDisabled,
        totalItems: courses.totalCount,
      },
      actions: {
        onPrevClick,
        onNextClick,
        onPageClick,
        setSize,
        setPage,
        skipNextPageReset,
      },
    },
  };
};

export type UseCoursesReturn = ReturnType<typeof useCourses>;

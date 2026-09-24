import { useCallback, useEffect } from "react";

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
import { enrichCoursesWithMockData } from "@modules/courses/shared/mocks";
import { Pagination } from "@shared/table";

type UseCoursesProps = {
  shouldEnrichData?: boolean;
};
export const useCourses = ({ shouldEnrichData = true }: UseCoursesProps) => {
  const { data: allCourses } = useCourseQuery();

  const { onSearchByCoursesName, tenKhoaHoc, handleClearSearch, resetSearch } =
    useCoursesSearchByName();

  const { category, onChangeCategory, resetCategory } =
    useCoursesFilterByCategory();

  const resetFilters = useCallback(() => {
    resetSearch();
    resetCategory();
  }, [resetSearch, resetCategory]);

  const isPaginatedSource = category === null;

  const pagination = Pagination.hooks.usePagination();

  const {
    data: courses = EMPTY_PAGINATED_COURSE,
    isPending: isPendingByPaginated,
    isFetching: isFetchingByPaginated,
  } = usePaginatedCoursesQuery({
    page: pagination.state.currentPage,
    pageSize: pagination.state.pageSize,
    tenKhoaHoc: tenKhoaHoc,
    category,
  });

  const {
    config: { setResetDeps, syncPaginationMeta },
  } = pagination;

  useEffect(() => {
    setResetDeps([isPaginatedSource]);
    syncPaginationMeta({
      totalPages: courses.totalPages,
      totalItems: courses.totalCount,
    });
  }, [
    courses.totalPages,
    courses.totalCount,
    isPaginatedSource,
    syncPaginationMeta,
    setResetDeps,
  ]);

  const {
    data: coursesByCategory = EMPTY_PAGINATED_COURSE_BY_CATEGORY,
    isPending: isPendingByCategory,
    isFetching: isFetchingByCategory,
  } = useCoursesQueryByCategory({
    category,
  });

  const isEmpty =
    (!isPendingByPaginated && courses.items.length === 0) ||
    (!isPendingByCategory && coursesByCategory.length === 0);

  const isLoading = isPaginatedSource
    ? isPendingByPaginated || isFetchingByPaginated
    : isPendingByCategory || isFetchingByCategory;

  const targetCourses = isPaginatedSource ? courses.items : coursesByCategory;

  const processedCourses = shouldEnrichData
    ? enrichCoursesWithMockData(targetCourses)
    : targetCourses;

  return {
    processedCourses,
    allCourses,
    isSourceByCategory: !isPaginatedSource,
    filter: {
      tenKhoaHoc,
      onSearchByCoursesName,
      category,
      shouldDisableSearch: category !== null,
      onChangeCategory,
      handleClearSearch,
      resetFilters,
    },
    status: {
      isLoading: isLoading,
      isEmpty,
    },
    pagination: pagination,
  };
};

export type UseCoursesReturn = ReturnType<typeof useCourses>;

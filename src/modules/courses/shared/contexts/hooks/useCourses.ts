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

  const isActiveSourceReady = !isFetchingByPaginated;

  const { updateMeta } = pagination;
  useLayoutEffect(() => {
    updateMeta({
      totalPage: courses.totalPages,
      enabledResetPage,
      scrollTriggerDeps: [courses],
      enabledScrollToTarget: isActiveSourceReady,
      resetDeps: [enabledResetPage],
    });
  }, [
    enabledResetPage,
    updateMeta,
    courses.totalPages,
    isActiveSourceReady,
    pagination.state.pageSize,
    pagination.state.currentPage,
    isPaginatedSource,
    courses,
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
        ...pagination.ref,
      },
      state: {
        ...pagination.state,
        totalItems: courses.totalCount,
      },
      actions: {
        ...pagination.actions,
      },
    },
  };
};

export type UseCoursesReturn = ReturnType<typeof useCourses>;

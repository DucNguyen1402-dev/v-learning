import { useLayoutEffect, useRef } from "react";

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

  const { updateMeta, setEnabledResetPage } = pagination;

  const prevIsPaginatedSource = useRef(isPaginatedSource);

  useLayoutEffect(() => {
    if (prevIsPaginatedSource.current !== isPaginatedSource) {
      setEnabledResetPage();
    }
    updateMeta({
      totalPage: courses.totalPages,
    });
  }, [
    updateMeta,
    courses.totalPages,
    setEnabledResetPage,
    isPaginatedSource,
    isFetchingByPaginated,
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
      meta: {
        setScrollToTarget: pagination.setScrollToTarget,
      },
    },
  };
};

export type UseCoursesReturn = ReturnType<typeof useCourses>;

import {
  EMPTY_PAGINATED_COURSE,
  EMPTY_PAGINATED_COURSE_BY_CATEGORY,
} from "@modules/courses/shared/constants";
import {
  useCoursesQueryByCategory,
  usePaginatedCoursesQuery,
} from "@modules/courses/shared/hooks";
import { enrichCoursesWithMockData } from "@modules/courses/shared/utils";
import { Pagination } from "@shared/table";

import { useCoursesFilterByCategory } from "./useCoursesFilterByCategory";
import { useCoursesSearchByName } from "./useCoursesSearchByName";

export const useCourses = () => {
  const { pagination, setPagination } = Pagination.hooks.useState();

  const { onSearchByCoursesName, tenKhoaHoc, handleClearSearch } =
    useCoursesSearchByName();

  const { category, onChangeCategory } = useCoursesFilterByCategory();

  const isPaginatedSource = category === "all";

  const {
    data: courses = EMPTY_PAGINATED_COURSE,
    isPending: isPendingByPaginated,
    isFetching: isFetchingByPaginated,
  } = usePaginatedCoursesQuery({
    page: pagination.page,
    pageSize: pagination.pageSize,
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
      pagination,
      setPagination,
    });

  const {
    displayStart,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
  } = Pagination.hooks.useDerived({
    currentPage: pagination.page,
    pageSize: pagination.pageSize,
    totalPages: courses.totalPages,
  });

  const targetCourses = isPaginatedSource ? courses.items : coursesByCategory;
  const enrichedCourses = enrichCoursesWithMockData(targetCourses);

  Pagination.hooks.useEffect({
    setPagination,
    currentPage: pagination.page,
    totalPages: courses.totalPages,
    resetDeps: [tenKhoaHoc],
  });

  const isLoading = isPaginatedSource
    ? isPendingByPaginated || isFetchingByPaginated
    : isPendingByCategory || isFetchingByCategory;

  return {
    courses: enrichedCourses,
    isSourceByCategory: !isPaginatedSource,
    filter: {
      tenKhoaHoc,
      onSearchByCoursesName,
      category,
      shouldHideSearch: category !== "all",
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
      state: {
        currentPage: pagination.page,
        pageSize: pagination.pageSize,
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
      },
    },
  };
};

export type UseCoursesReturn = ReturnType<typeof useCourses>;

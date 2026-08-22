import { Pagination } from "@shared/table";

import { EMPTY_PAGINATED_COURSE } from "./constants";
import { useCoursesParams } from "./useCoursesParams";
import { useCoursesQuery } from "./useCoursesQuery";
import { enrichCoursesWithMockData } from "./utils";

export const useCourses = () => {
  const { pagination, setPagination } = Pagination.hooks.useState();

  const { data: courses = EMPTY_PAGINATED_COURSE, isPending } = useCoursesQuery(
    {
      page: pagination.page,
      pageSize: pagination.pageSize,
    },
  );

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

  const enrichedCourses = enrichCoursesWithMockData(courses.items);
  const { filteredCourses, handleFilterChange, category, keyword } =
    useCoursesParams({
      courses: enrichedCourses,
    });

  Pagination.hooks.useEffect({
    setPagination,
    currentPage: pagination.page,
    totalPages: courses.totalPages,
    resetDeps: [keyword, category],
  });

  return {
    courses: filteredCourses,
    filter: {
      category,
      keyword,
      handleFilterChange,
    },
    pagination: {
      status: {
        isLoading: isPending,
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

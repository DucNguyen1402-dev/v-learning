import { Pagination } from "@shared/table";

import { EMPTY_PAGINATED_COURSE } from "./constants";
import { useCoursesByCategory } from "./useCoursesByCaterory";
import { useCoursesQuery } from "./useCoursesQuery";
import { useCoursesSearchByName } from "./useCoursesSearchByName";
import { enrichCoursesWithMockData } from "./utils";

export const useCourses = () => {
  const { pagination, setPagination } = Pagination.hooks.useState();

  const { onSearchByCoursesName, tenKhoaHoc, handleClearSearch } =
    useCoursesSearchByName();

  const { category, onChangeCategory } = useCoursesByCategory();

  const { data: courses = EMPTY_PAGINATED_COURSE, isPending } = useCoursesQuery(
    {
      page: pagination.page,
      pageSize: pagination.pageSize,
      tenKhoaHoc: tenKhoaHoc,
      category,
    },
  );

  const isEmpty = !isPending && courses.items.length === 0;

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

  Pagination.hooks.useEffect({
    setPagination,
    currentPage: pagination.page,
    totalPages: courses.totalPages,
    resetDeps: [tenKhoaHoc],
  });

  return {
    courses: enrichedCourses,
    filter: {
      tenKhoaHoc,
      onSearchByCoursesName,
      category,
      onChangeCategory,
      handleClearSearch,
    },
    pagination: {
      status: {
        isLoading: isPending,
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

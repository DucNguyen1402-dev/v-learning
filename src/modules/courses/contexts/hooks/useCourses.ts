import { mockCourses } from "@modules/courses/mocks";

import {
  initialPaginationState,
  usePaginationActions,
  usePaginationDerived,
  usePaginationEffect,
  usePaginationState,
} from "./pagination";
import { useCoursesParams } from "./useCoursesParams";
import { useCoursesQuery } from "./useCoursesQuery";
function findOrThrow<T>(value: T | undefined): T {
  if (!value) throw new Error("Not found");
  return value;
}

export const useCourses = () => {
  const { page, pageSize } = initialPaginationState;

  const { pagination, setPagination } = usePaginationState(page, pageSize);

  const { data: courses, isPending } = useCoursesQuery({
    page: pagination.page,
    pageSize: pagination.pageSize,
  });

  const { onPrevClick, onNextClick, onPageClick, setSize, setPage } =
    usePaginationActions({
      pagination,
      setPagination,
    });

  const {
    displayStart,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
  } = usePaginationDerived({
    pagination,
    totalPages: courses?.totalPages ?? 0,
  });

  const upgradeCourses = courses?.items.map((course) => {
    const matchedCourse = findOrThrow(
      mockCourses.find(
        (c) =>
          c.maDanhMucKhoahoc ===
          course.danhMucKhoaHoc.maDanhMucKhoahoc.toLowerCase(),
      ),
    );

    const { maDanhMucKhoahoc: _, ...rest } = matchedCourse;

    const upgradeCourse = {
      ...course,
      ...rest,
    };

    return upgradeCourse;
  });

  const { filteredCourses, handleFilterChange, category, keyword } =
    useCoursesParams({
      courses: upgradeCourses,
    });

  usePaginationEffect({
    setPagination,
    pagination,
    totalPages: courses?.totalPages ?? 0,
    resetDeps: [keyword, category],
  });

  return {
    courses: upgradeCourses,

    state: {
      isPending,
    },
    filter: {
      category,
      keyword,
      handleFilterChange,
      filteredCourses,
    },
    pagination: {
      state: {
        currentPage: pagination.page,
        currentSize: pagination.pageSize,
        displayStart,
        displayEnd,
        pageNumbers,
        isPrevDisabled,
        isNextDisabled,
        totalPages: courses?.totalPages ?? 0,
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

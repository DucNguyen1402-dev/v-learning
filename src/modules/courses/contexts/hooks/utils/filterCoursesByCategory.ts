import type { Category } from "@modules/courses/types";
import type { PaginatedCourseItems } from "@modules/courses/types";
type CoursesFilter = {
  category: Category | "all" | null;
  keyword: string | null;
  courses: PaginatedCourseItems | undefined;
};
export const filterCoursesByCategory = ({
  courses,
  keyword,
  category,
}: CoursesFilter) => {
  const normalizedKeyword = keyword?.trim().toLowerCase() || "";
  const filteredByKeyword = (courses || []).filter(
    (course) =>
      course.tenKhoaHoc.toLowerCase().includes(normalizedKeyword) ||
      course.danhMucKhoaHoc.tenDanhMucKhoaHoc
        .toLowerCase()
        .includes(normalizedKeyword),
  );

  const filteredByCategory = filteredByKeyword.filter((course) => {
    if (category === "all" || !category) {
      return true;
    }
    return course.danhMucKhoaHoc.maDanhMucKhoahoc.toLowerCase() === category;
  });

  return filteredByCategory;
};

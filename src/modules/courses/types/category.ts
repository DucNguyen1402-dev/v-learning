export type Category =
  "frontend" | "backend" | "didong" | "fullstack" | "tuduy" | "design";

export type CoursesFilter = {
  category: Category | "all" | null;
  keyword: string | null;
};

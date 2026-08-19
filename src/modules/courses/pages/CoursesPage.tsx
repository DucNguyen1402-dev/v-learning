import { CoursesHeader, CoursesList, CoursesToolbar } from "../components";
export const CoursesPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-10 p-container md:p-container-md lg:p-container-lg">
      <CoursesHeader />
      <CoursesToolbar />
      <CoursesList />
    </div>
  );
};

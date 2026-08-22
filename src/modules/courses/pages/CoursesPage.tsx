import {
  CoursesFooter,
  CoursesHeader,
  CoursesList,
  CoursesToolbar,
} from "../components";

export const CoursesPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-10">
      <div className="flex flex-col gap-10 p-container md:p-container-md lg:p-container-lg">
        <CoursesHeader />
        <CoursesToolbar />
      </div>

      <CoursesList />

      <div className="mt-8">
        <CoursesFooter />
      </div>
    </div>
  );
};

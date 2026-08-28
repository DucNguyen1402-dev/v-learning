import { useEffect } from "react";

import { CoursesFooter } from "@modules/courses/shared/components";
import { useCoursesContext } from "@modules/courses/shared/contexts";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";
import { Pagination } from "@shared/table";

import {
  AddCourseButton,
  CourseCategoryFilter,
  CourseSearchBar,
  CoursesTable,
} from "../components";

import { Layout } from "@/layouts/admin";

export const CoursesPage = () => {
  const { isSidebarOpen } = Layout.use();
  Navigation.hooks.useScrollOnRouteChange();

  const { show: showToast } = Toast.use();
  const { toastState, maKhoaHoc } = Navigation.hooks.usePayload() ?? {};
  const [toast] = State.useTemporary(toastState);
  const consumePayload = Navigation.hooks.useConsumePayload();

  useEffect(() => {
    if (!toast) return;
    showToast(toast);

    consumePayload();
  }, [toast, showToast, consumePayload]);

  const { courses } = useCoursesContext();

  return (
    <Pagination.Provider items={courses} resetDeps={[courses]}>
      <div className="min-h-screen px-6 pt-20 pb-20">
        <div
          className={`mx-auto flex w-full flex-col gap-16 transition-[max-width] duration-300 ease-in-out ${isSidebarOpen ? "max-w-full 2xl:max-w-360" : "max-w-7xl 2xl:max-w-340"}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center gap-5">
              <div className="w-full max-w-80">
                <CourseSearchBar />
              </div>
              <CourseCategoryFilter />
            </div>

            <AddCourseButton />
          </div>
          <CoursesTable
            isSidebarOpen={isSidebarOpen}
            affectedCourseId={maKhoaHoc}
          />
          <CoursesFooter />
        </div>
      </div>
    </Pagination.Provider>
  );
};

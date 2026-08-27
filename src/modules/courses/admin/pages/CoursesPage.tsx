import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";

import {
  AddCourseButton,
  CourseCategoryFilter,
  CourseSearchBar,
  CourseSortSelect,
  CoursesTable,
} from "../components";

import { Layout } from "@/layouts/admin";

export const CoursesPage = () => {
  const { isSidebarOpen } = Layout.use();

  const { show: showToast } = Toast.use();
  const [toastState] = State.useTemporary(Navigation.hooks.usePayload());
  const consumePayload = Navigation.hooks.useConsumePayload();

  useEffect(() => {
    if (!toastState) return;
    showToast(toastState);

    consumePayload();
  }, [toastState, showToast, consumePayload]);

  return (
    <div className="min-h-screen px-6 pt-10 pb-8">
      <div
        className={`mx-auto flex w-full flex-col gap-8 transition-[max-width] duration-300 ease-in-out ${isSidebarOpen ? "max-w-full 2xl:max-w-360" : "max-w-7xl 2xl:max-w-340"}`}
      >
        <div className="flex items-center justify-between">
          <div className="w-full max-w-80">
            <CourseSearchBar />
          </div>
          <CourseCategoryFilter />
          <CourseSortSelect />
          <AddCourseButton />
        </div>

        <CoursesTable isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

import { useEffect, useLayoutEffect, useRef } from "react";

import { CoursesFooter } from "@modules/courses/shared/components";
import { useCoursesContext } from "@modules/courses/shared/contexts";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { useTemporaryState } from "@shared/state";
import { Pagination } from "@shared/table";

import {
  AddCourseButton,
  CourseCategoryFilter,
  CourseSearchBar,
  CoursesTable,
} from "../components";
import type { CourseLocationPayload } from "./types";

export const CoursesPage = () => {
  Navigation.hooks.useScrollToTopOnRouteChange();

  const { show: showToast } = Toast.use();
  const [payload] = useTemporaryState(
    Navigation.hooks.usePayload<CourseLocationPayload>(),
  );

  const consumePayload =
    Navigation.hooks.useConsumePayload<CourseLocationPayload>();
  const hasShownToast = useRef(false);
  const hasResetFilters = useRef(false);
  useEffect(() => {
    if (!payload?.toastState || hasShownToast.current) return;
    showToast(payload.toastState);
    hasShownToast.current = true;

    consumePayload();
  }, [payload?.toastState, showToast, consumePayload]);

  const {
    processedCourses,
    isSourceByCategory,
    filter: { resetFilters },
  } = useCoursesContext();

  useLayoutEffect(() => {
    if (payload?.shouldResetFilters && !hasResetFilters.current) {
      resetFilters();
      hasResetFilters.current = true;
    }
  }, [payload?.shouldResetFilters, resetFilters]);

  const localPaginationSource = isSourceByCategory ? processedCourses : [];

  return (
    <Pagination.Provider
      items={localPaginationSource}
      resetDeps={[localPaginationSource]}
    >
      <div className="min-h-screen pt-20 pb-20">
        <div className="mx-auto flex w-full flex-col gap-16">
          <div className="flex flex-col gap-8 select-none md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-col gap-5 md:flex-row md:items-center">
              <div className="w-full max-w-80">
                <CourseSearchBar />
              </div>
              <CourseCategoryFilter />
            </div>

            <AddCourseButton />
          </div>
          <CoursesTable affectedCourseId={payload?.maKhoaHoc} />
          <CoursesFooter />
        </div>
      </div>
    </Pagination.Provider>
  );
};

import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { Pagination } from "@shared/table";

import {
  CourseEnrollmentUserSearchBar,
  CoursesEnrollmentTable,
} from "../components";
import { useCourseEnrollmentContext } from "../contexts";
import type { CourseEnrollmentLocationPayload } from "./type";

const PAYLOAD_DISPLAY_DURATION = 2500;

export const CourseEnrollmentPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  const { show: showToast } = Toast.use();
  const payload =
    Navigation.hooks.usePayload<CourseEnrollmentLocationPayload>();

  const consumePayload =
    Navigation.hooks.useConsumePayload<CourseEnrollmentLocationPayload>();
  const hasShownToast = useRef(false);
  useEffect(() => {
    if (!payload?.toastState) {
      hasShownToast.current = false;
      return;
    }

    if (!hasShownToast.current) {
      showToast(payload.toastState);
      hasShownToast.current = true;
    }

    const timeoutId = window.setTimeout(
      consumePayload,
      PAYLOAD_DISPLAY_DURATION,
    );

    return () => window.clearTimeout(timeoutId);
  }, [consumePayload, payload, showToast]);

  const { enrollmentUsers, maKhoaHoc, tenKhoaHoc } =
    useCourseEnrollmentContext();

  return (
    <div className="min-h-screen pt-5">
      <div
        className="flex scroll-target items-center justify-center gap-4"
        ref={scrollRef}
      >
        <div className="flex flex-col items-center gap-1.5 text-center select-none">
          <h1 className="text-lg font-semibold tracking-wide uppercase md:text-xl">
            Danh sách học viên
          </h1>
          <span className="inline-flex items-center gap-1 rounded-pill border border-border-subtle bg-bg-subtle px-3 py-1 text-xs font-medium md:text-sm">
            {tenKhoaHoc}{" "}
            <span className="text-muted font-mono">(#{maKhoaHoc})</span>
          </span>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <div className="w-full md:max-w-165">
          <CourseEnrollmentUserSearchBar />
        </div>
        <Pagination.Provider
          items={enrollmentUsers}
          resetDeps={[enrollmentUsers]}
        >
          <CoursesEnrollmentTable
            affectedUserAccount={payload?.affectedUserAccount ?? null}
          />
        </Pagination.Provider>
      </div>
    </div>
  );
};

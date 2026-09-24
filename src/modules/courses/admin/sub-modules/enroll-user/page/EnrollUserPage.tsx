import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { Pagination } from "@shared/table";

import { EnrollUserTable } from "../components";
import { useEnrollUserContext } from "../context";
import type { EnrollUserLocationPayload } from "./type";

const FALLBACK_CONSUME_DURATION = 20000;

export const EnrollUserPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  const { show: showToast } = Toast.use();
  const payload = Navigation.hooks.usePayload<EnrollUserLocationPayload>();
  const consumePayload =
    Navigation.hooks.useConsumePayload<EnrollUserLocationPayload>();
  const hasShownToast = useRef(false);
  const wasLoadingRef = useRef(false);

  const {
    courseDetail,
    unenrolledUsers,
    status: { isLoading },
  } = useEnrollUserContext();

  useEffect(() => {
    if (!payload?.toastState) {
      hasShownToast.current = false;
      wasLoadingRef.current = false;
      return;
    }

    if (!hasShownToast.current) {
      showToast(payload.toastState);
      hasShownToast.current = true;
    }

    if (isLoading) {
      // remember that the refetch actually started before trusting the next "not loading" read
      wasLoadingRef.current = true;
      return;
    }

    if (wasLoadingRef.current) {
      consumePayload();
      return;
    }

    // safety net in case isLoading never flips true (e.g. race with the query's fetching flag)
    const timeoutId = window.setTimeout(
      consumePayload,
      FALLBACK_CONSUME_DURATION,
    );

    return () => window.clearTimeout(timeoutId);
  }, [consumePayload, payload, showToast, isLoading]);

  return (
    <div className="min-h-screen pt-5">
      <div className="flex flex-col gap-6">
        <div
          className="flex scroll-target items-center justify-center gap-4"
          ref={scrollRef}
        >
          <div className="flex flex-col items-center gap-1.5 text-center select-none">
            <h1 className="text-lg font-semibold tracking-wide uppercase md:text-xl">
              Danh sách học viên chưa ghi danh
            </h1>
            <span className="inline-flex items-center gap-1 rounded-pill border border-border-subtle bg-bg-subtle px-3 py-1 text-xs font-medium md:text-sm">
              {courseDetail?.tenKhoaHoc}{" "}
              <span className="text-muted font-mono">
                (#{courseDetail?.maKhoaHoc})
              </span>
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Pagination.Provider
            items={unenrolledUsers}
            resetDeps={[unenrolledUsers]}
          >
            <EnrollUserTable previousPage={payload?.previousPage ?? null} />
          </Pagination.Provider>
        </div>
      </div>
    </div>
  );
};

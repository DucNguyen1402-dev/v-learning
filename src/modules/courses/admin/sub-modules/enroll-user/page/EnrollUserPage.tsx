import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { Pagination } from "@shared/table";

import { EnrollUserTable } from "../components";
import { useEnrollUserContext } from "../context";
import type { EnrollUserLocationPayload } from "./type";

const PAYLOAD_DISPLAY_DURATION = 2500;

export const EnrollUserPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  const { show: showToast } = Toast.use();
  const payload = Navigation.hooks.usePayload<EnrollUserLocationPayload>();
  const consumePayload =
    Navigation.hooks.useConsumePayload<EnrollUserLocationPayload>();
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

  const { courseDetail, unenrolledUsers } = useEnrollUserContext();

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
            <EnrollUserTable />
          </Pagination.Provider>
        </div>
      </div>
    </div>
  );
};

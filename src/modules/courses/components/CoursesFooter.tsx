import { useLayoutEffect, useRef } from "react";

import { Pagination } from "@shared/table";

import { useCoursesContext } from "../contexts";

export const CoursesFooter = () => {
  const { pagination } = useCoursesContext();
  const footerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const rect = footerElement.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2; // 20% offset for better visibility

    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [pagination.state.pageSize, pagination.state.currentPage]);

  return (
    <div className="flex flex-col gap-8 lg:gap-5" ref={footerRef}>
      <div className="flex items-center justify-center px-4 text-sm lg:justify-between">
        <Pagination.components.Info
          displayStart={pagination.state.displayStart}
          displayEnd={pagination.state.displayEnd}
          totalItems={pagination.state.totalItems}
        />
        <Pagination.components.Control
          state={pagination.state}
          actions={pagination.actions}
          status={pagination.status}
        />
      </div>

      <div className="self-end pr-6 md:pr-26 lg:pr-0">
        <Pagination.components.Select
          value={pagination.state.pageSize}
          onChange={pagination.actions.setSize}
          hideEntity
          shouldCompactOptions
          disabled={pagination.status.isEmpty}
        />
      </div>
    </div>
  );
};

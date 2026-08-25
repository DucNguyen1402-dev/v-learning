import { useLayoutEffect, useRef } from "react";

import { Pagination } from "@shared/table";

import { useCoursesContext } from "../contexts";

export const CoursesFooter = () => {
  const { pagination, status, isSourceByCategory } = useCoursesContext();
  const footerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  const categoryPagination = Pagination.use();
  useLayoutEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const rect = footerElement.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;

    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [pagination.state.pageSize, pagination.state.currentPage]);

  const targetPagination = isSourceByCategory ? categoryPagination : pagination;
  const targetRef = isSourceByCategory
    ? categoryPagination.refs.scrollToTarget
    : footerRef;
  return (
    <div className="flex flex-col gap-8 lg:gap-5" ref={targetRef}>
      <div className="flex items-center justify-center px-4 text-sm lg:justify-between">
        <Pagination.components.Info
          displayStart={targetPagination.state.displayStart}
          displayEnd={targetPagination.state.displayEnd}
          totalItems={targetPagination.state.totalItems}
        />
        <Pagination.components.Control
          state={targetPagination.state}
          actions={targetPagination.actions}
          status={status}
        />
      </div>

      <div className="self-end pr-6 md:pr-26 lg:pr-0">
        <Pagination.components.Select
          value={targetPagination.state.pageSize}
          onChange={targetPagination.actions.setSize}
          hideEntity
          shouldCompactOptions
          disabled={status.isLoading}
        />
      </div>
    </div>
  );
};

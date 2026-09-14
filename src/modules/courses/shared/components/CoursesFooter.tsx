import { useLayoutEffect } from "react";

import { Pagination } from "@shared/table";

import { useCoursesContext } from "../contexts";

export const CoursesFooter = () => {
  const { pagination, status, isSourceByCategory } = useCoursesContext();
  const categoryPagination = Pagination.use();

  const targetPagination = isSourceByCategory ? categoryPagination : pagination;
  const {
    controls: { scrollToTarget },
    flags: { hasPaginationChanged },
  } = targetPagination;

  useLayoutEffect(() => {
    if (status.isLoading || !hasPaginationChanged()) return;
    scrollToTarget();
  }, [hasPaginationChanged, scrollToTarget, status.isLoading]);

  const targetRef = isSourceByCategory
    ? categoryPagination.refs.scrollToTarget
    : pagination.refs.scrollToTarget;
  return (
    <div className="flex scroll-target flex-col gap-8 lg:gap-5" ref={targetRef}>
      <div className="flex items-center justify-center px-4 text-sm lg:justify-between">
        <Pagination.components.Info
          displayStart={targetPagination.state.displayStart}
          displayEnd={targetPagination.state.displayEnd}
          totalItems={targetPagination.state.totalItems}
        />
        <Pagination.components.Control
          state={targetPagination.state}
          actions={targetPagination.actions}
          isLoading={status.isLoading}
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

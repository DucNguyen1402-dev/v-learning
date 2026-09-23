import { useLayoutEffect } from "react";

import { Pagination } from "@shared/table";

export const PersonalCourseListFooter = () => {
  const isLoading = false;
  const {
    state,
    actions,
    controls: { scrollToTarget },
    refs: { scrollToTarget: targetRef },
    flags: { hasPaginationChanged },
  } = Pagination.use();

  useLayoutEffect(() => {
    if (!hasPaginationChanged()) return;

    scrollToTarget();
  }, [hasPaginationChanged, scrollToTarget, state.currentPage, state.pageSize]);

  return (
    <div className="flex flex-col gap-8 lg:gap-5" ref={targetRef}>
      <div className="flex items-center justify-center px-4 text-sm lg:justify-between">
        <Pagination.components.Info
          displayStart={state.displayStart}
          displayEnd={state.displayEnd}
          totalItems={state.totalItems}
          isLoading={isLoading}
        />
        <Pagination.components.Control
          state={state}
          actions={actions}
          isLoading={isLoading}
        />
      </div>

      <div className="self-end pr-6 md:pr-26 lg:pr-0">
        <Pagination.components.Select
          value={state.pageSize}
          onChange={actions.setSize}
          hideEntity
          shouldCompactOptions
          disabled={isLoading}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

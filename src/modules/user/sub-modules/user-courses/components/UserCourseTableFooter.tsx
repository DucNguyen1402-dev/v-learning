import { useLayoutEffect } from "react";

import { Pagination } from "@shared/table";

type CoursesEnrollmentTableFooterProps = {
  isLoading: boolean;
};
export const UserCourseTableFooter = ({
  isLoading,
}: CoursesEnrollmentTableFooterProps) => {
  const {
    state,
    actions,
    refs: { scrollToTarget },
    flags: { hasPaginationChanged },
    controls: { scrollToTarget: scrollToTargetControl },
  } = Pagination.use();

  useLayoutEffect(() => {
    if (isLoading || !hasPaginationChanged()) return;

    scrollToTargetControl();
  }, [hasPaginationChanged, scrollToTarget, isLoading, scrollToTargetControl]);

  return (
    <div className="flex flex-col gap-8 lg:gap-5" ref={scrollToTarget}>
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

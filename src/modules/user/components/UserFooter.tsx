import { useLayoutEffect } from "react";

import { Pagination } from "@shared/table";

import { useUserContext } from "../contexts";

export const UserFooter = () => {
  const { pagination, status, isLocalPagination } = useUserContext();

  const localPagination = Pagination.use();

  const targetPagination = isLocalPagination ? localPagination : pagination;
  const targetRef = isLocalPagination
    ? localPagination.refs.scrollToTarget
    : pagination.refs.scrollToTarget;

  const {
    controls: { scrollToTarget },
    flags: { hasPaginationChanged },
  } = targetPagination;

  useLayoutEffect(() => {
    if (status.isLoading || !hasPaginationChanged()) return;

    scrollToTarget();
  }, [hasPaginationChanged, scrollToTarget, status.isLoading]);

  return (
    <div className="flex flex-col gap-8 lg:gap-5" ref={targetRef}>
      <div className="flex items-center justify-center px-4 text-sm lg:justify-between">
        <Pagination.components.Info
          displayStart={targetPagination.state.displayStart}
          displayEnd={targetPagination.state.displayEnd}
          totalItems={targetPagination.state.totalItems}
          isLoading={status.isLoading}
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
          isLoading={status.isLoading}
        />
      </div>
    </div>
  );
};

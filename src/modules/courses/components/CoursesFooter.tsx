import { useLayoutEffect, useRef } from "react";

import { Pagination } from "@shared/table";

import { useCoursesContext } from "../contexts";

export const CoursesFooter = () => {
  const { pagination } = useCoursesContext();
  const footerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return;

    const rect = footerElement.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top;

    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [pagination.state.currentSize, pagination.state.currentPage]);

  return (
    <div className="flex flex-col gap-8 lg:gap-5" ref={footerRef}>
      <Pagination.ControlApi
        state={pagination.state}
        actions={pagination.actions}
      />

      <div className="self-end pr-6 md:pr-26 lg:pr-0">
        <Pagination.Select
          value={pagination.state.currentSize}
          onChange={pagination.actions.setSize}
          hideEntity
        />
      </div>
    </div>
  );
};

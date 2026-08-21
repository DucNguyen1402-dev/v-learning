import { useLayoutEffect, useRef } from "react";

import type { Courses } from "@modules/courses/types";
import { Pagination } from "@shared/table";

export const CoursesFooter = () => {
  const {
    state: { currentSize, currentPage },
    actions: { setSize },
  } = Pagination.use<Courses>();

  const footerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return;

    const rect = footerElement.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top;

    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [currentSize, currentPage]);

  return (
    <div className="flex flex-col gap-8 lg:gap-5" ref={footerRef}>
      <Pagination.Control />

      <div className="self-end pr-6 md:pr-26 lg:pr-0">
        <Pagination.Select value={currentSize} onChange={setSize} hideEntity />
      </div>
    </div>
  );
};

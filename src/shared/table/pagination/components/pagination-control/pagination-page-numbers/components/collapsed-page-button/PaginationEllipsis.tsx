import { createArray } from "@shared/utils";
export const PaginationEllipsis = () => (
  <div className="mb-px flex items-center gap-px select-none md:mb-0.5 md:gap-0.5">
    {createArray(3).map((_, index) => (
      <span
        key={index}
        className="text-xs font-bold text-text-subtle md:text-lg"
      >
        .
      </span>
    ))}
  </div>
);

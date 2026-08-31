import type { ReactNode } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <span className="group/tooltip relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md bg-bg-elevated px-2.5 py-1.5 text-xs font-medium whitespace-nowrap opacity-0 shadow-control transition-opacity duration-150 group-focus-within/tooltip:opacity-100 group-hover/tooltip:opacity-100"
      >
        {content}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-bg-elevated" />
      </span>
    </span>
  );
};

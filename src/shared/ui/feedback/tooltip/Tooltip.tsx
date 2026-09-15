import { useId, useRef, useState } from "react";

import { TooltipContent } from "./TooltipContent";
import { TooltipTrigger } from "./ToolTipTrigger";

export const Tooltip = ({
  trigger,
  content,
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TooltipTrigger
      ref={triggerRef}
      aria-describedby={isOpen ? tooltipId : undefined}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      {trigger}
      {isOpen ? (
        <TooltipContent
          id={tooltipId}
          content={content}
          triggerRef={triggerRef}
        />
      ) : null}
    </TooltipTrigger>
  );
};

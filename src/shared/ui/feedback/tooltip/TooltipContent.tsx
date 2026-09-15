import { useLayoutEffect, useState } from "react";

import { Portal } from "./Portal";

type TooltipPosition = {
  top: number;
  left: number;
};

export const TooltipContent = ({
  content,
  triggerRef,
  id,
}: {
  content: React.ReactNode;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  id: string;
}) => {
  const [position, setPosition] = useState<TooltipPosition | null>(null);

  useLayoutEffect(() => {
    const updatePosition = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      setPosition({
        top: rect.top - 8,
        left: rect.left + rect.width / 2,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [triggerRef]);

  if (!position) return null;

  return (
    <Portal>
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none fixed z-popover -translate-x-1/2 -translate-y-full rounded-md bg-bg-elevated px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shadow-control"
        style={{
          top: position.top,
          left: position.left,
        }}
      >
        {content}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-bg-elevated" />
      </span>
    </Portal>
  );
};

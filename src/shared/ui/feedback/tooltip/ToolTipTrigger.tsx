import type {
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
} from "react";

export const TooltipTrigger = ({
  children,
  ref,
  "aria-describedby": ariaDescribedBy,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
}: {
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
  "aria-describedby"?: string;
  onBlur?: FocusEventHandler<HTMLDivElement>;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref}
      aria-describedby={ariaDescribedBy}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative inline-flex"
    >
      {children}
    </div>
  );
};

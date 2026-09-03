import { useEffect, useRef } from "react";

type UseScrollIntoViewProps = {
  ref: React.RefObject<HTMLElement | null>;
  enabled: boolean;
  options?: ScrollIntoViewOptions;
};
export function useScrollIntoView({
  ref,
  enabled,
  options = {
    behavior: "smooth",
    block: "center",
  },
}: UseScrollIntoViewProps) {
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (!enabled || hasScrolled.current) return;
    ref.current?.scrollIntoView(options);
    hasScrolled.current = true;
  }, [enabled, options, ref]);
}

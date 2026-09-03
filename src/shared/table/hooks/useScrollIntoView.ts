import { useEffect } from "react";

type UseScrollIntoViewProps = {
  ref: React.RefObject<HTMLTableElement | null>;
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
  useEffect(() => {
    if (!enabled) return;
    ref.current?.scrollIntoView(options);
  }, [enabled, options, ref]);
}

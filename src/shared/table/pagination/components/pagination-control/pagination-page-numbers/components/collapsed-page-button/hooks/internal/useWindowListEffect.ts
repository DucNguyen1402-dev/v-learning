import { useEffect } from "react";
type UseWindowListEffectProps = {
  leadingPages: number[];
  trailingPages: number[];
  currentPage: number;
  scrollToSlide: (page: number) => void;
  setSlideTo: (slide: number) => void;
  lastSlide: number;
};
export const useWindowListEffect = ({
  leadingPages,
  trailingPages,
  currentPage,
  scrollToSlide,
  setSlideTo,
  lastSlide,
}: UseWindowListEffectProps) => {
  useEffect(() => {
    if (leadingPages.includes(currentPage)) {
      setSlideTo(1);
      return;
    }

    if (trailingPages.includes(currentPage)) {
      setSlideTo(lastSlide);
      return;
    }
    scrollToSlide(currentPage);
  }, [
    currentPage,
    leadingPages,
    lastSlide,
    trailingPages,
    scrollToSlide,
    setSlideTo,
  ]);
};

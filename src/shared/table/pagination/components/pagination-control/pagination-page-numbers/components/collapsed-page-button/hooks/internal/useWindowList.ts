import { useCallback, useState } from "react";

type UseWindowedListProps = {
  items: number[];
  dynamicWindowSize: number;
  isDynamicWindowExpanded: boolean;
};
export const useWindowList = ({
  items,
  dynamicWindowSize,
  isDynamicWindowExpanded,
}: UseWindowedListProps) => {
  const [slide, setSlide] = useState(1);
  const totalSlides = Math.ceil(items.length / dynamicWindowSize);

  // clamp during render (not in an effect) to avoid a stale-window flash for one frame
  if (slide > totalSlides) setSlide(totalSlides);
  
  const clampedSlide = Math.min(slide, totalSlides);

  const windowStart = (clampedSlide - 1) * dynamicWindowSize;
  const windowEnd = clampedSlide * dynamicWindowSize;

  const windowSlideList = items.slice(windowStart, windowEnd);
  const nextWindowSlideItem = items[windowEnd];
  const prevWindowSlideItem = items[windowStart - 1];

  const setSlideTo = useCallback(
    (targetSlide: number) => {
      if (targetSlide < 1 || targetSlide > totalSlides) return;

      setSlide(targetSlide);
    },
    [setSlide, totalSlides],
  );

  const scrollToSlide = useCallback(
    (item: number) => {
      const index = items.indexOf(item);
      if (index === -1) return;
      const targetSlide = Math.floor(index / dynamicWindowSize) + 1;

      if (isDynamicWindowExpanded) return;

      setSlideTo(targetSlide);
    },
    [items, dynamicWindowSize, isDynamicWindowExpanded, setSlideTo],
  );

  return {
    windowSlideList,
    nextWindowSlideItem,
    prevWindowSlideItem,
    currentSlide: clampedSlide,
    lastSlide: totalSlides,
    scrollToSlide,
    setSlideTo,
  };
};

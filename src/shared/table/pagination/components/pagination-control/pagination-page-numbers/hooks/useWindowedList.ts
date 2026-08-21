import { useCallback, useMemo, useState } from "react";

type UseWindowedListProps = {
  items: number[];
  windowSize: number;
};
export const useWindowedList = ({
  items,
  windowSize,
}: UseWindowedListProps) => {
  const [slide, setSlide] = useState(1);

  const totalSlides = useMemo(
    () => Math.ceil(items.length / windowSize),
    [items.length, windowSize],
  );
  const windowSlideList = useMemo(
    () => items.slice((slide - 1) * windowSize, slide * windowSize),
    [items, slide, windowSize],
  );

  const setSlideTo = useCallback(
    (targetSlide: number) => {
      if (targetSlide < 1 || targetSlide > totalSlides) return;
      setSlide(targetSlide);
    },
    [totalSlides],
  );
  const scrollToItem = useCallback(
    (item: number) => {
      const index = items.indexOf(item);
      if (index === -1) return;
      setSlideTo(Math.floor(index / windowSize) + 1);
    },
    [items, setSlideTo, windowSize],
  );

  return {
    windowSlideList,
    currentSlide: slide,
    lastSlide: totalSlides,
    scrollToItem,
    setSlideTo,
  };
};

import { useCallback, useState } from "react";

type UseWindowedListProps = {
  items: number[];
  dynamicWindowSize: number;
  baseWindowSize: number;
};
export const useWindowedList = ({
  items,
  dynamicWindowSize,
  baseWindowSize,
}: UseWindowedListProps) => {
  const [slide, setSlide] = useState(1);

  const totalSlides = Math.ceil(items.length / dynamicWindowSize);

  const windowSlideList = items.slice(
    (slide - 1) * dynamicWindowSize,
    slide * dynamicWindowSize,
  );

  const nextWindowSlideItem = items[slide * dynamicWindowSize];

  const prevWindowSlideItem = items[(slide - 1) * dynamicWindowSize - 1];

  const setSlideTo = useCallback(
    (targetSlide: number) => {
      if (targetSlide < 1 || targetSlide > totalSlides) return;
      setSlide(targetSlide);
    },
    [totalSlides],
  );
  const scrollToSlide = useCallback(
    (item: number) => {
      const index = items.indexOf(item);
      if (index === -1) return;
      const targetSlide = Math.floor(index / dynamicWindowSize) + 1;

      if (dynamicWindowSize !== baseWindowSize) return;
      setSlideTo(targetSlide);
    },
    [items, setSlideTo, dynamicWindowSize, baseWindowSize],
  );

  if (slide > totalSlides) {
    setSlide(totalSlides);
  }

  return {
    windowSlideList,
    nextWindowSlideItem,
    prevWindowSlideItem,
    currentSlide: slide,
    lastSlide: totalSlides,
    scrollToSlide,
    setSlideTo,
  };
};

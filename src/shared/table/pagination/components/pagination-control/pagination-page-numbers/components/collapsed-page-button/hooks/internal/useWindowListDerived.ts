type IsPageInWindowProps = {
  currentPage: number;
  lastLeadingPage: number;
  firstTrailingPage: number;
};
const isPageInWindow = ({
  currentPage,
  lastLeadingPage,
  firstTrailingPage,
}: IsPageInWindowProps) =>
  currentPage >= firstTrailingPage && currentPage <= lastLeadingPage;

type GetShouldShowNextWindowSlideItemProps = {
  currentPage: number;
  trailingPages: number[];
  dynamicWindowSize: number;
  middlePageIndex: number;
  isBaseWindow: boolean;
};

const getShouldShowNextWindowSlideItem = ({
  currentPage,
  trailingPages,
  dynamicWindowSize,
  middlePageIndex,
  isBaseWindow,
}: GetShouldShowNextWindowSlideItemProps) => {
  const isLastMiddlePage = currentPage + 1 === trailingPages.at(0);

  if (isLastMiddlePage) return false;
  if (middlePageIndex === -1 || !isBaseWindow) return false;

  return (middlePageIndex + 1) % dynamicWindowSize === 0;
};

type GetShouldShowPrevWindowSlideItemProps = {
  currentPage: number;
  leadingPages: number[];
  middlePageIndex: number;
  isBaseWindow: boolean;
  dynamicWindowSize: number;
};
const getShouldShowPrevWindowSlideItem = ({
  currentPage,
  leadingPages,
  middlePageIndex,
  isBaseWindow,
  dynamicWindowSize,
}: GetShouldShowPrevWindowSlideItemProps) => {
  const isFirstMiddlePage = currentPage - 1 === leadingPages.at(-1);

  if (isFirstMiddlePage) return false;
  if (middlePageIndex === -1 || !isBaseWindow) return false;

  return middlePageIndex % dynamicWindowSize === 0;
};

export const useWindowListDerived = ({
  currentSlide,
  currentPage,
  lastSlide,
  leadingPages,
  trailingPages,
  middlePages,
  dynamicWindowSize,
  baseWindowSize,
}: {
  currentSlide: number;
  currentPage: number;
  lastSlide: number;
  leadingPages: number[];
  trailingPages: number[];
  middlePages: number[];
  dynamicWindowSize: number;
  baseWindowSize: number;
}) => {
  const shouldShowLeadingEllipsis = currentSlide > 1;
  const shouldShowTrailingEllipsis = currentSlide < lastSlide;

  const shouldShowWindow = isPageInWindow({
    currentPage,
    lastLeadingPage: leadingPages.at(-1)!,
    firstTrailingPage: trailingPages[0]!,
  });

  const middlePageIndex = middlePages.indexOf(currentPage);
  const isBaseWindow = dynamicWindowSize === baseWindowSize;

  const shouldShowNextWindowSlideItem = getShouldShowNextWindowSlideItem({
    currentPage,
    trailingPages,
    dynamicWindowSize,
    middlePageIndex,
    isBaseWindow,
  });
  const shouldShowPrevWindowSlideItem = getShouldShowPrevWindowSlideItem({
    currentPage,
    leadingPages,
    dynamicWindowSize,
    middlePageIndex,
    isBaseWindow,
  });

  return {
    shouldShowLeadingEllipsis,
    shouldShowTrailingEllipsis,
    shouldShowWindow,
    shouldShowNextWindowSlideItem,
    shouldShowPrevWindowSlideItem,
  };
};

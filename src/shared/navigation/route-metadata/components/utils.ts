export const setFavicon = (favicon: string) => {
  const faviconElement =
    document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
    document.createElement("link");

  faviconElement.rel = "icon";
  faviconElement.href = favicon;

  if (!faviconElement.parentNode) {
    document.head.appendChild(faviconElement);
  }
};

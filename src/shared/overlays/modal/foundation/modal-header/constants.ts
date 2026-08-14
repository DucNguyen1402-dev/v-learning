export const MODAL_HEADER_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type ModalHeaderSize =
  (typeof MODAL_HEADER_SIZES)[keyof typeof MODAL_HEADER_SIZES];

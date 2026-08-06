import type { ToastVariant } from "@shared/overlays/toast/constants";

export type ToastContextValues = {
  state: {
    ref: React.RefObject<HTMLDivElement | null>;
    message: string;
    variant: ToastVariant | null;
    isOpen: boolean;
  };
  show: (props: { variant: ToastVariant; message: string }) => void;
  hide: () => void;
};

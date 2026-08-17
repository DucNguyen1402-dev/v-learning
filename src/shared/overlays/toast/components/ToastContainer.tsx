import {
  iconTypeClasses,
  messageFontSizes,
  toastIconSizes,
  toastIconTypes,
  toastSizeClasses,
  toastTypeClasses,
} from "@shared/overlays/toast/config";
import type { ToastVariant } from "@shared/overlays/toast/constants";
import { cn } from "@shared/utils";

type ToastContainerProps = {
  message: string;
  variant: ToastVariant | null;
  toastRef: React.RefObject<HTMLDivElement | null>;
  size?: keyof typeof toastSizeClasses;
};

export const ToastContainer = ({
  message = "something went wrong",
  variant,
  toastRef,
  size = "md",
}: ToastContainerProps) => {
  if (!variant) return;

  if (import.meta.env.DEV && !(variant in toastTypeClasses)) {
    console.warn(`Unknown toast variant: "${variant}"`);
  }

  const toastSize = toastSizeClasses[size];
  const toasttypeClass = toastTypeClasses[variant];
  const iconTypeClass = iconTypeClasses[variant];

  const Icon = toastIconTypes[variant];
  const iconSize = toastIconSizes[size];
  const messageSize = messageFontSizes[size];
  return (
    <div ref={toastRef} className={cn("toast", toasttypeClass, toastSize)}>
      <Icon className={cn(iconSize, iconTypeClass)} />

      <p className={cn("flex-1 font-medium", messageSize)}>{message}</p>
    </div>
  );
};
ToastContainer.displayName = "ToastContainer";

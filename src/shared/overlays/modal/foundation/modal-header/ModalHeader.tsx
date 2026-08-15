import { cn } from "@shared/utils";

import { modalHeaderSizes } from "./config";
import { MODAL_HEADER_SIZES, type ModalHeaderSize } from "./constants";

interface ModalHeaderProps {
  title?: string;
  subtitle?: string;
  titleSize?: ModalHeaderSize;
}

export const ModalHeader = ({
  title,
  subtitle,
  titleSize = MODAL_HEADER_SIZES.LARGE,
}: ModalHeaderProps) => (
  <div className="modal-header-container">
    {title && (
      <h2 className={cn("modal-header-title", modalHeaderSizes[titleSize])}>
        {title}
      </h2>
    )}
    {subtitle && <p className="modal-header-subtitle">{subtitle}</p>}
  </div>
);

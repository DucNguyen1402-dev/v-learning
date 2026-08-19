import type { ComponentType, ReactNode } from "react";

import { X } from "lucide-react";
type EmptyStateProps = {
  illustration?: ReactNode;
  action?: ReactNode;
  title: string;
  description?: string;
  customIcon?: ReactNode;
  hiddenIcon?: boolean;
  icon?: ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const EmptyState = ({
  icon: Icon = X,
  illustration,
  action,
  title,
  description,
}: EmptyStateProps) => (
  <div className="empty-state-container">
    {illustration ? (
      illustration
    ) : (
      <div className="empty-state-icon-wrapper">
        <Icon className="empty-state-icon" />
      </div>
    )}

    <div className="empty-state-content">
      <h3 className="empty-state-content-title">{title}</h3>

      {description && (
        <p className="empty-state-content-description">{description}</p>
      )}

      <div className="mt-8">{action}</div>
    </div>
  </div>
);

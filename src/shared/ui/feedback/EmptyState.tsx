import { X } from "lucide-react";

type EmptyStateProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  actions?: React.ReactNode;
  title: string;
  description?: string;
};

export const EmptyState = ({
  icon: Icon = X,
  actions,
  title,
  description,
}: EmptyStateProps) => (
  <div className="empty-state-container">
    <div className="empty-state-icon-wrapper">
      <Icon className="empty-state-icon" />
    </div>

    <div className="empty-state-content">
      <h3 className="empty-state-content-title">{title}</h3>

      {description && (
        <p className="empty-state-content-description">{description}</p>
      )}

      <div className="mt-8">{actions}</div>
    </div>
  </div>
);

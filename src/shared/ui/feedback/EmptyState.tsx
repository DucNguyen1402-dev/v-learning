import { X } from "lucide-react";

type EmptyStateProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  action?: React.ReactNode;
  title: string;
  description?: string;
};

export const EmptyState = ({
  icon: Icon = X,
  action,
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

      <div className="mt-8">{action}</div>
    </div>
  </div>
);

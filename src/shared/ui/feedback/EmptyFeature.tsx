import { Navigation } from "@shared/navigation";
import { DatabaseBackup, Home } from "lucide-react";

interface EmptyFeatureProps {
  title: string;
  shouldHideAction?: boolean;

  onBack?: () => void;
}

export const EmptyFeature = ({
  title,
  shouldHideAction,
}: EmptyFeatureProps) => {
  return (
    <section className="flex min-h-[calc(100vh-16rem)] w-full flex-col items-center justify-center px-4 py-16 text-center select-none">
      <div className="mx-auto flex max-w-xl flex-col items-center">
        {/* Decorative Visual */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-bg-muted/80 text-text-subtle shadow-inner">
          <DatabaseBackup className="h-10 w-10 stroke-[1.5] text-text-subtle" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-text-default sm:text-3xl">
          Chưa có dữ liệu hiển thị
        </h1>

        <p className="mt-3 max-w-md text-base leading-relaxed text-text-subtle">
          Hiện tại nội dung cho trang{" "}
          <span className="font-medium text-text-default">{title}</span> chưa
          khả dụng do chưa có dữ liệu cập nhật.
        </p>

        {!shouldHideAction && (
          <div className="mt-8">
            <Navigation.components.Go
              routeKey={Navigation.client.keys.HOME}
              className="button-base button-primary solid rounded-control px-4 py-2 text-sm"
            >
              <Home className="h-4 w-4" />
              Quay lại trang chủ
            </Navigation.components.Go>
          </div>
        )}
      </div>
    </section>
  );
};

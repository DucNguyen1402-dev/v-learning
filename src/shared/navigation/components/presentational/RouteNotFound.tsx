import { Navigation } from "@shared/navigation";

export const RouteNotFound = () => {
  const currentArea = Navigation.hooks.useCurrentArea();

  const targetRouteKey =
    currentArea === "client"
      ? Navigation.client.keys.HOME
      : Navigation.admin.keys.COURSES;

  return (
    <div className="flex-center min-h-screen flex-col px-4">
      <h1 className="mb-2 text-7xl font-bold tracking-tight">404</h1>
      <p className="mb-4 text-xl font-medium text-text-subtle">
        Không tìm thấy trang
      </p>
      <p className="mb-8 max-w-md text-center text-sm text-text-muted">
        Đường dẫn bạn truy cập có thể đã bị thay đổi, xóa hoặc không tồn tại.
      </p>
      <Navigation.components.Go
        routeKey={targetRouteKey}
        className="button-base button-primary solid px-4 py-2"
      >
        Về trang chủ
      </Navigation.components.Go>
    </div>
  );
};

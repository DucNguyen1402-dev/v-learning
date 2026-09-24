import { EmptyState } from "@shared/ui";

export const NotFoundUser = () => (
  <div className="flex-center w-full rounded-container border border-border-subtle">
    <EmptyState
      title="Đã gặp lỗi tìm kiếm người dùng"
      description="Do API hạn chế và chỉ tìm kiếm bằng keyword, người dùng hiện tại có thể không được hiển thị, bạn có thể thử lại với người dùng khác."
    />
  </div>
);

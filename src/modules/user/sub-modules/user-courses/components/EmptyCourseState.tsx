import { TableEmptyState } from "@shared/table";

export const EmptyCourseState = () => (
  <TableEmptyState
    title="Không có khóa học nào."
    description="Người dùng này chưa đăng ký bất kỳ khóa học nào. Hãy kiểm tra lại sau."
    colSpan={4}
  />
);

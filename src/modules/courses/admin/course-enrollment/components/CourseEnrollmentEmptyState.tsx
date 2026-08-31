import { TableEmptyState } from "@shared/table";

export const CourseEnrollmentEmptyState = () => (
  <TableEmptyState
    title="Không có khóa học nào."
    description="Người dùng này chưa đăng ký bất kỳ khóa học nào. Hãy kiểm tra lại sau."
    colSpan={5}
  />
);

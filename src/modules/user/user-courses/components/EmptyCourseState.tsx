import { EmptyState } from "@shared/ui";
import { SearchX } from "lucide-react";
export const EmptyCourseState = () => (
  <EmptyState
    title="Không có khóa học nào."
    description="Người dùng này chưa đăng ký bất kỳ khóa học nào. Hãy kiểm tra lại sau."
    icon={SearchX}
  />
);

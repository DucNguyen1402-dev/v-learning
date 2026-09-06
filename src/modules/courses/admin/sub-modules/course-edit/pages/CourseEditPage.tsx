import { PenLine } from "lucide-react";

import { EditCourseForm } from "../components";

export const CourseEditPage = () => {
  return (
    <div className="flex min-h-screen justify-center pt-6 lg:pt-10">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8">
        <div className="flex-center gap-2 text-sm text-text-subtle">
          <PenLine className="hidden size-4 md:block" />
          <p className="text-center">
            Thay đổi thông tin trong form để cập nhật khóa học.
          </p>
        </div>
        <EditCourseForm />
      </div>
    </div>
  );
};

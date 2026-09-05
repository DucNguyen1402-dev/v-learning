import { useParams } from "react-router-dom";

import { usePersonalCoursesContext } from "@modules/personal-courses/contexts";
import { usePersonalCourseDetailContext } from "@modules/personal-courses/personal-course-detail/contexts";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { AlertCircle, X } from "lucide-react";

export const CancelEnrollmentModal = () => {
  const { onModalCancel, closeCancelModal, onModalConfirm } =
    usePersonalCourseDetailContext();

  const { courses } = usePersonalCoursesContext();

  const { maKhoaHoc } = useParams();
  const targetCourse = courses.find(
    (course) => course.maKhoaHoc === maKhoaHoc,
  )!;

  const handleConfirm = () => {
    onModalConfirm();
    closeCancelModal();
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-overlay bg-bg-elevated p-6 pt-12 shadow-surface">
      <div className="absolute top-4 right-4">
        <Button
          onClick={onModalCancel}
          appearance={BUTTON_APPEARANCES.GHOST}
          intent={BUTTON_INTENTS.TERTIARY}
          size={BUTTON_SIZES.NONE}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex-center size-12 shrink-0 rounded-pill bg-bg-warning/10">
          <AlertCircle className="h-6 w-6 text-text-warning" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">Xác nhận hủy ghi danh</h3>
          <p className="mt-1 text-sm text-text-subtle">
            Bạn đang yêu cầu hủy tham gia khóa học{" "}
            <span className="font-medium text-text-default">
              "{targetCourse.tenKhoaHoc}"
            </span>
            .
          </p>
        </div>
      </div>
      <div className="mt-4 rounded-overlay border border-border-subtle bg-bg-subtle p-3.5 text-xs text-text-subtle">
        💡 Bạn vẫn có thể gia hạn hoặc đăng ký lại bất kỳ lúc nào.
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <Button
          onClick={onModalCancel}
          appearance={BUTTON_APPEARANCES.GHOST}
          intent={BUTTON_INTENTS.SECONDARY}
        >
          Quay lại
        </Button>

        <Button
          type="button"
          onClick={handleConfirm}
          appearance={BUTTON_APPEARANCES.SOLID}
          intent={BUTTON_INTENTS.DESTRUCTIVE}
        >
          Hủy ghi danh
        </Button>
      </div>
    </div>
  );
};

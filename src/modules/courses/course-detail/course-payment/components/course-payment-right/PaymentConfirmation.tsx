import { useCourseDetailContext } from "@modules/courses/course-detail/contexts";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";

export const PaymentConfirmation = () => {
  const { handleRegisterCourse, isRegistering } = useCourseDetailContext();
  return (
    <div className="flex flex-col items-center gap-3">
      <Button
        appearance={BUTTON_APPEARANCES.SOLID}
        intent={BUTTON_INTENTS.PRIMARY}

        fullWidth
        onClick={handleRegisterCourse}
        loading={isRegistering}
      >
        Xác nhận thanh toán
      </Button>

      <p className="text-center text-[11px] text-text-subtle">
        Bằng việc thanh toán, bạn đồng ý với Điều khoản dịch vụ của chúng tôi.
      </p>
    </div>
  );
};

import { useState } from "react";

import { useRegisterMutation } from "@modules/courses/shared/hooks";
import { CurrentUser } from "@shared/current-user";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";

export const useCourseRegister = ({ maKhoaHoc }: { maKhoaHoc: string }) => {
  const { mutateAsync: registerCourse } = useRegisterMutation();

  const [isRegistering, setIsRegistering] = useState(false);

  const { go } = Navigation.hooks.useNavigateWithState();
  const { profile } = CurrentUser.use();
  const toast = Toast.use();

  const handleRegisterCourse = async () => {
    setIsRegistering(true);
    const payload = {
      maKhoaHoc,
      taiKhoan: profile.current.taiKhoan,
    };
    try {
      const registerTask = () => registerCourse(payload);

      await execution.runAsyncTask(registerTask);
      go({
        routeKey: Navigation.client.keys.PERSONAL_COURSES,
        payload: {
          toastState: Toast.config.success.register(ENTITIES.COURSE),
        },
      });
    } catch (error) {
      // API trả về lỗi 500 không rõ ràng nên cần custom message cho từng trường hợp
      // để hiển thị đúng ngữ cảnh cho người dùng.
      toast.show(
        Toast.config.error(
          getErrorMessage({
            error,
            messageForInternalSeverError:
              "Bạn đã đăng ký khóa học này trước đó.",
          }),
        ),
      );
    } finally {
      setIsRegistering(false);
    }
  };

  return {
    handleRegisterCourse,
    isRegistering,
  };
};

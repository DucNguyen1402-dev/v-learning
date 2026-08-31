import { useRegisterMutation } from "@modules/courses/shared/hooks";
import { CurrentUserStorage } from "@shared/auth";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";

export const useCourseRegister = ({ maKhoaHoc }: { maKhoaHoc: string }) => {
  const { mutateAsync: registerCourse, isPending: isRegistering } =
    useRegisterMutation();

  const { go } = Navigation.hooks.useNavigate();
  const currentUser = CurrentUserStorage.get();
  const toast = Toast.use();

  const handleRegisterCourse = async () => {
    const payload = {
      maKhoaHoc,
      taiKhoan: currentUser.taiKhoan,
    };
    try {
      const registerTask = () => registerCourse(payload);

      await execution.runAsyncTask(registerTask);
      go(
        Navigation.client.keys.PERSONAL_COURSE,
        "client",
        Toast.config.success.register(ENTITIES.COURSE),
      );
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
    }
  };

  return {
    handleRegisterCourse,
    isRegistering,
  };
};

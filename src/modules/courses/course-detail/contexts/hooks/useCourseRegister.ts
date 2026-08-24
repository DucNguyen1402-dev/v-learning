import { CurrentUserStorage } from "@shared/auth";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";

import { useCourseDetailMutation } from "./useCourseDetailMutation";

export const useCourseRegister = ({ maKhoaHoc }: { maKhoaHoc: string }) => {
  const { mutateAsync: registerCourse, isPending: isRegistering } =
    useCourseDetailMutation();

  const { go } = Navigation.hooks.useNavigate();
  const currentUser = CurrentUserStorage.get();
  const toast = Toast.use();

  const handleRegisterCourse = async () => {
    const payload = {
      maKhoaHoc,
      taiKhoan: currentUser.taiKhoan,
    };
    console.log("payload", payload);
    try {
      const registerTask = () => registerCourse(payload);

      await execution.runAsyncTask(registerTask);
      go(
        Navigation.client.keys.PERSONAL_COURSE,
        Toast.config.success.register(ENTITIES.COURSE),
      );
    } catch (error) {
      toast.show(Toast.config.error(getErrorMessage(error)));
    }
  };

  return {
    handleRegisterCourse,
    isRegistering,
  };
};

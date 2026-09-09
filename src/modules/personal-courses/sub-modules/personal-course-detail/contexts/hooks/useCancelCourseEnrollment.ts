import { useState } from "react";

import { useCancelPersonalCourseMutation } from "@modules/courses/shared/hooks";
import { CurrentUser } from "@shared/current-user";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Loading, Toast } from "@shared/overlays";

export const useCancelCourseEnrollment = ({
  maKhoaHoc,
}: {
  maKhoaHoc: string;
}) => {
  const { mutation: cancelPersonalCourseMutation } =
    useCancelPersonalCourseMutation();

  const [isCancelPersonalCourseLoading, setIsCancelPersonalCourseLoading] =
    useState(false);
  const { go } = Navigation.hooks.useNavigateWithState();
  const { profile } = CurrentUser.use();
  const toast = Toast.use();
  const { loader } = Loading.use();
  const handleCancelCourse = async () => {
    setIsCancelPersonalCourseLoading(true);
    const payload = {
      maKhoaHoc,
      taiKhoan: profile.current.taiKhoan,
    };
    try {
      const cancelTask = () => cancelPersonalCourseMutation(payload);

      await execution.runAsyncTask(cancelTask, loader);
      go({
        routeKey: Navigation.client.keys.PERSONAL_COURSES,
        payload: {
          toastState: Toast.config.success.cancelCourse(),
          shouldInvalidate: true,
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
              "Hủy ghi danh khóa học thất bại. Vui lòng thử lại sau.",
          }),
        ),
      );
    } finally {
      setIsCancelPersonalCourseLoading(false);
    }
  };

  return {
    handleCancelCourse,
    isCancelPersonalCourseLoading,
  };
};

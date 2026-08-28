import { useState } from "react";

import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Loading, Modal, Toast } from "@shared/overlays";

import { useCourseDeletionMutation } from "./mutation";

type UseCourseDeletionProps = {
  tenKhoaHoc: string;
};
export const useCourseDeletion = ({ tenKhoaHoc }: UseCourseDeletionProps) => {
  const { mutateAsync: deleteCourseMutation } = useCourseDeletionMutation();
  const [targetCourseDeletion, setTargetCourseDeletion] = useState<
    string | null
  >(null);

  const modal = Modal.use();
  const { loader } = Loading.use();
  const toast = Toast.use();
  const deleteCourse = async (maKhoaHoc: string) => {
    modal.close();
    try {
      await execution.runAsyncTask(
        () => deleteCourseMutation(maKhoaHoc),
        loader,
      );
      toast.show(Toast.config.success.delete(ENTITIES.COURSE));
    } catch (error) {
      toast.show(
        Toast.config.error(
          getErrorMessage({
            error,
            messageForInternalSeverError:
              "Khóa học đã ghi danh học viên không thể xóa!",
          }),
        ),
      );
    }
  };

  const onCancelDeletion = () => setTargetCourseDeletion(null);

  const onDeleteClick = (maKhoaHoc: string) => {
    setTargetCourseDeletion(maKhoaHoc);
    modal.open({
      ...Modal.config.delete(ENTITIES.COURSE, tenKhoaHoc),
      onConfirm: () => deleteCourse(maKhoaHoc),
      onCancel: onCancelDeletion,
    });
  };

  return { onDeleteClick, targetCourseDeletion };
};

import { useParams } from "react-router-dom";

import { EMPTY_COURSE } from "@modules/courses/shared/constants";
import { useCourseDetailQuery } from "@modules/courses/shared/hooks";

import { getCourseFormData } from "./helper";
import { useEditCourseActions } from "./useEditCourseActions";
import { useEditCourseForm } from "./useEditCourseForm";

export const useEditCourse = () => {
  const { maKhoaHoc } = useParams();
  const { data: editCourse = EMPTY_COURSE } = useCourseDetailQuery(
    maKhoaHoc as string,
  );

  const editCourseForm = getCourseFormData(editCourse);
  const { register, handleSubmit, errors, isDirty, control, watch } =
    useEditCourseForm({ editCourseForm, maKhoaHoc: editCourse.maKhoaHoc });

  const { handleSubmitEvent, handleFileChange, imgPreview, onCancelClick } =
    useEditCourseActions({
      isDirty,
      handleSubmit,
      editCourse,
    });
  return {
    form: {
      register,
      handleSubmit,
      errors,
      isDirty,
      control,
      watch,
    },
    actions: {
      handleSubmitEvent,
      handleFileChange,
      imgPreview,
      onCancelClick,
      isDirty,
    },
  };
};

export type UseEditCourseReturn = ReturnType<typeof useEditCourse>;

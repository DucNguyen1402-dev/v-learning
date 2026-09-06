import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import type { CourseFormData } from "@modules/courses/admin/shared/types";

import { EMPTY_COURSE } from "./constants";

type UseEditCourseFormProps = {
  editCourseForm: CourseFormData;
  maKhoaHoc: string;
  enabled: boolean;
};
export const useEditCourseForm = ({
  editCourseForm,
  maKhoaHoc,
  enabled,
}: UseEditCourseFormProps) => {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<CourseFormData>({
    defaultValues: EMPTY_COURSE,
  });

  const lastEditCourseId = useRef<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    if (lastEditCourseId.current === maKhoaHoc) return;

    reset(editCourseForm);
    lastEditCourseId.current = maKhoaHoc;
  }, [editCourseForm, maKhoaHoc, reset, enabled]);

  return { register, handleSubmit, errors, isDirty, control, watch };
};

export type UseEditCourseFormReturn = ReturnType<typeof useEditCourseForm>;

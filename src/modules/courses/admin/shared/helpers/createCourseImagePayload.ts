import type { UploadCourseImage } from "../types";

export const createCourseImagePayload = (data: UploadCourseImage) => {
  const formData = new FormData();
  formData.append("tenKhoaHoc", data.tenKhoaHoc);
  formData.append("file", data.hinhAnh[0]);
  return formData;
};

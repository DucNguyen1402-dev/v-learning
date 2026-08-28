import { api } from "@shared/api";

export const uploadCourseImage = (data: FormData) =>
  api.post("/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc", data);

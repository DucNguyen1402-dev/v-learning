import { api } from "@shared/api";

type CancelCoursePayload = {
  maKhoaHoc: string;
  taiKhoan: string;
};

export const cancelCourse = async (payload: CancelCoursePayload) =>
  api.post(`/QuanLyKhoaHoc/HuyGhiDanh`, payload).then((res) => res.data);

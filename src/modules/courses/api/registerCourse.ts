import { api } from "@shared/api";

type RegisterCoursePayload = {
  maKhoaHoc: string;
  taiKhoan: string;
};

export const registerCourse = async (payload: RegisterCoursePayload) =>
  api.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, payload).then((res) => res.data);

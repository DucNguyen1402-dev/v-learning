import { api } from "@shared/api";

type EnrollUserPayload = {
  maKhoaHoc: string;
  taiKhoan: string;
};

export const enrollUser = async (payload: EnrollUserPayload) =>
  api.post(`/QuanLyKhoaHoc/GhiDanhKhoaHoc`, payload).then((res) => res.data);

import { api } from "@shared/api";

type EnrolledCourse = {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  biDanh: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  ngayTao: string;
  danhGia: number;
};

export type UserInforResponse = {
  hoTen: string;
  email: string;
  soDT: string;
  taiKhoan: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  chiTietKhoaHocGhiDanh: EnrolledCourse[];
  matKhau: string;
};

export const userInfor = async (): Promise<UserInforResponse> => {
  const response = await api.post("/QuanLyNguoiDung/ThongTinNguoiDung");
  return response.data;
};

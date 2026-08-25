import type { Course } from "../types";
export const EMPTY_COURSE: Course = {
  maKhoaHoc: "",
  biDanh: "",
  tenKhoaHoc: "",
  moTa: "",
  luotXem: 0,
  hinhAnh: "",
  maNhom: "",
  danhGia: 0,
  ngayTao: "",
  soLuongHocVien: 0,
  nguoiTao: {
    taiKhoan: "",
    hoTen: "",
    maLoaiNguoiDung: "",
    tenLoaiNguoiDung: "",
  },
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: "",
    tenDanhMucKhoaHoc: "",
  },
};

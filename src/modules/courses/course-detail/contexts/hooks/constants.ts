import type { CourseDetail } from "@modules/courses/course-detail/types";
export const EMPTY_COURSE_DETAIL: CourseDetail = {
  maKhoaHoc: "",
  biDanh: "",
  tenKhoaHoc: "",
  moTa: "",
  luotXem: 100,
  hinhAnh: "",
  maNhom: "",
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

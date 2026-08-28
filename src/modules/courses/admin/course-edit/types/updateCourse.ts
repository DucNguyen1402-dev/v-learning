export type UpdateCourse = {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  danhGia: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  maDanhMucKhoaHoc: string;
  taiKhoanNguoiTao: string;
};

// Only include fields that users can manually enter or edit.
// System/server-managed fields (e.g. maNhom, taiKhoanNguoiTao, ngayTao, maKhoaHoc, biDanh, danhGia, luotXem)
// are generated, updated, or handled internally and are excluded from the form.
export type UpdateCourseFormData = Pick<
  UpdateCourse,
  "tenKhoaHoc" | "moTa" | "maDanhMucKhoaHoc"
> & {
  hinhAnh: File | string;
};

export type AddCoursePayload = {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  danhGia: number;
  maNhom: string;
  ngayTao: string;
  maDanhMucKhoaHoc: string;
  taiKhoanNguoiTao: string;
};
export type UploadCourseImage = {
  hinhAnh: File[];
  tenKhoaHoc: string;
};

// Only include fields that users can manually enter or edit.
// System/server-managed fields (e.g. maNhom, taiKhoanNguoiTao, ngayTao, maKhoaHoc, biDanh, danhGia, luotXem)
// are generated, updated, or handled internally and are excluded from the form.
export type AddCourseFormData = Pick<
  AddCoursePayload,
  "tenKhoaHoc" | "moTa" | "maDanhMucKhoaHoc"
> & {
  hinhAnh: File[];
};

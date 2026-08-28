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
export type AddCourseFormData = Pick<
  AddCoursePayload,
  "tenKhoaHoc" | "moTa" | "maDanhMucKhoaHoc"
> & {
  hinhAnh: File[];
};

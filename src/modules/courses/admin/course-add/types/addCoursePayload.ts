export type AddCoursePayload = {
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

export type AddCourseFormData = Pick<
  AddCoursePayload,
  "tenKhoaHoc" | "moTa" | "maDanhMucKhoaHoc"
> & {
  hinhAnh: File[];
};

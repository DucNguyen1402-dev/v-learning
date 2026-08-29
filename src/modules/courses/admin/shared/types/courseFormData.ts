import type { CoursePayload } from "./coursePayload";

// Only include fields that users can manually enter or edit.
// System/server-managed fields (e.g. maNhom, taiKhoanNguoiTao, ngayTao, maKhoaHoc, biDanh, danhGia, luotXem)
// are generated, updated, or handled internally and are excluded from the form.
export type CourseFormData = Pick<
  CoursePayload,
  "tenKhoaHoc" | "moTa" | "maDanhMucKhoaHoc"
> & {
  hinhAnh: File[];
};

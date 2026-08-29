export interface Course {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  danhGia: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: {
    taiKhoan: string;
    hoTen: string;

    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
  };
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: string;
    tenDanhMucKhoaHoc: string;
  };
}

export interface EnrichedCourse extends Course {
  tenGiangVien: string;
  thumbnail: string;
}

export type DetailCourse = Pick<
  EnrichedCourse,
  | "maKhoaHoc"
  | "tenKhoaHoc"
  | "moTa"
  | "hinhAnh"
  | "ngayTao"
  | "soLuongHocVien"
  | "tenGiangVien"
> & {
  danhMucKhoaHoc: Pick<Course["danhMucKhoaHoc"], "tenDanhMucKhoaHoc">;
};

export interface PaginatedCourse {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: EnrichedCourse[];
}

export type PaginatedCourseItems = PaginatedCourse["items"];

export type CourseCardForm = EnrichedCourse | Course;

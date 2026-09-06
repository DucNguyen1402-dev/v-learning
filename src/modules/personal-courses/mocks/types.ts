import type { PersonalCourse } from "../types";

export type MockCourse = {
  tenDanhMucKhoaHoc: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  soLuongHocVien: number;
  ngayTao: string;
  thumbnail: string;
  tenGiangVien: string;
  danhGia: number;
  descriptionImage: string;
  baiHoc: {
    tongSoBaiHoc: number;
    daHoanThanh: number;
    chuaHoanThanh: number;
  };
  ngayDangKy: string;
  danhSachBaiHoc: {
    tenBaiHoc: string;
    thoiLuong: string;
    videoUrl: string;
  }[];
};

export type EnrichedPersonalCourse = PersonalCourse &
  Omit<MockCourse, "maDanhMucKhoahoc">;

export type DanhSachBaiHoc = EnrichedPersonalCourse["danhSachBaiHoc"];
export type BaiHoc = EnrichedPersonalCourse["baiHoc"];

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

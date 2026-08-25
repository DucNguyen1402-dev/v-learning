import {
  backendDescriptionImage,
  backendThumbnail,
  designDescriptionImage,
  designThumbnail,
  frontendDescriptionImage,
  frontendThumbnail,
  fullstackDescriptionImage,
  fullstackThumbnail,
  mindsetDescriptionImage,
  mindsetThumbnail,
  mobileDescriptionImage,
  mobileThumbnail,
} from "./images";
import type { MockCourse } from "./types";

export const mockCourses: MockCourse[] = [
  {
    tenDanhMucKhoaHoc: "Backend",
    tenKhoaHoc: "Lập Trình Backend Chuyên Nghiệp Với Node.js & Express",
    moTa: "Khóa học thiết kế chuyên sâu dành cho lập trình viên muốn làm chủ hệ thống từ gốc rễ. Bạn sẽ đi từ nền tảng kiến trúc backend vững chắc, thiết kế chuẩn RESTful API, tối ưu hóa hiệu năng cơ sở dữ liệu (MongoDB, PostgreSQL) cho đến kỹ năng triển khai (Deploy) ứng dụng thực tế lên Cloud. Trang bị năng lực tự tin đảm nhận các dự án quy mô lớn.",
    luotXem: 1250,
    soLuongHocVien: 45,
    ngayTao: "15/01/2026",
    thumbnail: backendThumbnail,
    tenGiangVien: "TS. Nguyễn Minh Anh",
    descriptionImage: backendDescriptionImage,
    danhGia: 4.5,
    baiHoc: {
      tongSoBaiHoc: 20,
      daHoanThanh: 10,
      chuaHoanThanh: 10,
    },
    ngayDangKy: "15/01/2026",
    danhSachBaiHoc: [
      {
        tenBaiHoc: "Giới thiệu về lập trình Backend",
        thoiLuong: "15 phút",
      },
      {
        tenBaiHoc: "Kiến trúc Backend vững chắc",
        thoiLuong: "20 phút",
      },
      {
        tenBaiHoc: "Thiết kế RESTful API chuẩn",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Tối ưu hóa hiệu năng cơ sở dữ liệu",
        thoiLuong: "30 phút",
      },
      {
        tenBaiHoc: "Triển khai ứng dụng lên Cloud",
        thoiLuong: "35 phút",
      },
      {
        tenBaiHoc: "Đánh giá và cải thiện kỹ năng lập trình Backend",
        thoiLuong: "20 phút",
      },
    ],
  },

  {
    tenDanhMucKhoaHoc: "Frontend",
    tenKhoaHoc: "Lập Trình Frontend Chuyên Nghiệp Với React & TypeScript",
    moTa: "Khóa học chuyên sâu trang bị cho bạn tư duy thiết kế theo hướng hợp phần (Component-driven) chuẩn mực, kỹ năng quản lý trạng thái ứng dụng thông minh, tối ưu hóa trải nghiệm và hiệu năng UI/UX đỉnh cao, cùng khả năng tích hợp RESTful API mượt mà. Xây dựng nền tảng vững chắc để tự tin kiến tạo những giao diện quy mô lớn, chuyên nghiệp và có tính mở rộng cao.",
    luotXem: 1850,
    soLuongHocVien: 68,
    ngayTao: "15/01/2026",
    thumbnail: frontendThumbnail,
    tenGiangVien: "ThS. Trần Quốc Bảo",
    danhGia: 4.7,
    descriptionImage: frontendDescriptionImage,
    baiHoc: {
      tongSoBaiHoc: 25,
      daHoanThanh: 15,
      chuaHoanThanh: 10,
    },
    ngayDangKy: "15/01/2026",
    danhSachBaiHoc: [
      {
        tenBaiHoc: "Giới thiệu về lập trình Frontend",
        thoiLuong: "15 phút",
      },
      {
        tenBaiHoc: "Thiết kế giao diện theo hướng hợp phần",
        thoiLuong: "20 phút",
      },
      {
        tenBaiHoc: "Quản lý trạng thái ứng dụng thông minh",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Tối ưu hóa trải nghiệm và hiệu năng UI/UX",
        thoiLuong: "30 phút",
      },
      {
        tenBaiHoc: "Tích hợp RESTful API mượt mà",
        thoiLuong: "35 phút",
      },
      {
        tenBaiHoc: "Thực hành dự án Frontend thực tế",
        thoiLuong: "40 phút",
      },
      {
        tenBaiHoc: "Đánh giá và cải thiện kỹ năng lập trình Frontend",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Kết luận và tổng kết khóa học",
        thoiLuong: "10 phút",
      },
    ],
  },
  {
    tenDanhMucKhoaHoc: "Mobile",
    tenKhoaHoc: "Lập Trình mobile Đa Nền Tảng Chuyên Nghiệp Với React Native",
    moTa: "Khóa học thiết kế chuyên sâu giúp bạn làm chủ kiến trúc mobile từ gốc rễ, thành thạo kỹ năng quản lý trạng thái, tối ưu hóa giao diện UI/UX mượt mà trên đa thiết bị, cho đến quy trình đóng gói và phát hành ứng dụng chuyên nghiệp lên App Store và Google Play. Sẵn sàng đưa sản phẩm của bạn tiếp cận hàng triệu người dùng.",
    luotXem: 1420,
    soLuongHocVien: 52,
    ngayTao: "15/01/2026",
    thumbnail: mobileThumbnail,
    tenGiangVien: "ThS. Lê Thị Thanh Hương",
    danhGia: 4.6,
    descriptionImage: mobileDescriptionImage,
    baiHoc: {
      tongSoBaiHoc: 18,
      daHoanThanh: 8,
      chuaHoanThanh: 10,
    },
    ngayDangKy: "15/01/2026",
    danhSachBaiHoc: [
      {
        tenBaiHoc: "Giới thiệu về lập trình mobile đa nền tảng",
        thoiLuong: "15 phút",
      },
      {
        tenBaiHoc: "Thiết kế giao diện UI/UX mượt mà",
        thoiLuong: "20 phút",
      },
      {
        tenBaiHoc: "Quản lý trạng thái ứng dụng thông minh",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Tối ưu hóa hiệu năng và trải nghiệm người dùng",
        thoiLuong: "30 phút",
      },
      {
        tenBaiHoc:
          "Đóng gói và phát hành ứng dụng lên App Store và Google Play",
        thoiLuong: "35 phút",
      },
      {
        tenBaiHoc: "Thực hành dự án mobile thực tế",
        thoiLuong: "40 phút",
      },
      {
        tenBaiHoc: "Đánh giá và cải thiện kỹ năng lập trình mobile",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Kết luận và tổng kết khóa học",
        thoiLuong: "10 phút",
      },
    ],
  },
  {
    tenDanhMucKhoaHoc: "Design",
    tenKhoaHoc: "Thiết Kế Giao Diện UI/UX Chuyên Nghiệp Với Figma",
    moTa: "Khóa học chuyên sâu trang bị cho bạn tư duy thiết kế sản phẩm số toàn diện từ cơ bản đến nâng cao. Bạn sẽ làm chủ quy trình xây dựng Design System đồng bộ, thành thạo việc phác thảo Wireframe, Prototype trực quan, cũng như tối ưu hóa quy trình handoff mượt mà để kết nối hoàn hảo với đội ngũ Developer. Nâng tầm tư duy thiết kế và hiện thực hóa mọi ý tưởng sản phẩm chuẩn chỉnh.",
    luotXem: 1680,
    soLuongHocVien: 60,
    ngayTao: "15/01/2026",
    thumbnail: designThumbnail,
    tenGiangVien: "ThS. Phạm Thị Ngọc Lan",
    danhGia: 4.8,
    descriptionImage: designDescriptionImage,
    baiHoc: {
      tongSoBaiHoc: 22,
      daHoanThanh: 12,
      chuaHoanThanh: 10,
    },
    ngayDangKy: "15/01/2026",

    danhSachBaiHoc: [
      {
        tenBaiHoc: "Giới thiệu về UI/UX và Figma",
        thoiLuong: "15 phút",
      },
      {
        tenBaiHoc: "Nguyên tắc thiết kế giao diện người dùng",
        thoiLuong: "20 phút",
      },
      {
        tenBaiHoc: "Thiết kế Wireframe và Prototype",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Xây dựng Design System đồng bộ",
        thoiLuong: "30 phút",
      },
      {
        tenBaiHoc: "Tối ưu hóa quy trình handoff cho Developer",
        thoiLuong: "20 phút",
      },
      {
        tenBaiHoc: "Thực hành dự án thiết kế giao diện thực tế",
        thoiLuong: "40 phút",
      },
      {
        tenBaiHoc: "Đánh giá và cải thiện trải nghiệm người dùng",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Xu hướng thiết kế UI/UX hiện đại",
        thoiLuong: "15 phút",
      },
      {
        tenBaiHoc: "Kết luận và tổng kết khóa học",
        thoiLuong: "10 phút",
      },
    ],
  },
  {
    tenDanhMucKhoaHoc: "Mindset",
    tenKhoaHoc: "Tư Duy Lập Trình Web & Nền Tảng Khoa Học Máy Tính",
    moTa: "Khóa học chuyên sâu rèn luyện tư duy thuật toán sắc bén, cấu trúc dữ liệu nền tảng, cùng phương pháp tiếp cận theo nguyên lý First Principles. Giúp bạn thấu hiểu tận cùng cốt lõi vấn đề, tự tin giải quyết các bài toán hệ thống phức tạp và làm chủ hoàn toàn logic lập trình web một cách vững chắc nhất.",
    luotXem: 2100,
    soLuongHocVien: 85,
    ngayTao: "15/01/2026",
    thumbnail: mindsetThumbnail,
    tenGiangVien: "TS. Nguyễn Văn Hùng",
    danhGia: 4.9,
    descriptionImage: mindsetDescriptionImage,
    baiHoc: {
      tongSoBaiHoc: 30,
      daHoanThanh: 20,
      chuaHoanThanh: 10,
    },
    ngayDangKy: "15/01/2026",
    danhSachBaiHoc: [
      {
        tenBaiHoc: "Giới thiệu về tư duy lập trình",
        thoiLuong: "15 phút",
      },
      {
        tenBaiHoc: "Nguyên tắc First Principles",
        thoiLuong: "20 phút",
      },
      {
        tenBaiHoc: "Cấu trúc dữ liệu nền tảng",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Thuật toán cơ bản",
        thoiLuong: "30 phút",
      },
      {
        tenBaiHoc: "Giải quyết bài toán hệ thống phức tạp",
        thoiLuong: "40 phút",
      },
      {
        tenBaiHoc: "Lập trình web nâng cao",
        thoiLuong: "35 phút",
      },
      {
        tenBaiHoc: "Thực hành dự án thực tế",
        thoiLuong: "50 phút",
      },
      {
        tenBaiHoc: "Đánh giá và cải thiện kỹ năng",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Kết luận và tổng kết khóa học",
        thoiLuong: "10 phút",
      },
    ],
  },
  {
    tenDanhMucKhoaHoc: "Fullstack",
    tenKhoaHoc: "Lập Trình Fullstack Web Developer Chuyên Nghiệp",
    moTa: "Khóa học tích hợp toàn diện từ thiết kế giao diện Frontend tối ưu đến xây dựng hệ thống Backend hoàn chỉnh, quản lý cơ sở dữ liệu và quy trình CI/CD triển khai sản phẩm thực tế.",
    luotXem: 2450,
    soLuongHocVien: 92,
    ngayTao: "15/01/2026",
    thumbnail: fullstackThumbnail,
    tenGiangVien: "ThS. Trần Minh Tuấn",
    danhGia: 4.9,
    descriptionImage: fullstackDescriptionImage,
    baiHoc: {
      tongSoBaiHoc: 40,
      daHoanThanh: 25,
      chuaHoanThanh: 15,
    },
    ngayDangKy: "15/01/2026",
    danhSachBaiHoc: [
      {
        tenBaiHoc: "Giới thiệu về lập trình Fullstack",
        thoiLuong: "15 phút",
      },
      {
        tenBaiHoc: "Thiết kế giao diện Frontend",
        thoiLuong: "30 phút",
      },
      {
        tenBaiHoc: "Xây dựng hệ thống Backend",
        thoiLuong: "40 phút",
      },
      {
        tenBaiHoc: "Quản lý cơ sở dữ liệu",
        thoiLuong: "25 phút",
      },
      {
        tenBaiHoc: "Triển khai sản phẩm thực tế với CI/CD",
        thoiLuong: "35 phút",
      },
    ],
  },
];

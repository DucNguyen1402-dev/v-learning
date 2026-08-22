const course = {
  maKhoaHoc: "KH001",
  biDanh: "reactjs-chuyen-sau",
  tenKhoaHoc: "ReactJS Từ Cơ Bản Đến Nâng Cao",
  moTa: "Khóa học cung cấp kiến thức toàn diện về ReactJS, từ các khái niệm cốt lõi như Component, Props, State đến Hooks nâng cao, quản lý state và xây dựng ứng dụng thực tế với hiệu suất cao.",
  luotXem: 1250,
  danhGia: 4.8,
  hinhAnh: "https://picsum.photos/800/400",
  maNhom: "GP01",
  ngayTao: "15/05/2026",
  soLuongHocVien: 320,
  tenGiangVien: "CyberSoft Academy",
  nguoiTao: {
    taiKhoan: "admin_elearning",
    hoTen: "Nguyễn Văn Admin",
    maLoaiNguoiDung: "GV",
    tenLoaiNguoiDung: "Giáo vụ",
  },
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: "FrontEnd",
    tenDanhMucKhoaHoc: "Lập trình Front-End",
  },
};

export const CourseDetail = () => {
  return (
    <div className="mx-auto max-w-3xl bg-white p-6 font-sans">
      {/* Tiêu đề khóa học */}
      <h1 className="mb-2 text-2xl font-bold text-gray-900">
        {course.tenKhoaHoc}
      </h1>
      <p className="mb-4 text-sm text-gray-500">
        Danh mục:{" "}
        <strong className="text-gray-700">
          {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
        </strong>{" "}
        | Ngày tạo: {course.ngayTao}
      </p>

      {/* Hình ảnh khóa học */}
      <img
        src={course.hinhAnh}
        alt={course.tenKhoaHoc}
        className="mb-6 h-80 w-full rounded-xl object-cover shadow-sm"
      />

      {/* Thông tin chi tiết dạng lưới */}
      <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
        <div>
          <span className="block text-xs text-gray-500">Giảng viên</span>
          <p className="mt-1 font-semibold text-gray-800">
            {course.tenGiangVien || course.nguoiTao.hoTen}
          </p>
        </div>
        <div>
          <span className="block text-xs text-gray-500">Học viên</span>
          <p className="mt-1 font-semibold text-gray-800">
            {course.soLuongHocVien} học viên
          </p>
        </div>
        <div>
          <span className="block text-xs text-gray-500">
            Lượt xem / Đánh giá
          </span>
          <p className="mt-1 font-semibold text-gray-800">
            👁️ {course.luotXem} | ⭐ {course.danhGia}
          </p>
        </div>
      </div>

      {/* Mô tả khóa học */}
      <div className="mb-6">
        <h3 className="mb-3 border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
          Mô tả khóa học
        </h3>
        <p className="leading-relaxed text-gray-600">{course.moTa}</p>
      </div>

      {/* Thông tin người tạo */}
      <div className="rounded-xl bg-gray-100 p-4 text-sm text-gray-700">
        Người tạo:{" "}
        <strong className="text-gray-900">{course.nguoiTao.hoTen}</strong> (
        {course.nguoiTao.tenLoaiNguoiDung})
      </div>
    </div>
  );
};

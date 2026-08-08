const AboutPage = () => {
  return (
    <div className="min-h-screen font-sans text-neutral-100">
      {/* 2. Hero Section */}
      <section className="mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
            Về V-learning
          </span>
          <h1 className="mt-3 mb-4 text-3xl leading-tight font-bold text-white sm:text-5xl">
            Tái định hình cách kỹ sư học lập trình.
          </h1>
          <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
            Nền tảng tập trung truyền tải tư duy First Principles – giải mã bản
            chất kĩ thuật thay vì chỉ làm theo mẫu.
          </p>
        </div>
      </section>

      {/* 3. Grid 2 Cột: Sứ mệnh & Tầm nhìn */}
      <section className="border-y border-neutral-800 bg-neutral-900/20 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
            <span className="font-mono text-xs text-neutral-500 uppercase">
              Sứ mệnh
            </span>
            <h3 className="mt-2 mb-2 text-xl font-semibold text-white">
              Xóa bỏ tư duy chép code
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Giúp học viên làm chủ nền tảng cốt lõi để tự tin xử lý mọi bài
              toán kĩ thuật phức tạp.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
            <span className="font-mono text-xs text-neutral-500 uppercase">
              Tầm nhìn
            </span>
            <h3 className="mt-2 mb-2 text-xl font-semibold text-white">
              Chuẩn mực chất lượng cao
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Trở thành điểm đến hàng đầu cho lập trình viên muốn nâng tầm kiến
              trúc phần mềm.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Grid 4 Cột: Giá trị cốt lõi */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Giá trị cốt lõi</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              title: "First Principles",
              desc: "Hiểu rõ nguyên lý hoạt động từ gốc rễ.",
            },
            {
              title: "Tư duy Hệ thống",
              desc: "Tối ưu hiệu năng và khả năng mở rộng.",
            },
            {
              title: "Thực chiến",
              desc: "Học qua các dự án sản phẩm thực tế.",
            },
            {
              title: "Cộng đồng",
              desc: "Kết nối trực tiếp cùng các Senior Engineers.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-800/80 bg-neutral-900/10 p-5 transition-colors hover:border-neutral-700"
            >
              <div className="mb-3 font-mono text-xs text-neutral-500">
                0{index + 1}
              </div>
              <h4 className="mb-1.5 text-base font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-xs leading-relaxed text-neutral-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Grid 3 Cột: Đội ngũ Giảng viên */}
      <section className="border-t border-neutral-800 bg-neutral-900/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Đội ngũ giảng viên
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { name: "Hoàng Minh", role: "Fullstack Instructor" },
              { name: "Quốc Bảo", role: "Frontend Architect" },
              { name: "Phương Thảo", role: "Backend & Distributed Systems" },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 font-bold text-neutral-400">
                  {member.name[0]}
                </div>
                <h4 className="font-semibold text-white">{member.name}</h4>
                <p className="mt-1 font-mono text-xs text-neutral-500">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Minimal Block */}
      <section className="border-t border-neutral-800 py-16 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="mb-3 text-2xl font-bold text-white">
            Bắt đầu hành trình ngay
          </h2>
          <p className="mb-6 text-sm text-neutral-400">
            Trải nghiệm phương pháp học tư duy hệ thống cùng V-learning.
          </p>
          <a
            href="#courses"
            className="inline-block rounded-md bg-white px-6 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            Khám phá khóa học
          </a>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="border-t border-neutral-800 px-6 py-8 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} V-learning. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutPage;

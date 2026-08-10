export const BlogsPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 font-sans text-neutral-900 selection:bg-neutral-200 selection:text-neutral-900">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-neutral-900"
          >
            V-learning<span className="text-neutral-400">.</span>
          </a>
          <nav className="hidden gap-6 text-sm text-neutral-600 sm:flex">
            <a
              href="#courses"
              className="transition-colors hover:text-neutral-900"
            >
              Khóa học
            </a>
            <a href="#blogs" className="font-medium text-neutral-900">
              Bài viết
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-neutral-900"
            >
              Giới thiệu
            </a>
          </nav>
          <a
            href="#profile"
            className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Tài khoản
          </a>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="mx-auto w-full max-w-6xl flex-1 space-y-12 px-6 py-10">
        {/* Title Header */}
        <div className="max-w-xl">
          <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
            Góc chia sẻ
          </span>
          <h1 className="mt-2 mb-3 text-3xl font-bold text-neutral-900">
            Bài viết & Góc nhìn kiến trúc
          </h1>
          <p className="text-sm leading-relaxed text-neutral-600">
            Tổng hợp kinh nghiệm, tư duy First Principles và các kỹ thuật thực
            chiến trong lập trình ứng dụng.
          </p>
        </div>

        {/* Featured Post (Big Card) */}
        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 md:p-8">
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-neutral-700">
              System Architecture
            </span>
            <span>10 Tháng 8, 2026</span>
            <span>•</span>
            <span>8 phút đọc</span>
          </div>

          <h2 className="cursor-pointer text-2xl font-bold text-neutral-900 hover:underline">
            Tư duy First Principles trong việc refactor hệ thống Frontend phức
            tạp
          </h2>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
            Tại sao việc hiểu rõ cơ chế bên dưới lại quan trọng hơn việc đổi
            framework? Bài viết phân tích cách chia nhỏ bài toán state
            management và tối ưu hóa luồng dữ liệu từ gốc rễ.
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 font-bold text-neutral-600">
              DN
            </div>
            <span className="font-medium text-neutral-800">Duc Nguyen</span>
          </div>
        </section>

        {/* Blog Posts Grid (3 Columns) */}
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title:
                "Hiểu sâu về Event Loop và Microtask Queue trong JavaScript",
              category: "JavaScript Core",
              date: "02 Tháng 8, 2026",
              time: "5 phút đọc",
              desc: "Phân tích cách Call Stack tương tác với Web APIs và cách JS xử lý bất đồng bộ.",
            },
            {
              title: "Xây dựng Custom Dispatch Handler gọn gàng với TypeScript",
              category: "TypeScript",
              date: "25 Tháng 7, 2026",
              time: "6 phút đọc",
              desc: "Tối ưu hóa các handler xử lý hành động người dùng mà vẫn đảm bảo Type-Safety.",
            },
            {
              title: "Tailwind CSS v4: Những thay đổi đáng chú ý về Engine",
              category: "UI Workflow",
              date: "18 Tháng 7, 2026",
              time: "4 phút đọc",
              desc: "Cấu hình trực tiếp trong CSS mà không cần file tailwind.config.js.",
            },
            {
              title: "Clean Code: Ranh giới giữa tối giản và thiếu thông tin",
              category: "Best Practices",
              date: "10 Tháng 7, 2026",
              time: "7 phút đọc",
              desc: "Viết code cho người đọc thay vì viết code chỉ để máy hiểu.",
            },
            {
              title: "Tự thiết kế State Manager đơn giản không phụ thuộc Redux",
              category: "Architecture",
              date: "01 Tháng 7, 2026",
              time: "10 phút đọc",
              desc: "Ứng dụng pattern Pub/Sub để quản lý trạng thái ứng dụng nhẹ nhàng.",
            },
            {
              title: "Tối ưu hiệu năng Render trong ứng dụng React lớn",
              category: "React",
              date: "20 Tháng 6, 2026",
              time: "6 phút đọc",
              desc: "Tránh re-render thừa mà không cần lạm dụng useMemo hay useCallback.",
            },
          ].map((post, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500">
                  <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-neutral-700">
                    {post.category}
                  </span>
                  <span>{post.time}</span>
                </div>

                <h3 className="cursor-pointer text-base leading-snug font-semibold text-neutral-900 hover:underline">
                  {post.title}
                </h3>

                <p className="text-xs leading-relaxed text-neutral-600">
                  {post.desc}
                </p>
              </div>

              <div className="mt-4 border-t border-neutral-100 pt-4 text-[11px] text-neutral-400">
                {post.date}
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* 3. Footer */}
      <footer className="border-t border-neutral-200/80 px-6 py-6 text-center text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} V-learning. Mọi quyền được bảo lưu.
      </footer>
    </div>
  );
};

import { useScrollOnRouteChange } from "@shared/navigation";

export const PasswordResetPage = () => {
  const { scrollRef } = useScrollOnRouteChange();
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 font-sans text-neutral-900 selection:bg-neutral-200 selection:text-neutral-900">
      {/* 2. Main Content - Centered Card */}
      <main
        ref={scrollRef}
        className="flex flex-1 scroll-target items-center justify-center px-6 py-12"
      >
        <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-6 shadow-xs sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-neutral-900">
              Đặt lại mật khẩu
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">
              Nhập email của bạn. Chúng tôi sẽ gửi liên kết để khôi phục mật
              khẩu.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-neutral-700">
                Địa chỉ Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-400 focus:bg-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Gửi liên kết khôi phục
            </button>
          </form>

          <div className="mt-6 border-t border-neutral-100 pt-4 text-center">
            <a
              href="#login"
              className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              &larr; Quay lại trang đăng nhập
            </a>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="border-t border-neutral-200/80 px-6 py-6 text-center text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} V-learning. Mọi quyền được bảo lưu.
      </footer>
    </div>
  );
};

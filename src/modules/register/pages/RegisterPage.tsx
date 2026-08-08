import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useScrollOnRouteChange } from "@shared/navigation";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const { scrollRef } = useScrollOnRouteChange({
    block: "center",
    behavior: "smooth",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handling registration logic
    console.log("Registering:", formData);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-950 font-sans text-neutral-100 selection:bg-neutral-800 selection:text-white">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-neutral-950/80 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight text-white">
            V-learning<span className="text-neutral-500">.</span>
          </a>
          <div className="text-xs text-neutral-400">
            Đã có tài khoản?{" "}
            <Link
              to="/client/login"
              className="font-medium text-white hover:underline"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Main Content - Split Layout / Centered Card */}
      <main
        ref={scrollRef}
        className="flex flex-1 scroll-target items-center justify-center px-6 py-12"
      >
        <div className="grid w-full max-w-4xl items-center gap-8 md:grid-cols-2">
          {/* Left Column: Brand Value / Info */}
          <div className="hidden pr-6 md:block">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              Tham gia V-learning
            </span>
            <h1 className="mt-3 mb-4 text-3xl leading-tight font-bold text-white lg:text-4xl">
              Bắt đầu hành trình làm chủ tư duy lập trình.
            </h1>
            <p className="mb-6 text-sm leading-relaxed text-neutral-400">
              Tạo tài khoản để tiếp cận các lộ trình học First Principles, hệ
              thống bài tập thực chiến và cộng đồng kỹ sư chất lượng.
            </p>

            <div className="space-y-3 border-t border-neutral-800/80 pt-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Không yêu cầu thẻ tín dụng khi bắt đầu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Truy cập kho bài học cơ bản miễn phí</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Thực hành trực tiếp trên trình duyệt</span>
              </div>
            </div>
          </div>

          {/* Right Column: Register Form */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold tracking-tight text-white">
                Tạo tài khoản mới
              </h2>
              <p className="mt-1 text-xs text-neutral-400">
                Nhập thông tin cá nhân của bạn để tiếp tục
              </p>
            </div>

            {/* Social Registration */}
            <div className="mb-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-xs font-medium text-neutral-300 transition-colors hover:bg-neutral-800"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-xs font-medium text-neutral-300 transition-colors hover:bg-neutral-800"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12s.7 2.3 1.9 4.7l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
                  />
                </svg>
                Google
              </button>
            </div>

            <div className="relative my-5 flex items-center justify-center">
              <hr className="w-full border-neutral-800" />
              <span className="absolute bg-neutral-950 px-2 font-mono text-[10px] text-neutral-500 uppercase">
                hoặc dùng email
              </span>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Nguyễn Văn A"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 transition-colors focus:border-neutral-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                  Địa chỉ Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 transition-colors focus:border-neutral-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Tối thiểu 8 ký tự"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 transition-colors focus:border-neutral-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 transition-colors focus:border-neutral-600 focus:outline-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-0.5 rounded border-neutral-800 bg-neutral-950 text-white focus:ring-0"
                />
                <label
                  htmlFor="agreeTerms"
                  className="text-[11px] leading-tight text-neutral-400"
                >
                  Tôi đồng ý với{" "}
                  <a
                    href="#terms"
                    className="text-neutral-300 underline hover:text-white"
                  >
                    Điều khoản dịch vụ
                  </a>{" "}
                  và{" "}
                  <a
                    href="#privacy"
                    className="text-neutral-300 underline hover:text-white"
                  >
                    Chính sách bảo mật
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-white px-4 py-2.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                Đăng ký tài khoản
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="border-t border-neutral-800/80 px-6 py-6 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} V-learning. Mọi quyền được bảo lưu.
      </footer>
    </div>
  );
};

export default RegisterPage;

import { useState } from "react";

export const UserPaymentInfo = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  const [userInfo, setUserInfo] = useState({
    fullName: "Nguyễn Văn A",
    email: "",
    phone: "",
  });
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        1. Thông tin tài khoản
      </h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="fullName"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Họ và tên
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={userInfo.fullName}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Email nhận khóa học
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Số điện thoại
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

import { FormLabel, Input } from "@shared/fields";

const LoginForm = () => {
  return (
    <form className="space-y-4" noValidate>
      <div className="flex flex-col gap-3">
        <FormLabel htmlFor="email">TÀI KHOẢN</FormLabel>
        <input
          type="email"
          id="email"
          name="email"

          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none`}
        />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <FormLabel htmlFor="password">MẬT KHẨU</FormLabel>
          <a
            href="#"
            className="text-xs text-stone-500 transition-colors hover:text-stone-900"
          >
            Quên mật khẩu?
          </a>
        </div>
        <div className="relative">
          <input
            id="password"
            name="password"

            placeholder="••••••••"
            className={`w-full rounded-lg border px-3.5 py-2.5 pr-10 text-sm transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none`}
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

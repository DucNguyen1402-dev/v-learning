const LoginForm = () => {
  return (
    <form className="space-y-4" noValidate>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-semibold tracking-wider text-stone-600 uppercase"
        >
          Email hoặc tài khoản
        </label>
        <input
          type="email"
          id="email"
          name="email"

          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm transition-all placeholder:text-stone-400 focus:ring-2 focus:outline-none`}
        />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-xs font-semibold tracking-wider text-stone-600 uppercase"
          >
            Mật khẩu
          </label>
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

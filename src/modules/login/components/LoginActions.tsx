import { LoginButton } from "@/shared/ui";

const LoginActions = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center pt-1">
        <input
          type="checkbox"
          id="remember"
          name="remember"

          className="h-4 w-4 rounded border-slate-300 text-slate-900 accent-slate-900 focus:ring-slate-900"
        />
        <label
          htmlFor="remember"
          className="ml-2 cursor-pointer text-sm text-slate-600 select-none"
        >
          Ghi nhớ đăng nhập
        </label>
      </div>
      <LoginButton type="button">Đăng nhập</LoginButton>
    </div>
  );
};

export default LoginActions;

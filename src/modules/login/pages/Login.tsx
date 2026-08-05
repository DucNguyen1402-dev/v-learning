import {
  LoginActions,
  LoginFooter,
  LoginForm,
  LoginHeader,
} from "@modules/login/components";

const Login = () => {
  return (
    <div className="flex-center min-h-screen bg-slate-100 p-4">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-xl border border-slate-300 bg-slate-50 p-8 shadow-sm">
        <LoginHeader />

        <div className="mt-5">
          <LoginForm />
        </div>

        <div className="mt-2">
          <LoginActions />
        </div>

        <div className="mt-2">
          <LoginFooter />
        </div>
      </div>
    </div>
  );
};

export default Login;

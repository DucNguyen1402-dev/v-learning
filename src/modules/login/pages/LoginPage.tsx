import {
  LoginActions,
  LoginFooter,
  LoginForm,
  LoginHeader,
} from "@modules/login/components";

const LoginPage = () => {
  return (
    <div className="relative flex-center min-h-screen p-4">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-xl border border-border-secondary bg-bg-secondary p-8 shadow-sm">
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

export default LoginPage;

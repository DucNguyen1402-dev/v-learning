import {
  LoginActions,
  LoginFooter,
  LoginForm,
  LoginHeader,
} from "@modules/login/components";
import { useScrollOnRouteChange } from "@shared/navigation";

const LoginPage = () => {
  const { scrollRef } = useScrollOnRouteChange({
    block: "center",
    behavior: "smooth",
  });
  return (
    <div className="flex-center min-h-screen scroll-target p-4" ref={scrollRef}>
      <div className="flex w-full max-w-md flex-col gap-6 rounded-xl border border-border-secondary bg-surface-1 p-8 shadow-sm">
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

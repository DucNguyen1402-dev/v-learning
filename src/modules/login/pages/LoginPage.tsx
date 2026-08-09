import {
  LoginActions,
  LoginFooter,
  LoginForm,
  LoginHeader,
} from "@modules/login/components";
import { useScrollOnRouteChange } from "@shared/navigation";

export const LoginPage = () => {
  const { scrollRef } = useScrollOnRouteChange();
  return (
    <div className="flex-center min-h-screen p-4">
      <div
        className="flex w-full max-w-md scroll-target flex-col gap-6 rounded-xl bg-surface-1 p-8 shadow-sm border-secondary"
        ref={scrollRef}
      >
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

import { Navigation } from "@shared/navigation";

import { RegisterForm } from "../components";

export const RegisterPage = () => {
  const { scrollRef } = Navigation.useScrollOnRouteChange();

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-950 font-sans text-neutral-100 selection:bg-neutral-800 selection:text-white">
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="grid w-full max-w-4xl items-center gap-8 md:grid-cols-2">
          <RegisterForm scrollRef={scrollRef} />
        </div>
      </div>
    </div>
  );
};

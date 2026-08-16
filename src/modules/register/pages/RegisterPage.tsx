import { Navigation } from "@shared/navigation";

import { BrandValueSection, RegisterForm } from "../components";

export const RegisterPage = () => {
  const { scrollRef } = Navigation.useScrollOnRouteChange();

  return (
    <div className="grid min-h-screen items-center gap-4 px-3 md:grid-cols-2 lg:gap-8 lg:px-8">
      <BrandValueSection />
      <div className="flex-center">
        <RegisterForm scrollRef={scrollRef} />
      </div>
    </div>
  );
};

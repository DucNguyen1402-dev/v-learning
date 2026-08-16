import type { RefObject } from "react";

import { RegisterFields } from "./RegisterFields";
import { RegisterFooter } from "./RegisterFooter";
import { RegisterFormActions } from "./RegisterFormActions";
import { RegisterFormHeader } from "./RegisterFormHeader";

type RegisterFormProps = {
  scrollRef: RefObject<HTMLDivElement | null>;
};
export const RegisterForm = ({ scrollRef }: RegisterFormProps) => {
  return (
    <div
      ref={scrollRef}
      className="flex w-full max-w-md scroll-target flex-col gap-6 overflow-hidden rounded-surface border border-border-subtle bg-bg-default pb-4"
    >
      <RegisterFormHeader />

      <div className="flex flex-col gap-16 p-5 lg:p-8">
        <RegisterFields />
        <RegisterFormActions />
      </div>
      <RegisterFooter />
    </div>
  );
};

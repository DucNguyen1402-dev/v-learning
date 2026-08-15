import type { RefObject } from "react";

import { RegisterFields } from "./RegisterFields";
import { RegisterFormActions } from "./RegisterFormActions";
import { RegisterFormHeader } from "./RegisterFormHeader";

type RegisterFormProps = {
  scrollRef: RefObject<HTMLDivElement>;
};
export const RegisterForm = ({ scrollRef }: RegisterFormProps) => {
  return (
    <div
      ref={scrollRef}
      className="scroll-target rounded-surface border border-border-subtle bg-bg-default p-6"
    >
      <RegisterFormHeader />

      <div className="flex flex-col gap-6">
        <RegisterFields />
        <RegisterFormActions />
      </div>
    </div>
  );
};

import { Field, Textarea } from "@shared/fields";

export const Playground = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center gap-2">
      <Field.Root>
        <Field.Label target="date-input-field" required text="Ngày sinh" />
        <Textarea />
      </Field.Root>
    </div>
  );
};

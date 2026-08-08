import type { ComponentPropsWithoutRef } from "react";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from "react-hook-form";

import { Checkbox } from "./Checkbox";

type CheckboxFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: React.ReactNode;
} & Omit<
  ComponentPropsWithoutRef<typeof Checkbox>,
  "checked" | "onCheckedChange"
>;

export const CheckboxField = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  ...props
}: CheckboxFieldProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, ref, value, onChange } }) => (
        <Checkbox
          name={name}
          ref={ref}
          checked={!!value}
          onCheckedChange={onChange}
          {...props}
        >
          {label}
        </Checkbox>
      )}
    />
  );
};

CheckboxField.displayName = "CheckboxField";

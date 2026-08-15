import type {
  Control,
  ControllerProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { Controller as ReactHookFormController } from "react-hook-form";

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control: Control<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, TName>;
  children: ControllerProps<TFieldValues, TName>["render"];
};
export const Controller = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  children,
}: Props<TFieldValues, TName>) => {
  return (
    <ReactHookFormController
      name={name}
      control={control}
      rules={rules}
      render={children}
    />
  );
};

import { useForm } from "react-hook-form";

import { CheckboxField } from "@shared/fields";
import { LoginButton } from "@shared/ui";

const LoginActions = () => {
  const { control } = useForm();
  return (
    <div className="flex flex-col gap-8">
      <CheckboxField
        id="remember"
        name="remember"
        label="Ghi nhớ đăng nhập"
        control={control}
        checkboxClassName="w-4 h-4"
        labelClassName="text-sm"
      />
      <LoginButton type="button">ĐĂNG NHẬP</LoginButton>
    </div>
  );
};

export default LoginActions;

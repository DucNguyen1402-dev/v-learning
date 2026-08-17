import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type SyntheticEvent,
} from "react";

import { cn } from "@shared/utils";

import { useTextArea } from "./useTextArea";
type TextareaProps = Omit<ComponentPropsWithoutRef<"textarea">, "onInput"> & {
  invalid?: boolean;
  resizeKey?: string;
  inputRef?: React.Ref<HTMLTextAreaElement>;
  onInput?: (e: SyntheticEvent<HTMLTextAreaElement>) => void;
};
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      invalid = false,
      id = null,
      resizeKey,
      inputRef,
      onInput,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const { handleInput, setRef } = useTextArea({
      resizeKey,
      ref,
      inputRef,
      onInput,
    });
    return (
      <textarea
        onInput={handleInput}
        ref={setRef}
        disabled={disabled}
        id={id ?? props.name}
        {...props}
        className={cn("field-base textarea", {
          "field-disabled": disabled,
          "field-invalid": !disabled && invalid,
        })}
      />
    );
  },
);
Textarea.displayName = "Textarea";

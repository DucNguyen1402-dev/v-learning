import { type SyntheticEvent, useLayoutEffect, useMemo, useRef } from "react";

import { mergeRefs } from "@shared/utils";

export const useTextArea = ({
  resizeKey,
  ref,
  inputRef,
  onInput,
}: {
  resizeKey?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
  inputRef?: React.Ref<HTMLTextAreaElement>;
  onInput?: (e: SyntheticEvent<HTMLTextAreaElement>) => void;
}) => {
  const innerRef = useRef(null);

  const handleInput = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    setSize(e.currentTarget);
    onInput?.(e);
  };
  const setSize = (el: HTMLTextAreaElement) => {
    el.style.height = "0px";
    el.style.height = `${el.scrollHeight}px`;
  };

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    setSize(el);
  }, [resizeKey]);

  // setRef shared textareaElement to all ref in the merge list
  const setRef = useMemo(
    // eslint-disable-next-line react-hooks/refs
    () => mergeRefs(innerRef, ref, inputRef),
    [ref, inputRef],
  );

  return {
    handleInput,
    setRef,
    innerRef,
  };
};

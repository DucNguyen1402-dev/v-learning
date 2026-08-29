type DisplayState = "disabled" | "selecting" | "selected" | "default";
export const displayState = <T>({
  disabled,
  selecting,
  selected,
}: {
  disabled: boolean;
  selecting: boolean;
  selected: T | null;
}): DisplayState => {
  return disabled
    ? "disabled"
    : selecting
      ? "selecting"
      : selected
        ? "selected"
        : "default";
};

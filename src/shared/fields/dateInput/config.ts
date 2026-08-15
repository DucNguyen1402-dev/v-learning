type DisplayState = "disabled" | "selecting" | "selected" | "placeholder";
export const displayState = ({
  disabled,
  selecting,
  selected,
}: {
  disabled: boolean;
  selecting: boolean;
  selected: Date | null;
}): DisplayState => {
  return disabled
    ? "disabled"
    : selecting
      ? "selecting"
      : selected
        ? "selected"
        : "placeholder";
};

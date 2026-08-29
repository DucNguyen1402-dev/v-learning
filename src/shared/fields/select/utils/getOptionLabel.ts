type SelectOption<T = string> = {
  label: string;
  value: T;
};

type SelectOptionGroup<T = string> = {
  label: string;
  options: readonly SelectOption<T>[];
};
export const getOptionLabel = <T>(
  options: readonly (SelectOption<T> | SelectOptionGroup<T>)[],
  value: T,
): string | undefined => {
  for (const option of options) {
    if ("options" in option) {
      const match = option.options.find((item) => item.value === value);

      if (match) return match.label;
    } else if (option.value === value) {
      return option.label;
    }
  }

  return undefined;
};

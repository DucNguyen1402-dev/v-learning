import { Select } from "@shared/fields";

import { pageSizeOptions } from "../config";

type PaginationSelectProps = {
  id?: string;
  value: number | string;
  hideEntity?: boolean;
  onChange: (value: number) => void;
  options?: { label: string; value: number | string }[];
  shouldCompactOptions?: boolean;
  disabled?: boolean;
};

export const PaginationSelect = ({
  value,
  hideEntity,
  onChange,
  shouldCompactOptions = false,
  disabled,
}: PaginationSelectProps) => {
  const onChangeHandler = (value: number | string | null) => {
    onChange(Number(value));
  };

  const isDesktop = window.innerWidth >= 1024;
  const options = shouldCompactOptions
    ? pageSizeOptions.compact
    : isDesktop
      ? pageSizeOptions.desktop
      : pageSizeOptions.compact;
  return (
    <div
      className={
        shouldCompactOptions
          ? "pagination-select-container-compact"
          : "pagination-select-container"
      }
    >
      <Select.Root>
        <Select.Trigger
          entity={hideEntity ? undefined : "trang"}
          disabled={disabled}
        />

        <Select.Content
          value={value}
          onChange={onChangeHandler}
          options={options}
          hideAllOption
        />
      </Select.Root>
    </div>
  );
};

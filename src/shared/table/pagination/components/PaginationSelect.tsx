import { Select } from "@shared/fields";
import { Skeleton, SKELETON_HEIGHTS } from "@shared/ui";

import { pageSizeOptions } from "../config";

type PaginationSelectProps = {
  id?: string;
  value: number | string;
  hideEntity?: boolean;
  onChange: (value: number) => void;
  options?: { label: string; value: number | string }[];
  shouldCompactOptions?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
};

export const PaginationSelect = ({
  value,
  hideEntity,
  onChange,
  shouldCompactOptions = false,
  disabled,
  isLoading = false,
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

  const containerClassName = shouldCompactOptions
    ? "pagination-select-container-compact"
    : "pagination-select-container";

  if (isLoading) {
    return (
      <div className={containerClassName}>
        <Skeleton height={SKELETON_HEIGHTS.XL} fullWidth />
      </div>
    );
  }

  return (
    <div className={containerClassName}>
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

export type SelectContextValues = {
  isOpen: boolean;
  value: string | number | null;
  setValue: (value: string | number | null) => void;
  toggle: () => void;
  close: () => void;
};

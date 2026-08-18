export type ProfileChangeFormValues = {
  hoTen: string;
  email: string;
  soDT: string;
};

export type ProfileChangeFormFieldNames = Record<
  string,
  keyof ProfileChangeFormValues
>;

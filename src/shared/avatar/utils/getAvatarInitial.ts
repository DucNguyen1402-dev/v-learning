export const getAvatarInitial = (fullName: string) => {
  if (!fullName?.trim()) return null;

  return fullName.trim().split(/\s+/).at(-1)?.charAt(0).toUpperCase() ?? null;
};

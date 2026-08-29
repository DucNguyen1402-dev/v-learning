export const getFileNameFromUrl = (url: string): string => {
  return new URL(url).pathname.split("/").pop() ?? "";
};

export const urlToFile = async (url: string): Promise<File> => {
  const response = await fetch(url);
  const blob = await response.blob();

  const fileName = new URL(url).pathname.split("/").pop() ?? "image";

  return new File([blob], fileName, {
    type: blob.type,
  });
};

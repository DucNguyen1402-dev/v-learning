export async function urlToFile(
  url: string,
  fileName = "image.jpg",
): Promise<File> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Không thể tải hình ảnh");
  }

  const blob = await response.blob();

  return new File([blob], fileName, {
    type: blob.type,
  });
}

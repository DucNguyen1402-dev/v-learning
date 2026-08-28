import { format } from "date-fns";
type CourseFormData = {
  hinhAnh: File[];
  ngayTao: string;
  [key: string]: string | File[];
};

export const createCourseFormData = (data: CourseFormData) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    switch (key) {
      case "hinhAnh": {
        const file = value[0];

        if (file instanceof File) {
          formData.append("File", file, file.name);
        }

        break;
      }

      case "ngayTao":
        formData.append(key, format(new Date(value as string), "dd/MM/yyyy"));
        break;

      default:
        formData.append(key, value as string);
    }
  });

  return formData;
};

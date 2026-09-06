import { useParams } from "react-router-dom";

import type { Category } from "@modules/courses/shared/types";

import { CourseCategoryProvider } from "../context";

export const CourseCategoryRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { maDanhMuc } = useParams<{ maDanhMuc: Category }>();

  return (
    <CourseCategoryProvider category={maDanhMuc!}>
      {children}
    </CourseCategoryProvider>
  );
};

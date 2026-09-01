import { useParams } from "react-router-dom";
export const CourseCategoryRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { category } = useParams<{ category: string }>();

  return <>{children}</>;
};

import { useParams } from "react-router-dom";

import { EnrollUserProvider } from "../context";

type EnrollUserRouteProviderProps = {
  children: React.ReactNode;
};

export const EnrollUserRouteProvider = ({
  children,
}: EnrollUserRouteProviderProps) => {
  const { maKhoaHoc } = useParams<{ maKhoaHoc: string }>();

  return (
    <EnrollUserProvider maKhoaHoc={maKhoaHoc as string}>
      {children}
    </EnrollUserProvider>
  );
};

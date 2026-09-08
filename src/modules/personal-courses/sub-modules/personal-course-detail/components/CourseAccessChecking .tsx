import { Loading } from "@shared/overlays";
export const CourseAccessChecking = () => {
  return (
    <div className="min-h-screen">
      <Loading.components.ContainerLoading isVisible={true} />
    </div>
  );
};

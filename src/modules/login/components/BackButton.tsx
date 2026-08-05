import { useRouteBack } from "@shared/hooks";
import { ArrowLeft } from "lucide-react";
const BackButton = () => {
  const routeBack = useRouteBack();

  return (
    <button className="back-button" onClick={() => routeBack()}>
      <ArrowLeft className="size-5" />
    </button>
  );
};

export default BackButton;

import { Navigation } from "@shared/navigation";
import { ArrowLeft } from "lucide-react";
export const BackButton = () => {
  const { back } = Navigation.useNavigate();

  return (
    <button className="back-button" onClick={() => back()}>
      <ArrowLeft className="size-5" />
    </button>
  );
};

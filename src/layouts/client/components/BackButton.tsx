import { Navigation } from "@shared/navigation";
import { Button } from "@shared/ui";
import { ArrowLeft } from "lucide-react";
export const BackButton = () => {
  const { back } = Navigation.useNavigate();

  return (
    <Button
      className="back-button"
      size="sm"
      icon={ArrowLeft}
      onClick={() => back()}
    ></Button>
  );
};

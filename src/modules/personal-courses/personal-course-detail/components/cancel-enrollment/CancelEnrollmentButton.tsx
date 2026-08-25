import { useState } from "react";

import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { Settings } from "lucide-react";

export const CancelEnrollmentButton = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  return (
    <div className="mb-6 flex flex-col items-end justify-end gap-2 overflow-hidden">
      <Button
        size={BUTTON_SIZES.NONE}
        onClick={() => setIsSettingOpen(!isSettingOpen)}
      >
        <Settings className="size-5 text-text-subtle" />
      </Button>
      <div
        className={`transition-opacity duration-300 ${
          isSettingOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <Button
          appearance={BUTTON_APPEARANCES.SOLID}
          intent={BUTTON_INTENTS.DESTRUCTIVE}
        >
          <span className="text-xs">Hủy ghi danh khóa học</span>
        </Button>
      </div>
    </div>
  );
};

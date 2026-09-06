import { Backdrop, useLockBodyScroll } from "@shared/overlays";
import { AnimatePresence, motion } from "motion/react";

import { CancelEnrollmentModal } from "./CancelEnrollmentModal";

type CancelEnrollmentModalRenderProps = {
  isOpen: boolean;
};
export const CancelEnrollmentModalRender = ({
  isOpen,
}: CancelEnrollmentModalRenderProps) => {
  useLockBodyScroll(isOpen);
  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <CancelEnrollmentModal />
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

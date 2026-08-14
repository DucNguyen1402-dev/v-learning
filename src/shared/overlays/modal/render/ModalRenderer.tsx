import { Backdrop, useLockBodyScroll } from "@shared/overlays";
import { AnimatePresence, motion } from "motion/react";

import { ModalContainer } from "../containers";
import { useModalContext } from "../contexts";

export const ModalRenderer = () => {
  const {
    internal: {
      state: { modalState },
    },
  } = useModalContext();

  useLockBodyScroll(modalState.isOpen);

  return (
    <AnimatePresence>
      {modalState.isOpen && (
        <Backdrop>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <ModalContainer />
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

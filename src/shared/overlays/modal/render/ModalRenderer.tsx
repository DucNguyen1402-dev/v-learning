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
  if (!modalState.isOpen) return null;

  return (
    <AnimatePresence>
      <Backdrop>
        <motion.div
          initial={{ y: 12, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 12, scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ModalContainer />
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

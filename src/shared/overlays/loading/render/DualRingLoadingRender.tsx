import { useLockBodyScroll } from "@shared/overlays";
import { Backdrop } from "@shared/overlays";
import { AnimatePresence, motion } from "motion/react";

import { DualRingSpinner } from "../components";
import { useLoadingContext } from "../contexts";

export const DualRingLoadingRender = () => {
  const { isVisible } = useLoadingContext();

  useLockBodyScroll(isVisible);
  return (
    <AnimatePresence>
      {isVisible && (
        <Backdrop>
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <DualRingSpinner />
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
